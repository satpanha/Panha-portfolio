import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.join(__dirname, '.env') });

const app = express();
const port = process.env.PORT || 3001;

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
  console.warn('Missing TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID in server/.env');
}

/**
 * Send a plain text message to Telegram chat via the Bot API.
 * Uses TELEGRAM_BOT_TOKEN and TELEGRAM_CHAT_ID from environment variables.
 * Throws on failure so callers can handle errors uniformly.
 * @param {string} text
 * @returns {Promise<object>} Telegram API JSON response
 */
async function sendTelegramMessage(text) {
  if (!text || typeof text !== 'string') {
    throw new Error('Invalid text payload');
  }
  if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
    throw new Error('Server not configured');
  }

  const resp = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      chat_id: TELEGRAM_CHAT_ID,
      text,
    }),
  });

  const data = await resp.json().catch(() => ({}));
  if (!resp.ok || data.ok !== true) {
    console.error('Telegram API error:', data);
    throw new Error('Failed to send message to Telegram');
  }
  return data;
}

app.use(express.json());

// Optional: Allow CORS during development (proxying via Vite is preferred)
app.use(cors({
  origin: true,
  credentials: false,
}));

app.get('/api/health', (req, res) => {
  res.json({ ok: true, service: 'contact-relay', timestamp: new Date().toISOString() });
});

/**
 * POST /api/send-message and /send-message
 * Body: { text: string }
 * Forwards the given text to Telegram via the bot.
 */
app.post(['/api/send-message', '/send-message'], async (req, res) => {
  try {
    const { text } = req.body || {};
    if (!text || typeof text !== 'string') {
      return res.status(400).json({ ok: false, error: 'Missing or invalid text' });
    }

    await sendTelegramMessage(text);
    res.json({ ok: true });
  } catch (err) {
    console.error('send-message error:', err);
    const message = err?.message || 'Internal server error';
    res.status(500).json({ ok: false, error: message });
  }
});

app.post('/api/contact', async (req, res) => {
  try {
    const { name, email,telegram_username, message } = req.body || {};
    if (!name || !email || !telegram_username || !message) {
      return res.status(400).json({ ok: false, error: 'Missing required fields' });
    }

    if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
      return res.status(500).json({ ok: false, error: 'Server not configured' });
    }

    const text = `New portfolio contact:\nName: ${name}\nEmail: ${email}\nTelegram: ${telegram_username}\n\n${message}`;
    await sendTelegramMessage(text);
    res.json({ ok: true });
  } catch (err) {
    console.error('Contact endpoint error:', err);
    res.status(500).json({ ok: false, error: 'Internal server error' });
  }
});

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
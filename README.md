# Portfolio (React + Vite) with Telegram Contact Backend

This portfolio has been upgraded with a Node/Express backend that forwards contact form submissions to Telegram using the Bot API.

## Setup

1) Install dependencies
- npm install

2) Configure Telegram credentials
- Copy server/.env.example to server/.env
- Fill TELEGRAM_BOT_TOKEN and TELEGRAM_CHAT_ID

3) Run development servers
- In one terminal: npm run server (starts backend at http://localhost:3001)
- In another terminal: npm run dev (starts frontend at http://localhost:5173 with /api proxy)

4) Test
- Open the site, submit the Contact form; you should receive a message in your Telegram chat.

## Build/Deploy
- Frontend builds as usual: npm run build
- For production backend, serve server/index.js with Node (or a process manager) and configure your reverse proxy to forward /api to the backend and static files to the frontend build.

## Security Notes
- Keep server/.env out of version control (already ignored)
- Do not expose your bot token publicly
# Panha-portfolio

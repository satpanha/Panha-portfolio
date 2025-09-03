import profilePhoto from "../assets/Sat_Panha_CSA.jpg";
import cvFile from "../assets/Sat_Panha_CV.pdf";

export default function Hero() {
  const handleLearnMoreClick = () => {
    const aboutSection = document.getElementById("about-me");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleDownloadCV = () => {
    console.log("Download CV clicked");
    const link = document.createElement("a");
    link.href = cvFile;
    link.download = "Sat_Panha_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="bg-secondary relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center py-12 md:py-20">
          <div className="flex justify-center md:order-2">
            <img
              src={profilePhoto}
              alt="Sat Panha"
              className="rounded-full shadow-lg"
            />
          </div>
          <div className="text-center md:text-left md:order-1">
            <p className="text-lg font-sans text-accent">Hi, I'm Sat Panha</p>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-primary font-serif mt-2">
              A Creative Developer Building Beautiful Web Experiences
            </h1>
            <p className="mt-4 text-text-dark font-sans">
              I am a passionate software engineering student with a love for
              building beautiful and functional web applications. I am here to
              help you grow your business.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center sm:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <button
                type="button"
                onClick={handleLearnMoreClick}
                className="w-full sm:w-auto px-6 py-3 rounded-md text-lg font-medium text-black border bg-primary hover:bg-primary/80 font-sans transition"
              >
                Learn More
              </button>
              <button
                type="button"
                onClick={handleDownloadCV}
                className="w-full sm:w-auto px-6 py-3 rounded-md text-lg font-medium text-primary bg-white border border-primary hover:bg-secondary font-sans transition"
              >
                Download CV
              </button>
            </div>
            <div className="mt-6 text-sm text-text-dark font-sans">
              <span>Based in Cambodia</span>
              <span className="mx-2">|</span>
              <span>Open to work</span>
              <span className="mx-2">|</span>
              <span>Available for freelance</span>
            </div>
            <div className="mt-4 text-sm text-text-dark font-sans">
              <span>Languages: English, Khmer</span>
            </div>
            <div className="mt-4 text-sm text-text-dark font-sans">
              <span>Interests: Web Development, UI/UX Design</span> 
              
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#E0F7FA"
            fillOpacity="1"
            d="M0,160L48,176C96,192,192,224,288,224C384,224,480,192,576,170.7C672,149,768,139,864,154.7C960,171,1056,213,1152,218.7C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
}

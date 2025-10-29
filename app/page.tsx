import Image from "next/image";
import AnimatedBackground from "./components/AnimatedBackground";

const CONTACT_EMAIL = "noah@noahspear.com";

export default function Home() {
  return (
    <main className="relative min-h-screen flex items-center justify-center p-4 sm:p-6 md:p-8 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 overflow-hidden">
      <AnimatedBackground />
      <div className="relative z-10 max-w-2xl w-full px-4">
        {/* Profile Image */}
        <div className="flex justify-center mb-6 sm:mb-8 px-4">
          <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 max-w-full">
            <Image
              src="/profile.jpg"
              alt="Noah Spear"
              fill
              className="rounded-full object-cover border-4 border-white/80 dark:border-gray-700/80 shadow-2xl"
              priority
            />
          </div>
        </div>

        {/* Name */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-3 sm:mb-4 text-gray-900 dark:text-white drop-shadow-lg">
          Noah Spear
        </h1>

        {/* Biography */}
        <div className="text-center mb-6 sm:mb-8">
          <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-200 leading-relaxed drop-shadow-md">
            Hello
          </p>
        </div>

        {/* Social Links */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 md:gap-6">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/noahspear"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-200 transform hover:scale-105 shadow-md hover:shadow-lg"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
              </svg>
              <span className="font-semibold">LinkedIn</span>
            </a>

            {/* X (Twitter) */}
            <a
              href="https://x.com/nkspear"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-2 px-6 py-3 bg-black hover:bg-gray-800 text-white rounded-lg transition-all duration-200 transform hover:scale-105 shadow-md hover:shadow-lg"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
              <span className="font-semibold">X</span>
            </a>

            {/* Email */}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="group flex items-center justify-center gap-2 px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg transition-all duration-200 transform hover:scale-105 shadow-md hover:shadow-lg"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M20.5 4h-17A1.5 1.5 0 002 5.5v13A1.5 1.5 0 003.5 20h17a1.5 1.5 0 001.5-1.5v-13A1.5 1.5 0 0020.5 4zm-.3 2l-7.73 6.23a1 1 0 01-1.24 0L3.5 6zM3 18.5V8.12l7.48 6a3 3 0 003.74 0L21 8.12V18.5z" />
              </svg>
              <span className="font-semibold">Email</span>
            </a>
        </div>
      </div>
    </main>
  );
}

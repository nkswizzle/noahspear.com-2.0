"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import AnimatedBackground from "./components/AnimatedBackground";

const CONTACT_EMAIL = "noah@noahspear.com";

export default function Home() {
  const [copyStatus, setCopyStatus] = useState<"idle" | "copied" | "error">("idle");
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    if (copyStatus === "idle") {
      return;
    }

    const timeout = setTimeout(() => setCopyStatus("idle"), 2000);

    return () => clearTimeout(timeout);
  }, [copyStatus]);

  const copyEmailToClipboard = async () => {
    const fallbackCopy = () => {
      if (typeof document === "undefined") {
        setCopyStatus("error");
        return;
      }
      try {
        const textarea = document.createElement("textarea");
        textarea.value = CONTACT_EMAIL;
        textarea.setAttribute("readonly", "");
        textarea.style.position = "absolute";
        textarea.style.left = "-9999px";
        document.body.appendChild(textarea);
        textarea.select();
        const successful = document.execCommand("copy");
        document.body.removeChild(textarea);
        setCopyStatus(successful ? "copied" : "error");
      } catch (error) {
        setCopyStatus("error");
      }
    };

    if (typeof navigator !== "undefined" && navigator.clipboard?.writeText) {
      try {
        await navigator.clipboard.writeText(CONTACT_EMAIL);
        setCopyStatus("copied");
        return;
      } catch (error) {
        // Fallback to the legacy approach below.
      }
    }

    fallbackCopy();
  };

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
            Alive
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
          <button
            type="button"
            onClick={copyEmailToClipboard}
            className="group flex items-center justify-center gap-2 px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg transition-all duration-200 transform hover:scale-105 shadow-md hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-emerald-400"
            aria-label={`Copy ${CONTACT_EMAIL} to clipboard`}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </button>
        </div>
        <div className="mt-4 text-center text-sm text-gray-600 dark:text-gray-300" aria-live="polite">
          {copyStatus === "copied" && "Email copied to clipboard!"}
          {copyStatus === "error" && "Unable to copy email. Please copy it manually."}
        </div>

        {/* Content Tabs */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {/* Bookshelf */}
          <button
            type="button"
            onClick={() => setActiveSection(activeSection === "bookshelf" ? null : "bookshelf")}
            className={`flex flex-col items-center justify-center p-6 backdrop-blur-sm rounded-lg shadow-md hover:shadow-lg transition-all duration-200 transform hover:scale-105 border ${
              activeSection === "bookshelf"
                ? "bg-blue-100 dark:bg-blue-900/50 border-blue-400 dark:border-blue-600"
                : "bg-white/80 dark:bg-gray-800/80 border-gray-200 dark:border-gray-700"
            }`}
          >
            <svg
              className="w-8 h-8 mb-3 text-gray-700 dark:text-gray-200"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
              />
            </svg>
            <span className="font-semibold text-gray-900 dark:text-white">Bookshelf</span>
            <span className="text-xs text-gray-600 dark:text-gray-400 mt-1">Books & Reading</span>
          </button>

          {/* Products */}
          <button
            type="button"
            onClick={() => setActiveSection(activeSection === "products" ? null : "products")}
            className={`flex flex-col items-center justify-center p-6 backdrop-blur-sm rounded-lg shadow-md hover:shadow-lg transition-all duration-200 transform hover:scale-105 border ${
              activeSection === "products"
                ? "bg-blue-100 dark:bg-blue-900/50 border-blue-400 dark:border-blue-600"
                : "bg-white/80 dark:bg-gray-800/80 border-gray-200 dark:border-gray-700"
            }`}
          >
            <svg
              className="w-8 h-8 mb-3 text-gray-700 dark:text-gray-200"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              />
            </svg>
            <span className="font-semibold text-gray-900 dark:text-white">Products</span>
            <span className="text-xs text-gray-600 dark:text-gray-400 mt-1">Recommendations</span>
          </button>

          {/* Music */}
          <button
            type="button"
            onClick={() => setActiveSection(activeSection === "music" ? null : "music")}
            className={`flex flex-col items-center justify-center p-6 backdrop-blur-sm rounded-lg shadow-md hover:shadow-lg transition-all duration-200 transform hover:scale-105 border ${
              activeSection === "music"
                ? "bg-blue-100 dark:bg-blue-900/50 border-blue-400 dark:border-blue-600"
                : "bg-white/80 dark:bg-gray-800/80 border-gray-200 dark:border-gray-700"
            }`}
          >
            <svg
              className="w-8 h-8 mb-3 text-gray-700 dark:text-gray-200"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
              />
            </svg>
            <span className="font-semibold text-gray-900 dark:text-white">Music</span>
            <span className="text-xs text-gray-600 dark:text-gray-400 mt-1">Playlists</span>
          </button>
        </div>

        {/* Content Display Area */}
        {activeSection && (
          <div className="mt-8 p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
            {activeSection === "bookshelf" && (
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Bookshelf</h3>

                {/* Books Section */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">Books</h4>
                  <div className="space-y-3">
                    <div>
                      <a
                        href="https://amzn.to/4nwX9MP"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
                      >
                        Beneath a Scarlet Sky
                      </a>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                        One of, if not the, best stories I've read around WW2
                      </p>
                    </div>
                  </div>
                </div>

                {/* Articles Section */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">Articles</h4>
                  <div className="space-y-3">
                    <div>
                      <a
                        href="https://www.highagency.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
                      >
                        High Agency
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeSection === "products" && (
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Products</h3>
                <div className="space-y-3">
                  <div>
                    <a
                      href="https://amzn.to/435ZmYl"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
                    >
                      Slant Board
                    </a>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      everyone has tight hamstrings
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeSection === "music" && (
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Music</h3>
                <div className="space-y-3">
                  <div>
                    <a
                      href="https://open.spotify.com/track/2Gu7LqbawC5nQ4pQBJHNeQ?si=1ba1f820a2654bf7"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
                    >
                      Rodriguez - Sugar Man
                    </a>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      Read about Rodriguez and watch the documentary. He lived in obscurity for decades in Detroit before being rediscovered as a superstar in South Africa.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </main>
  );
}

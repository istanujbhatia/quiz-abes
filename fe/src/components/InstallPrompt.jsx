import { useEffect, useState } from "react";

export default function InstallPrompt({ darkMode }) {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showPrompt, setShowPrompt] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handler = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowPrompt(true);

      // trigger fade-in after mounting
      setTimeout(() => setIsVisible(true), 10);
    };

    window.addEventListener("beforeinstallprompt", handler);
    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  const handleInstall = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      await deferredPrompt.userChoice;
      handleDismiss();
    }
  };

  const handleDismiss = () => {
    setIsVisible(false);
    setTimeout(() => setShowPrompt(false), 300); // match transition duration
  };

  setTimeout(handleDismiss, 10000); // auto-dismiss after 10 seconds

  if (!showPrompt) return null;

  return (
    <div
      className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-50 max-w-md w-full border rounded-2xl shadow-2xl backdrop-blur-md px-8 py-6 transition-all duration-700 ease-in-out transform ${
        darkMode
          ? "bg-gray-800 text-white border-white/30"
          : "bg-white text-gray-900 border-gray-300"
      } ${isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-90"}`}
    >
      <p className="text-lg font-semibold mb-2 text-center">
        Add to home screen for quick access!
      </p>
      <div className="flex justify-center gap-4 mt-4">
        <button
          className={`px-5 py-2 rounded-full font-medium shadow-md transition-colors duration-500 ${
            darkMode
              ? "bg-gray-700 text-white hover:bg-gray-600"
              : "bg-gray-200 text-gray-800 hover:bg-gray-300"
          }`}
          onClick={handleDismiss}
        >
          Nahh!!
        </button>
        <button
          className="bg-teal-600 text-white hover:bg-teal-700 transition-colors duration-500 px-5 py-2 rounded-full font-medium shadow-md"
          onClick={handleInstall}
        >
          Install
        </button>
      </div>
    </div>
  );
}

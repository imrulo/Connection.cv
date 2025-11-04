"use client";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 dark:bg-black text-gray-300 py-12 px-4 sm:px-6 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4">
          <p className="text-lg">
            Made with ❤️ by{" "}
            <a
              href="mailto:imrulo.eth@proton.me"
              className="text-premium-gold hover:text-yellow-400 transition-colors"
            >
              imrulo.eth
            </a>
          </p>
          <p className="text-sm text-gray-500">
            © {currentYear} All rights reserved.
          </p>
          <div className="pt-4 border-t border-gray-800 space-y-2 text-sm text-gray-500">
            <p>
              <strong>Disclaimer:</strong> This is a domain landing page for
              sale purposes only. No active services are implied.
            </p>
            <p>
              🔒 <strong>GDPR Note:</strong> We respect your privacy — no
              cookies, no tracking, no analytics.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}


import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 bottom-0">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center flex-col md:flex-row">
          {/* Links section */}
          <div className="flex flex-col md:flex-row md:space-x-8 mb-6 md:mb-0">
            <Link href="/">
              <p className="hover:text-white text-sm font-medium">Home</p>
            </Link>
            <Link href="/devices">
              <p className="hover:text-white text-sm font-medium">Devices</p>
            </Link>
            <Link href="/analytics">
              <p className="hover:text-white text-sm font-medium">Analytics</p>
            </Link>
            <Link href="/settings">
              <p className="hover:text-white text-sm font-medium">Settings</p>
            </Link>
            <Link href="/contact">
              <p className="hover:text-white text-sm font-medium">Contact</p>
            </Link>
          </div>

          {/* Social media icons */}
          <div className="flex space-x-6">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <svg
                className="w-6 h-6 hover:text-white"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M24 4.56a9.83 9.83 0 01-2.83.78 4.93 4.93 0 002.16-2.72 9.84 9.84 0 01-3.13 1.2A4.92 4.92 0 0016.88 3c-2.73 0-4.94 2.21-4.94 4.93 0 .39.04.76.13 1.13-4.1-.2-7.74-2.17-10.17-5.16a4.93 4.93 0 00-.67 2.48c0 1.71.87 3.22 2.19 4.1a4.89 4.89 0 01-2.24-.62v.06c0 2.4 1.7 4.4 3.96 4.85a4.91 4.91 0 01-2.22.08 4.93 4.93 0 004.6 3.42A9.87 9.87 0 010 20.55a13.93 13.93 0 007.55 2.21c9.05 0 14-7.5 14-14 0-.21 0-.42-.01-.63A10.06 10.06 0 0024 4.56z" />
              </svg>
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <svg
                className="w-6 h-6 hover:text-white"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M12 0a12 12 0 00-3.8 23.4c.6.1.8-.2.8-.6v-2.1c-3.3.7-4-1.6-4-1.6-.5-1.3-1.3-1.7-1.3-1.7-1.1-.8.1-.8.1-.8 1.2.1 1.9 1.2 1.9 1.2 1.1 1.9 2.9 1.3 3.6 1 .1-.8.4-1.3.8-1.6-2.6-.3-5.4-1.3-5.4-5.7 0-1.2.4-2.3 1.1-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.4 11.4 0 016 0C18 6 19 6.2 19 6.2c.7 1.7.3 2.9.1 3.2.7.8 1.1 2 1.1 3.2 0 4.4-2.8 5.4-5.5 5.7.4.4.8 1.1.8 2.2v3.2c0 .4.2.7.8.6A12 12 0 0012 0z" />
              </svg>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <svg
                className="w-6 h-6 hover:text-white"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M22.23 0H1.77A1.77 1.77 0 000 1.77v20.46A1.77 1.77 0 001.77 24h20.46A1.77 1.77 0 0024 22.23V1.77A1.77 1.77 0 0022.23 0zM7.12 20.45H3.56V9h3.56v11.45zM5.34 7.45A2.07 2.07 0 015.32 3a2.07 2.07 0 110 4.45h-.02zM20.45 20.45h-3.56v-5.6c0-1.34-.03-3.06-1.87-3.06-1.88 0-2.17 1.46-2.17 2.97v5.7h-3.56V9h3.42v1.57h.05c.48-.9 1.64-1.87 3.37-1.87 3.6 0 4.26 2.37 4.26 5.44v6.31z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="mt-8 text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()} IoT Dashboard. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

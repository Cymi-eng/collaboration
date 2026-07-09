import React from 'react';

const Footer = () => {

  return (
    <footer className="bg-black text-white border-t border-slate-800 dark:text-black dark:bg-white">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          
          <div className="space-y-4 xl:col-span-1">
            <h2 className="text-xl font-bold text-white tracking-wide dark:text-black">
              Collaboration
            </h2>
            <p className="text-sm text-slate-400 max-w-md">
              Building the future of modern online shopping.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-white tracking-wider uppercase dark:text-black">
                  Quick links
                </h3>
                <ul className="mt-4 space-y-2">
                  <li><a href="/" className="text-sm hover:text-white transition-colors">Home</a></li>
                  <li><a href="/Login" className="text-sm hover:text-white transition-colors">Sign in</a></li>
                  <li><a href="/register" className="text-sm hover:text-white transition-colors">Sign up</a></li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-white tracking-wider uppercase dark:text-black">
                  Support
                </h3>
                <ul className="mt-4 space-y-2">
                  <li><a href="#pricing" className="text-sm hover:text-white transition-colors">Pricing</a></li>
                  <li><a href="#FAQ" className="text-sm hover:text-white transition-colors">FAQ</a></li>
                  <li><a href="/contact" className="text-sm hover:text-white transition-colors">Contact</a></li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-white tracking-wider uppercase dark:text-black">
                Connect
              </h3>
              <ul className="mt-4 space-y-2">
                <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-white transition-colors">X</a></li>
                <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-white transition-colors">Instagram</a></li>
                <li><a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-white transition-colors">Tiktok</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="text-sm text-slate-400 order-2 md:order-1">
            &copy; 2026 Collaboration. All rights reserved.
          </p>
          
          <div className="flex space-x-6 order-1 md:order-2">
            <a 
              href="/privacy-policy" 
              className="text-sm text-slate-400 hover:text-white transition-colors font-medium"
            >
              Privacy Policy
            </a>
            <a 
              href="/terms-and-conditions" 
              className="text-sm text-slate-400 hover:text-white transition-colors font-medium"
            >
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
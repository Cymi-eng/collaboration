import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 text-slate-500 text-xs py-6">
      <div className="mx-auto max-w-screen-xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        
        {/* Brand & Copyright */}
        <p>
          &copy; {new Date().getFullYear()}{' '}
          <Link to="/" className="text-slate-400 font-bold hover:text-orange-500 transition">
            Zindua Market
          </Link>
          . All rights reserved.
        </p>

        {/* Minimal Links */}
        <div className="flex gap-4 font-medium">
          <Link to="/contact" className="hover:text-slate-300 transition">Contact</Link>
          <Link to="/privacy" className="hover:text-slate-300 transition">Privacy</Link>
          <Link to="/terms" className="hover:text-slate-300 transition">Terms</Link>
        </div>

      </div>
    </footer>
  );
}
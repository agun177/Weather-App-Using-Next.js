import Link from "next/link";
import { CloudSun, ExternalLink, Heart, Github, MapPin, Mail, Sparkles } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-slate-950 border-t border-slate-800 text-slate-400 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3 group focus:outline-none">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 via-sky-500 to-indigo-500 p-0.5 shadow-lg shadow-sky-500/20 group-hover:scale-105 transition-transform duration-200">
                <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                  <CloudSun className="w-5 h-5 text-sky-400" />
                </div>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-white via-slate-100 to-sky-300 bg-clip-text text-transparent">
                SkyCast
              </span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed">
              A modern, high-precision weather tracking web application built with Next.js, Tailwind CSS, and powered by Open-Meteo free API.
            </p>
            <div className="flex items-center gap-2 text-xs text-sky-400 bg-sky-950/40 border border-sky-800/40 px-3 py-1.5 rounded-lg w-fit">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Ostad Web Development - Module 16</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-white text-sm font-semibold tracking-wider uppercase mb-4">
              Quick Navigation
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/"
                  className="hover:text-sky-400 transition-colors flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-500"></span>
                  Home Weather Dashboard
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-sky-400 transition-colors flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-500"></span>
                  About Application
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-sky-400 transition-colors flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-500"></span>
                  Weather Services
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-sky-400 transition-colors flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-500"></span>
                  Contact & Support
                </Link>
              </li>
            </ul>
          </div>

          {/* API & Tech Stack */}
          <div>
            <h3 className="text-white text-sm font-semibold tracking-wider uppercase mb-4">
              Weather Data & Tech
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="https://open-meteo.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-sky-400 transition-colors inline-flex items-center gap-1.5 text-slate-300"
                >
                  <span>Open-Meteo Free API</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
                </a>
              </li>
              <li>
                <span className="text-slate-400">Next.js App Router</span>
              </li>
              <li>
                <span className="text-slate-400">Tailwind CSS v4</span>
              </li>
              <li>
                <span className="text-slate-400">Lucide Modern Icons</span>
              </li>
              <li>
                <span className="text-slate-400">Open-Meteo Geocoding</span>
              </li>
            </ul>
          </div>

          {/* Developer / Project details */}
          <div>
            <h3 className="text-white text-sm font-semibold tracking-wider uppercase mb-4">
              Project Information
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span>Dhaka, Bangladesh</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span>support@skycast-weather.local</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-xs space-y-1">
                <p className="text-slate-300 font-medium">Assignment Requirements:</p>
                <p className="text-slate-400">✓ 4 Pages (Home, About, Services, Contact)</p>
                <p className="text-slate-400">✓ Temperature, Time, Interval, Humidity, Wind Speed</p>
                <p className="text-slate-400">✓ Tailwind CSS Responsive Design</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 SkyCast Weather App. All rights reserved.</p>
          <div className="flex items-center gap-1">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
            <span>for Ostad Assignment Module 16</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

import Link from "next/link";
import WeatherCard from "@/components/WeatherCard";
import {
  CloudSun,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Zap,
  Globe2,
  Cpu,
  Layers,
  Thermometer,
  Clock,
  Timer,
  Droplets,
  Wind,
} from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-12 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background glow effects */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-sky-500/10 blur-[130px] rounded-full pointer-events-none" />
        <div className="absolute top-10 right-10 w-72 h-72 bg-blue-600/10 blur-[100px] rounded-full pointer-events-none" />

        <div className="max-w-5xl mx-auto text-center space-y-4 mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-sky-400 text-xs font-semibold tracking-wide shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-sky-400" />
            <span>Next.js & Open-Meteo Weather Platform</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-tight">
            Live Global Weather, <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-400 bg-clip-text text-transparent">
              Hyper-Accurate & Real-Time
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-slate-400 text-sm sm:text-base leading-relaxed">
            Instant meteorological intelligence delivering temperature, current time,
            interval rate, humidity, and wind speed for any location across the globe.
          </p>
        </div>

        {/* Weather Display Component */}
        <WeatherCard />
      </section>

      {/* About Section on Home Page (Required: Home: Header, Weather Display, About Section এবং Footer) */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/40 border-t border-slate-800/80 relative">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Section Header */}
          <div className="text-center space-y-3 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-medium">
              <span>About SkyCast</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Designed for Speed, Precision & Clarity
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              SkyCast is an intelligent weather dashboard created as part of the Ostad Web Development program. It unites the speed of Next.js App Router with Open-Meteo’s open-source meteorological models.
            </p>
          </div>

          {/* 4 Feature Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-slate-950/70 border border-slate-800 hover:border-sky-500/40 transition-all hover:-translate-y-1 group">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-4 group-hover:scale-110 transition-transform">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Zero Latency API</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Direct integration with Open-Meteo high-performance APIs without rate-limits or API keys required.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-950/70 border border-slate-800 hover:border-sky-500/40 transition-all hover:-translate-y-1 group">
              <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 mb-4 group-hover:scale-110 transition-transform">
                <Globe2 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Global Geocoding</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Search and explore weather conditions across millions of cities, towns, and regions worldwide in seconds.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-950/70 border border-slate-800 hover:border-sky-500/40 transition-all hover:-translate-y-1 group">
              <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-4 group-hover:scale-110 transition-transform">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Next.js & React 19</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Built on Next.js with server components, fast client hydration, and dynamic Tailwind styling.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-950/70 border border-slate-800 hover:border-sky-500/40 transition-all hover:-translate-y-1 group">
              <div className="w-12 h-12 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400 mb-4 group-hover:scale-110 transition-transform">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Privacy & Clean</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                No tracking cookies, no accounts, and no intrusive ads. Pure weather intelligence at your fingertips.
              </p>
            </div>
          </div>

          {/* Quick Stats Banner */}
          <div className="p-8 rounded-3xl bg-gradient-to-r from-blue-900/30 via-slate-900 to-indigo-900/30 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center md:text-left">
              <h3 className="text-xl font-bold text-white">
                Want to learn more about our architecture & services?
              </h3>
              <p className="text-sm text-slate-400">
                Explore our detailed About page and comprehensive weather services breakdown.
              </p>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <Link
                href="/about"
                className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-sm font-semibold transition-all border border-slate-700"
              >
                Read About Us
              </Link>
              <Link
                href="/services"
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-sky-500 hover:from-blue-500 hover:to-sky-400 text-white text-sm font-semibold shadow-lg shadow-sky-500/25 transition-all flex items-center gap-2"
              >
                <span>View Services</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

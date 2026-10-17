import Link from "next/link";
import {
  CloudSun,
  Shield,
  Zap,
  Globe2,
  CheckCircle2,
  Code2,
  Database,
  ArrowRight,
  ExternalLink,
  Thermometer,
  Clock,
  Timer,
  Droplets,
  Wind,
  Sparkles,
} from "lucide-react";

export const metadata = {
  title: "About SkyCast | Next.js Weather Intelligence",
  description:
    "Learn about SkyCast, an open-source weather platform built with Next.js, Tailwind CSS, and Open-Meteo free API.",
};

export default function AboutPage() {
  const metrics = [
    {
      title: "Temperature",
      metric: "temperature_2m",
      desc: "Measured at 2 meters above ground level, representing standard human ambient temperature.",
      icon: Thermometer,
      color: "text-amber-400 bg-amber-500/10 border-amber-500/20",
    },
    {
      title: "Observation Time",
      metric: "time (ISO 8601)",
      desc: "Timestamp of meteorological recording formatted for user timezone clarity.",
      icon: Clock,
      color: "text-sky-400 bg-sky-500/10 border-sky-500/20",
    },
    {
      title: "Update Interval",
      metric: "interval (seconds)",
      desc: "Frequency of data refresh cycle (typically 900 seconds / 15 minutes) from meteorological stations.",
      icon: Timer,
      color: "text-indigo-400 bg-indigo-500/10 border-indigo-500/20",
    },
    {
      title: "Relative Humidity",
      metric: "relative_humidity_2m",
      desc: "Moisture content relative to saturation at current ambient temperature, expressed as a percentage.",
      icon: Droplets,
      color: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
    },
    {
      title: "Wind Speed",
      metric: "wind_speed_10m",
      desc: "Wind velocity measured at standard 10-meter meteorological mast height in kilometers per hour.",
      icon: Wind,
      color: "text-teal-400 bg-teal-500/10 border-teal-500/20",
    },
  ];

  const techStack = [
    {
      name: "Next.js (App Router)",
      role: "Framework",
      description: "Fast routing, server rendering, optimized layouts, and client interactivity.",
    },
    {
      name: "Tailwind CSS v4",
      role: "Styling",
      description: "Modern utility-first CSS for sleek, fully responsive design and dark mode aesthetics.",
    },
    {
      name: "Open-Meteo API",
      role: "Weather Data",
      description: "Free, high-resolution open data API requiring no API key and offering global coverage.",
    },
    {
      name: "Lucide React",
      role: "Iconography",
      description: "Clean, consistent icons representing dynamic weather conditions and UI actions.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto w-full space-y-16">
        {/* Header Hero */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-sky-400 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>About The Project</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Empowering You with Real-Time <br />
            <span className="bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-400 bg-clip-text text-transparent">
              Weather Intelligence
            </span>
          </h1>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            SkyCast was created as part of the Ostad Web Development Course (Module 16 Assignment).
            Our goal is to demonstrate modern Next.js development by blending real-time weather APIs
            with responsive design and clean software architecture.
          </p>
        </div>

        {/* Mission & Overview Card */}
        <div className="p-8 sm:p-10 rounded-3xl bg-slate-900/60 border border-slate-800 backdrop-blur-xl space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400">
              <CloudSun className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                Application Overview
              </h2>
              <p className="text-xs text-slate-400">Simple, Reliable, and Accurate Weather</p>
            </div>
          </div>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Many traditional weather apps are weighed down by heavy tracking scripts, intrusive advertisements, and complicated authentication walls. 
            SkyCast takes the opposite path: a lightning-fast, privacy-first interface that gets you the meteorological metrics you need in milliseconds.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
            <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800/80">
              <div className="text-sky-400 text-2xl font-black mb-1">100% Free</div>
              <p className="text-xs text-slate-400">Powered by Open-Meteo open weather models with no paywall.</p>
            </div>
            <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800/80">
              <div className="text-emerald-400 text-2xl font-black mb-1">Global Scale</div>
              <p className="text-xs text-slate-400">Searchable across millions of global coordinates and cities.</p>
            </div>
            <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800/80">
              <div className="text-indigo-400 text-2xl font-black mb-1">15-Min Cadence</div>
              <p className="text-xs text-slate-400">High frequency observational interval updates for accuracy.</p>
            </div>
          </div>
        </div>

        {/* Requirements & Metrics Breakdown */}
        <div className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-white tracking-tight">
              Core Weather Telemetry Explained
            </h2>
            <p className="text-sm text-slate-400">
              As required by the assignment, our application tracks and presents these five fundamental meteorological data points:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {metrics.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="p-5 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-slate-700 transition-all space-y-3"
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-2.5 rounded-xl border ${item.color}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white">{item.title}</h3>
                      <span className="text-[11px] font-mono text-slate-400">{item.metric}</span>
                    </div>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Technology Stack Grid */}
        <div className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-white tracking-tight">
              Technology Architecture
            </h2>
            <p className="text-sm text-slate-400">
              Built using industry-standard modern web tools for ultimate performance and maintainability:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {techStack.map((tech) => (
              <div
                key={tech.name}
                className="p-5 rounded-2xl bg-slate-900/70 border border-slate-800 flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-sky-400 shrink-0">
                  <Code2 className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <h3 className="text-base font-bold text-white">{tech.name}</h3>
                    <span className="text-[10px] uppercase font-semibold px-2 py-0.5 rounded-full bg-slate-800 text-slate-300">
                      {tech.role}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {tech.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Open-Meteo Attribution Card */}
        <div className="p-6 rounded-2xl bg-gradient-to-r from-blue-950/40 via-slate-900 to-indigo-950/40 border border-blue-900/40 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-2 text-sky-400 text-xs font-semibold uppercase">
              <Database className="w-4 h-4" />
              <span>Data Source Attribution</span>
            </div>
            <h3 className="text-lg font-bold text-white">
              Weather Data by Open-Meteo.com
            </h3>
            <p className="text-xs text-slate-400 max-w-xl">
              Weather forecasts are computed by national weather services (such as DWD, NOAA, ECMWF) and provided via Open-Meteo under the Attribution 4.0 International license.
            </p>
          </div>
          <a
            href="https://open-meteo.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-xl bg-sky-500 hover:bg-sky-400 text-white text-xs font-semibold shadow-md transition-all flex items-center gap-1.5 shrink-0"
          >
            <span>Visit Open-Meteo</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* CTA to Explore */}
        <div className="text-center pt-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-sky-500 hover:from-blue-500 hover:to-sky-400 text-white text-sm font-semibold shadow-lg shadow-sky-500/25 transition-all"
          >
            <span>Back to Live Weather Dashboard</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}

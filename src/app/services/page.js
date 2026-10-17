import Link from "next/link";
import {
  Activity,
  Compass,
  CalendarDays,
  Search,
  Sliders,
  Smartphone,
  ShieldCheck,
  Zap,
  ArrowRight,
  Sparkles,
  CloudLightning,
  Eye,
  CheckCircle2,
} from "lucide-react";

export const metadata = {
  title: "Weather Services | SkyCast Weather Intelligence",
  description:
    "Explore SkyCast's meteorological services, real-time weather telemetry, 7-day forecasts, and global geocoding features.",
};

export default function ServicesPage() {
  const services = [
    {
      title: "Real-Time Telemetry Tracking",
      tag: "Live Data",
      icon: Activity,
      desc: "Instant live updates of atmospheric temperature, relative humidity, wind speed, observation timestamp, and station update interval.",
      features: [
        "2-meter ambient temperature monitoring",
        "Sub-kilometer localized humidity metrics",
        "10-meter altitude wind speed & direction",
        "Cadence tracking with 15-minute intervals",
      ],
      color: "from-blue-600/20 to-sky-500/10 border-blue-500/30 text-sky-400",
    },
    {
      title: "7-Day Meteorological Forecast",
      tag: "Predictive",
      icon: CalendarDays,
      desc: "High-resolution daily outlooks providing anticipated high/low temperatures and weather conditions mapped to WMO standards.",
      features: [
        "7-day daily maximum and minimum temps",
        "WMO weather code interpretation",
        "Condition icons for sunshine, rain, snow & storms",
        "Seamless daily planning assistance",
      ],
      color: "from-indigo-600/20 to-purple-500/10 border-indigo-500/30 text-indigo-400",
    },
    {
      title: "Global Geocoding & City Search",
      tag: "Worldwide",
      icon: Search,
      desc: "Fast, intelligent search across hundreds of thousands of cities, municipalities, and regions around the globe.",
      features: [
        "Instant search via Open-Meteo Geocoding API",
        "Automatic latitude & longitude coordinate resolution",
        "Quick-access chips for popular international capitals",
        "Timezone-adjusted meteorological calculations",
      ],
      color: "from-teal-600/20 to-emerald-500/10 border-teal-500/30 text-teal-400",
    },
    {
      title: "Dual Temperature Metric System",
      tag: "Customization",
      icon: Sliders,
      desc: "Effortlessly toggle between Celsius (°C) and Fahrenheit (°F) with instantaneous real-time recalculation across all panels.",
      features: [
        "One-click °C / °F toggle",
        "Synchronized conversion on hero and 7-day forecast",
        "Feels-like temperature calculation",
        "Zero page reload required",
      ],
      color: "from-amber-600/20 to-orange-500/10 border-amber-500/30 text-amber-400",
    },
    {
      title: "Multi-Device Responsive Experience",
      tag: "UX Design",
      icon: Smartphone,
      desc: "Handcrafted responsive layouts powered by Tailwind CSS that look stunning on mobile phones, tablets, and 4K displays.",
      features: [
        "Mobile hamburger menu with smooth transitions",
        "Adaptive grid system for weather tiles",
        "Touch-friendly buttons and search suggestions",
        "Low battery and low bandwidth friendly",
      ],
      color: "from-cyan-600/20 to-blue-500/10 border-cyan-500/30 text-cyan-400",
    },
    {
      title: "100% Free & Open-Access Architecture",
      tag: "Public Good",
      icon: ShieldCheck,
      desc: "Built on open-source principles and public weather research models with no hidden fees, paywalls, or privacy-invasive trackers.",
      features: [
        "Zero API keys or sign-up needed",
        "Strictly private with no tracking telemetry",
        "Data sourced from DWD, NOAA, ECMWF",
        "Open for educational and research usage",
      ],
      color: "from-emerald-600/20 to-teal-500/10 border-emerald-500/30 text-emerald-400",
    },
  ];

  const workflowSteps = [
    {
      step: "01",
      title: "Location Selection",
      description: "Search any worldwide city or pick from pre-configured hubs like Dhaka, London, or Tokyo.",
    },
    {
      step: "02",
      title: "Open-Meteo Telemetry Call",
      description: "SkyCast queries Open-Meteo REST endpoints for coordinates, current conditions, and daily models.",
    },
    {
      step: "03",
      title: "Data Parsing & Formatting",
      description: "Atmospheric numbers are decoded: temperatures, observation times, interval cadence, and WMO codes.",
    },
    {
      step: "04",
      title: "Dynamic Visual Display",
      description: "Tailwind UI renders beautiful cards, gradients, and icons tailored to current weather conditions.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto w-full space-y-20">
        {/* Header Hero */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-sky-400 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Weather Services & Capabilities</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Comprehensive Meteorological <br />
            <span className="bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-400 bg-clip-text text-transparent">
              Services & Features
            </span>
          </h1>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Discover the full suite of weather-related capabilities delivered by SkyCast.
            Built with modern web standards to deliver real-time data with unmatched clarity.
          </p>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className={`p-6 rounded-3xl bg-slate-900/50 border backdrop-blur-sm hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between ${item.color}`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="p-3 rounded-2xl bg-slate-950/80 border border-slate-800">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-slate-950/80 border border-slate-800 text-slate-300 uppercase tracking-wider">
                      {item.tag}
                    </span>
                  </div>

                  <h2 className="text-xl font-bold text-white tracking-tight">
                    {item.title}
                  </h2>

                  <p className="text-sm text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>

                  <div className="pt-2 border-t border-slate-800/80 space-y-2">
                    {item.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* How It Works Pipeline */}
        <div className="p-8 sm:p-12 rounded-3xl bg-slate-900/60 border border-slate-800 space-y-10">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              How SkyCast Processes Weather Data
            </h2>
            <p className="text-sm text-slate-400">
              A transparent look at the four-step data pipeline behind every forecast.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {workflowSteps.map((ws) => (
              <div
                key={ws.step}
                className="p-5 rounded-2xl bg-slate-950/70 border border-slate-800 relative space-y-2"
              >
                <div className="text-3xl font-black text-sky-500/30">
                  {ws.step}
                </div>
                <h3 className="text-base font-bold text-white">
                  {ws.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {ws.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to action banner */}
        <div className="p-8 rounded-3xl bg-gradient-to-r from-blue-900/40 via-slate-900 to-indigo-900/40 border border-blue-900/50 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-xl font-bold text-white">
              Ready to explore live weather conditions?
            </h3>
            <p className="text-sm text-slate-400">
              Jump back into the live dashboard or get in touch if you have feedback.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <Link
              href="/"
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-sky-500 hover:from-blue-500 hover:to-sky-400 text-white text-sm font-semibold shadow-lg shadow-sky-500/25 transition-all flex items-center gap-2"
            >
              <span>Live Dashboard</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-sm font-semibold border border-slate-700 transition-all"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

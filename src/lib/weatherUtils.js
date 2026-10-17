export const PRESET_CITIES = [
  { name: "Dhaka", country: "Bangladesh", latitude: 23.8103, longitude: 90.4125 },
  { name: "Chittagong", country: "Bangladesh", latitude: 22.3569, longitude: 91.7832 },
  { name: "Sylhet", country: "Bangladesh", latitude: 24.8949, longitude: 91.8687 },
  { name: "London", country: "United Kingdom", latitude: 51.5074, longitude: -0.1278 },
  { name: "New York", country: "United States", latitude: 40.7128, longitude: -74.006 },
  { name: "Tokyo", country: "Japan", latitude: 35.6762, longitude: 139.6503 },
  { name: "Dubai", country: "United Arab Emirates", latitude: 25.2048, longitude: 55.2708 },
];

export function getWeatherCondition(code, isDay = 1) {
  switch (code) {
    case 0:
      return {
        label: isDay ? "Clear Sky" : "Clear Night",
        iconName: isDay ? "Sun" : "Moon",
        gradient: "from-amber-500/20 via-orange-500/10 to-transparent",
        accent: "text-amber-400",
        badge: "bg-amber-500/20 text-amber-300 border-amber-500/30",
      };
    case 1:
      return {
        label: "Mainly Clear",
        iconName: isDay ? "CloudSun" : "CloudMoon",
        gradient: "from-sky-500/20 via-blue-500/10 to-transparent",
        accent: "text-sky-400",
        badge: "bg-sky-500/20 text-sky-300 border-sky-500/30",
      };
    case 2:
      return {
        label: "Partly Cloudy",
        iconName: "CloudSun",
        gradient: "from-sky-600/20 via-slate-600/10 to-transparent",
        accent: "text-sky-300",
        badge: "bg-sky-500/20 text-sky-300 border-sky-500/30",
      };
    case 3:
      return {
        label: "Overcast",
        iconName: "Cloud",
        gradient: "from-slate-600/20 via-zinc-600/10 to-transparent",
        accent: "text-slate-300",
        badge: "bg-slate-500/20 text-slate-300 border-slate-500/30",
      };
    case 45:
    case 48:
      return {
        label: "Foggy",
        iconName: "CloudFog",
        gradient: "from-teal-600/20 via-slate-600/10 to-transparent",
        accent: "text-teal-300",
        badge: "bg-teal-500/20 text-teal-300 border-teal-500/30",
      };
    case 51:
    case 53:
    case 55:
      return {
        label: "Drizzle",
        iconName: "CloudDrizzle",
        gradient: "from-cyan-600/20 via-blue-600/10 to-transparent",
        accent: "text-cyan-300",
        badge: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30",
      };
    case 61:
    case 63:
    case 65:
      return {
        label: "Rain",
        iconName: "CloudRain",
        gradient: "from-blue-600/25 via-indigo-600/15 to-transparent",
        accent: "text-blue-400",
        badge: "bg-blue-500/20 text-blue-300 border-blue-500/30",
      };
    case 71:
    case 73:
    case 75:
    case 77:
    case 85:
    case 86:
      return {
        label: "Snow",
        iconName: "CloudSnow",
        gradient: "from-indigo-400/20 via-purple-500/10 to-transparent",
        accent: "text-indigo-300",
        badge: "bg-indigo-500/20 text-indigo-300 border-indigo-500/30",
      };
    case 80:
    case 81:
    case 82:
      return {
        label: "Rain Showers",
        iconName: "CloudRain",
        gradient: "from-blue-700/25 via-sky-600/15 to-transparent",
        accent: "text-sky-400",
        badge: "bg-sky-500/20 text-sky-300 border-sky-500/30",
      };
    case 95:
    case 96:
    case 99:
      return {
        label: "Thunderstorm",
        iconName: "CloudLightning",
        gradient: "from-violet-700/30 via-amber-600/15 to-transparent",
        accent: "text-amber-400",
        badge: "bg-violet-500/20 text-violet-300 border-violet-500/30",
      };
    default:
      return {
        label: "Clear",
        iconName: "Sun",
        gradient: "from-sky-500/20 via-blue-500/10 to-transparent",
        accent: "text-sky-400",
        badge: "bg-sky-500/20 text-sky-300 border-sky-500/30",
      };
  }
}

export function formatInterval(seconds) {
  if (!seconds && seconds !== 0) return "N/A";
  const num = Number(seconds);
  if (num >= 60) {
    const mins = Math.round(num / 60);
    return `${mins} min (${num}s)`;
  }
  return `${num} seconds`;
}

export function formatWeatherTime(isoTimeStr, timezone) {
  if (!isoTimeStr) return "N/A";
  try {
    const date = new Date(isoTimeStr);
    return {
      dateFormatted: date.toLocaleDateString("en-US", {
        weekday: "short",
        month: "short",
        day: "numeric",
        year: "numeric",
      }),
      timeFormatted: date.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      }),
      rawTime: isoTimeStr,
    };
  } catch (err) {
    return {
      dateFormatted: isoTimeStr,
      timeFormatted: isoTimeStr,
      rawTime: isoTimeStr,
    };
  }
}

export function formatDayName(isoDateStr) {
  if (!isoDateStr) return "";
  try {
    const date = new Date(isoDateStr);
    return date.toLocaleDateString("en-US", { weekday: "short" });
  } catch {
    return isoDateStr;
  }
}

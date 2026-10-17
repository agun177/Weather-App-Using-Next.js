"use client";

import { useState, useEffect, useCallback } from "react";
import {
  Search,
  MapPin,
  RefreshCw,
  Thermometer,
  Clock,
  Timer,
  Droplets,
  Wind,
  Sun,
  Moon,
  CloudSun,
  Cloud,
  CloudRain,
  CloudDrizzle,
  CloudLightning,
  CloudSnow,
  CloudFog,
  Compass,
  ArrowUp,
  ArrowDown,
  AlertCircle,
  Sparkles,
} from "lucide-react";
import {
  PRESET_CITIES,
  getWeatherCondition,
  formatInterval,
  formatWeatherTime,
  formatDayName,
} from "@/lib/weatherUtils";

export default function WeatherCard() {
  const [selectedCity, setSelectedCity] = useState(PRESET_CITIES[0]); // Default to Dhaka
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [tempUnit, setTempUnit] = useState("C"); // 'C' or 'F'

  // Fetch weather data for manual triggers (e.g. Refresh button)
  const fetchWeather = useCallback(async (city) => {
    try {
      const url = `https://api.open-meteo.com/v1/forecast?latitude=${city.latitude}&longitude=${city.longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,weather_code,wind_speed_10m&daily=weather_code,temperature_2m_max,temperature_2m_min&timezone=auto`;
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error(`Weather API returned status: ${res.status}`);
      }
      const data = await res.json();
      setWeatherData(data);
      setError(null);
    } catch (err) {
      console.error("Failed to fetch weather data:", err);
      setError("Unable to load live weather data. Please check your internet connection.");
    } finally {
      setLoading(false);
    }
  }, []);

  // Fetch weather on mount and when selectedCity changes
  useEffect(() => {
    let ignore = false;

    async function loadData() {
      try {
        const url = `https://api.open-meteo.com/v1/forecast?latitude=${selectedCity.latitude}&longitude=${selectedCity.longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,weather_code,wind_speed_10m&daily=weather_code,temperature_2m_max,temperature_2m_min&timezone=auto`;
        const res = await fetch(url);
        if (!res.ok) {
          throw new Error(`Weather API returned status: ${res.status}`);
        }
        const data = await res.json();
        if (!ignore) {
          setWeatherData(data);
          setError(null);
          setLoading(false);
        }
      } catch (err) {
        console.error("Failed to fetch weather data:", err);
        if (!ignore) {
          setError("Unable to load live weather data. Please check your internet connection.");
          setLoading(false);
        }
      }
    }

    loadData();

    return () => {
      ignore = true;
    };
  }, [selectedCity]);

  const handleRefresh = () => {
    setLoading(true);
    fetchWeather(selectedCity);
  };

  // Handle City Search via Open-Meteo Geocoding
  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    setIsSearching(true);
    try {
      const res = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(
          searchQuery.trim()
        )}&count=5&language=en&format=json`
      );
      const data = await res.json();
      if (data.results && data.results.length > 0) {
        setSearchResults(data.results);
      } else {
        setSearchResults([]);
        setError(`No cities found for "${searchQuery}".`);
      }
    } catch (err) {
      console.error("Geocoding search failed:", err);
      setError("City search failed. Please try again.");
    } finally {
      setIsSearching(false);
    }
  };

  const handleSelectCityResult = (result) => {
    const city = {
      name: result.name,
      country: result.country || result.country_code || "",
      latitude: result.latitude,
      longitude: result.longitude,
    };
    setSelectedCity(city);
    setSearchQuery("");
    setSearchResults([]);
    setError(null);
  };

  // Convert temperature based on selected unit
  const displayTemp = (celsius) => {
    if (celsius === undefined || celsius === null) return "--";
    if (tempUnit === "F") {
      return Math.round((celsius * 9) / 5 + 32);
    }
    return Math.round(celsius);
  };

  // Weather Icon Component
  const renderWeatherIcon = (iconName, className = "w-8 h-8") => {
    switch (iconName) {
      case "Sun":
        return <Sun className={`${className} text-amber-400`} />;
      case "Moon":
        return <Moon className={`${className} text-indigo-300`} />;
      case "CloudSun":
        return <CloudSun className={`${className} text-sky-400`} />;
      case "Cloud":
        return <Cloud className={`${className} text-slate-300`} />;
      case "CloudRain":
        return <CloudRain className={`${className} text-blue-400`} />;
      case "CloudDrizzle":
        return <CloudDrizzle className={`${className} text-cyan-300`} />;
      case "CloudLightning":
        return <CloudLightning className={`${className} text-amber-300`} />;
      case "CloudSnow":
        return <CloudSnow className={`${className} text-indigo-200`} />;
      case "CloudFog":
        return <CloudFog className={`${className} text-teal-300`} />;
      default:
        return <Sun className={`${className} text-amber-400`} />;
    }
  };

  const current = weatherData?.current;
  const currentUnits = weatherData?.current_units;
  const condition = current
    ? getWeatherCondition(current.weather_code, current.is_day)
    : getWeatherCondition(0, 1);
  const timeInfo = current ? formatWeatherTime(current.time) : null;

  return (
    <div className="w-full max-w-5xl mx-auto space-y-6">
      {/* Search Bar & City Selector Section */}
      <div className="bg-slate-900/90 border border-slate-800 backdrop-blur-xl rounded-2xl p-4 sm:p-6 shadow-2xl">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          {/* Search input form */}
          <form
            onSubmit={handleSearch}
            className="relative w-full md:max-w-md flex items-center"
          >
            <div className="relative w-full">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search any city (e.g., Sylhet, Tokyo, Paris)..."
                className="w-full pl-11 pr-24 py-3 rounded-xl bg-slate-950/80 border border-slate-700/80 text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all shadow-inner"
              />
              <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <button
                type="submit"
                disabled={isSearching}
                className="absolute right-1.5 top-1/2 -translate-y-1/2 px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-blue-600 to-sky-500 hover:from-blue-500 hover:to-sky-400 text-white text-xs font-semibold shadow-md transition-all disabled:opacity-50"
              >
                {isSearching ? "Searching..." : "Search"}
              </button>
            </div>
          </form>

          {/* Controls: Unit Toggle & Refresh */}
          <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-end">
            <div className="flex items-center bg-slate-950/80 p-1 rounded-xl border border-slate-800 text-xs font-medium">
              <button
                type="button"
                onClick={() => setTempUnit("C")}
                className={`px-3 py-1.5 rounded-lg transition-all ${
                  tempUnit === "C"
                    ? "bg-sky-500 text-white shadow-sm"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                °C
              </button>
              <button
                type="button"
                onClick={() => setTempUnit("F")}
                className={`px-3 py-1.5 rounded-lg transition-all ${
                  tempUnit === "F"
                    ? "bg-sky-500 text-white shadow-sm"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                °F
              </button>
            </div>

            <button
              type="button"
              onClick={handleRefresh}
              disabled={loading}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 text-slate-200 text-xs font-medium transition-all shadow-sm active:scale-95 disabled:opacity-50"
              title="Refresh weather data"
            >
              <RefreshCw
                className={`w-3.5 h-3.5 ${loading ? "animate-spin text-sky-400" : ""}`}
              />
              <span className="hidden sm:inline">Refresh</span>
            </button>
          </div>
        </div>

        {/* Search Results Dropdown */}
        {searchResults.length > 0 && (
          <div className="mt-3 p-2 bg-slate-950 border border-slate-800 rounded-xl shadow-xl space-y-1 animate-in fade-in-50">
            <p className="text-xs font-medium text-slate-400 px-3 py-1">
              Select City:
            </p>
            {searchResults.map((item) => (
              <button
                key={item.id}
                onClick={() => handleSelectCityResult(item)}
                className="w-full text-left px-3 py-2 rounded-lg hover:bg-slate-800/80 text-sm text-slate-200 flex items-center justify-between transition-colors"
              >
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-sky-400" />
                  <span className="font-medium text-white">{item.name}</span>
                  <span className="text-xs text-slate-400">
                    {item.admin1 ? `${item.admin1}, ` : ""}
                    {item.country}
                  </span>
                </div>
                <span className="text-xs text-slate-500 font-mono">
                  {item.latitude.toFixed(2)}°, {item.longitude.toFixed(2)}°
                </span>
              </button>
            ))}
          </div>
        )}

        {/* Preset City Quick Chips */}
        <div className="mt-4 pt-4 border-t border-slate-800/70 flex items-center gap-2 flex-wrap">
          <span className="text-xs font-medium text-slate-400 flex items-center gap-1">
            <Sparkles className="w-3.5 h-3.5 text-sky-400" />
            Popular:
          </span>
          {PRESET_CITIES.map((c) => {
            const isSelected = selectedCity.name === c.name;
            return (
              <button
                key={c.name}
                onClick={() => {
                  setSelectedCity(c);
                  setSearchResults([]);
                  setError(null);
                }}
                className={`text-xs px-3 py-1.5 rounded-lg border transition-all duration-200 ${
                  isSelected
                    ? "bg-sky-500/20 text-sky-300 border-sky-500/50 font-semibold shadow-sm"
                    : "bg-slate-950/60 text-slate-400 border-slate-800 hover:text-white hover:bg-slate-800/50"
                }`}
              >
                {c.name}
              </button>
            );
          })}
        </div>
      </div>

      {/* Error Banner */}
      {error && (
        <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-sm flex items-center gap-3">
          <AlertCircle className="w-5 h-5 text-rose-400 shrink-0" />
          <span>{error}</span>
        </div>
      )}

      {/* Main Weather Display Card */}
      <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 shadow-2xl">
        {/* Dynamic ambient backdrop glow */}
        <div
          className={`absolute inset-0 bg-gradient-to-r ${condition.gradient} opacity-50 blur-3xl pointer-events-none`}
        />

        {loading ? (
          /* Loading Skeleton */
          <div className="p-8 sm:p-12 space-y-8 animate-pulse">
            <div className="flex justify-between items-start">
              <div className="space-y-3">
                <div className="h-8 w-48 bg-slate-800 rounded-lg"></div>
                <div className="h-4 w-32 bg-slate-800/60 rounded"></div>
              </div>
              <div className="h-16 w-16 bg-slate-800 rounded-2xl"></div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="h-24 bg-slate-800/40 rounded-xl"></div>
              ))}
            </div>
          </div>
        ) : current ? (
          <div className="relative z-10 p-6 sm:p-10 space-y-8">
            {/* Top Bar: Location & Condition Badge */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 text-sky-400">
                  <MapPin className="w-5 h-5 animate-bounce" />
                  <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                    {selectedCity.name}
                  </h2>
                  <span className="text-sm sm:text-base font-normal text-slate-400">
                    ({selectedCity.country})
                  </span>
                </div>
                <p className="text-xs text-slate-400 mt-1 font-mono">
                  Coordinates: {selectedCity.latitude}°N, {selectedCity.longitude}°E
                </p>
              </div>

              {/* Weather Condition Badge */}
              <div
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-2xl border ${condition.badge} shadow-lg self-start sm:self-auto`}
              >
                {renderWeatherIcon(condition.iconName, "w-6 h-6")}
                <span className="text-sm font-semibold tracking-wide">
                  {condition.label}
                </span>
              </div>
            </div>

            {/* Core Temperature & Hero Presentation */}
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 py-4 border-y border-slate-800/70">
              <div className="flex items-baseline gap-4">
                <div className="text-6xl sm:text-8xl font-black tracking-tighter bg-gradient-to-r from-white via-slate-100 to-sky-300 bg-clip-text text-transparent">
                  {displayTemp(current.temperature_2m)}°
                  <span className="text-3xl sm:text-4xl font-light text-slate-400">
                    {tempUnit}
                  </span>
                </div>
                <div className="space-y-1">
                  <div className="text-xs sm:text-sm text-slate-400">
                    Feels like:{" "}
                    <span className="text-white font-semibold">
                      {displayTemp(current.apparent_temperature)}°{tempUnit}
                    </span>
                  </div>
                  <div className="text-xs text-slate-500">
                    Day/Night:{" "}
                    <span className="text-slate-300 font-medium">
                      {current.is_day ? "☀️ Daytime" : "🌙 Nighttime"}
                    </span>
                  </div>
                </div>
              </div>

              {/* Visual Icon Illustration */}
              <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-xl flex items-center gap-4">
                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                  {renderWeatherIcon(condition.iconName, "w-12 h-12")}
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-slate-400 font-medium">
                    Current Sky
                  </p>
                  <p className="text-lg font-bold text-white">
                    {condition.label}
                  </p>
                  <p className="text-xs text-sky-400 font-mono">
                    WMO Code: {current.weather_code}
                  </p>
                </div>
              </div>
            </div>

            {/* Weather Metrics Grid - Explicitly addressing Requirements:
                1. Temperature
                2. Time
                3. Interval
                4. Humidity
                5. Wind Speed
            */}
            <div>
              <h3 className="text-xs uppercase tracking-wider font-semibold text-slate-400 mb-4 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-sky-400" />
                Live Atmospheric Telemetry
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                {/* 1. Temperature Card */}
                <div className="p-4 rounded-2xl bg-slate-900/70 border border-slate-800/80 hover:border-sky-500/40 transition-all hover:-translate-y-1 duration-200">
                  <div className="flex items-center justify-between text-amber-400 mb-2">
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                      Temperature
                    </span>
                    <Thermometer className="w-5 h-5 text-amber-400" />
                  </div>
                  <div className="text-2xl font-bold text-white">
                    {displayTemp(current.temperature_2m)}°{tempUnit}
                  </div>
                  <p className="text-xs text-slate-400 mt-1">
                    Sensor: {currentUnits?.temperature_2m || "°C"} (2m height)
                  </p>
                </div>

                {/* 2. Current Time Card */}
                <div className="p-4 rounded-2xl bg-slate-900/70 border border-slate-800/80 hover:border-sky-500/40 transition-all hover:-translate-y-1 duration-200">
                  <div className="flex items-center justify-between text-sky-400 mb-2">
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                      Observation Time
                    </span>
                    <Clock className="w-5 h-5 text-sky-400" />
                  </div>
                  <div className="text-xl font-bold text-white truncate">
                    {timeInfo?.timeFormatted || current.time}
                  </div>
                  <p className="text-xs text-slate-400 mt-1 truncate">
                    {timeInfo?.dateFormatted || "Recorded locally"}
                  </p>
                </div>

                {/* 3. Interval Card */}
                <div className="p-4 rounded-2xl bg-slate-900/70 border border-slate-800/80 hover:border-sky-500/40 transition-all hover:-translate-y-1 duration-200">
                  <div className="flex items-center justify-between text-indigo-400 mb-2">
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                      Update Interval
                    </span>
                    <Timer className="w-5 h-5 text-indigo-400" />
                  </div>
                  <div className="text-xl font-bold text-white">
                    {formatInterval(current.interval)}
                  </div>
                  <p className="text-xs text-slate-400 mt-1">
                    API cadence: {current.interval}s cycle
                  </p>
                </div>

                {/* 4. Humidity Card */}
                <div className="p-4 rounded-2xl bg-slate-900/70 border border-slate-800/80 hover:border-sky-500/40 transition-all hover:-translate-y-1 duration-200">
                  <div className="flex items-center justify-between text-cyan-400 mb-2">
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                      Humidity
                    </span>
                    <Droplets className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div className="text-2xl font-bold text-white">
                    {current.relative_humidity_2m}
                    <span className="text-base font-normal text-slate-400 ml-1">
                      {currentUnits?.relative_humidity_2m || "%"}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 mt-1">
                    Relative humidity (2m)
                  </p>
                </div>

                {/* 5. Wind Speed Card */}
                <div className="p-4 rounded-2xl bg-slate-900/70 border border-slate-800/80 hover:border-sky-500/40 transition-all hover:-translate-y-1 duration-200">
                  <div className="flex items-center justify-between text-teal-400 mb-2">
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                      Wind Speed
                    </span>
                    <Wind className="w-5 h-5 text-teal-400" />
                  </div>
                  <div className="text-2xl font-bold text-white">
                    {current.wind_speed_10m}
                    <span className="text-base font-normal text-slate-400 ml-1">
                      {currentUnits?.wind_speed_10m || "km/h"}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 mt-1">
                    Speed at 10m altitude
                  </p>
                </div>
              </div>
            </div>

            {/* 7-Day Forecast Section */}
            {weatherData?.daily && (
              <div className="pt-4 border-t border-slate-800/70">
                <h3 className="text-xs uppercase tracking-wider font-semibold text-slate-400 mb-4 flex items-center justify-between">
                  <span>7-Day Meteorological Forecast</span>
                  <span className="text-[11px] text-slate-500 font-mono">
                    High / Low (°{tempUnit})
                  </span>
                </h3>

                <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-3">
                  {weatherData.daily.time.map((dayDate, idx) => {
                    const code = weatherData.daily.weather_code[idx];
                    const maxT = weatherData.daily.temperature_2m_max[idx];
                    const minT = weatherData.daily.temperature_2m_min[idx];
                    const dayCond = getWeatherCondition(code, 1);
                    const isToday = idx === 0;

                    return (
                      <div
                        key={dayDate}
                        className={`p-3 rounded-2xl border text-center transition-all ${
                          isToday
                            ? "bg-sky-500/10 border-sky-500/40 shadow-md"
                            : "bg-slate-900/40 border-slate-800 hover:bg-slate-800/40"
                        }`}
                      >
                        <p className="text-xs font-semibold text-slate-300">
                          {isToday ? "Today" : formatDayName(dayDate)}
                        </p>
                        <p className="text-[10px] text-slate-500 mb-2">
                          {dayDate.slice(5)}
                        </p>
                        <div className="flex justify-center my-1.5">
                          {renderWeatherIcon(dayCond.iconName, "w-6 h-6")}
                        </div>
                        <p className="text-[11px] font-medium text-slate-300 truncate">
                          {dayCond.label}
                        </p>
                        <div className="mt-2 text-xs font-semibold flex items-center justify-center gap-1.5">
                          <span className="text-white">
                            {displayTemp(maxT)}°
                          </span>
                          <span className="text-slate-500">/</span>
                          <span className="text-slate-400 font-normal">
                            {displayTemp(minT)}°
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        ) : null}
      </div>
    </div>
  );
}

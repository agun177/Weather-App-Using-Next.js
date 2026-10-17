"use client";

import { useState } from "react";
import {
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  Sparkles,
  MessageSquare,
  HelpCircle,
  AlertCircle,
  PhoneCall,
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Feedback",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // 'idle' | 'submitting' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus("error");
      setErrorMessage("Please fill out all required fields before sending.");
      return;
    }

    if (!formData.email.includes("@") || !formData.email.includes(".")) {
      setStatus("error");
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    if (formData.message.trim().length < 10) {
      setStatus("error");
      setErrorMessage("Message should be at least 10 characters long.");
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    // Simulate async submission
    setTimeout(() => {
      setStatus("success");
      setFormData({
        name: "",
        email: "",
        subject: "Feedback",
        message: "",
      });
    }, 900);
  };

  const handleReset = () => {
    setStatus("idle");
    setErrorMessage("");
  };

  const faqs = [
    {
      q: "Where does the weather data come from?",
      a: "All weather data is fetched in real-time from Open-Meteo, a free open-source meteorological API relying on national weather services like DWD and NOAA.",
    },
    {
      q: "How frequently is the data updated?",
      a: "Open-Meteo provides updates at an interval of approximately 900 seconds (15 minutes), as indicated in the telemetry display.",
    },
    {
      q: "Can I search for small towns or villages?",
      a: "Yes! Open-Meteo's geocoding engine indexes hundreds of thousands of cities and regions globally.",
    },
    {
      q: "Is there any cost or API key needed?",
      a: "No! This application utilizes the completely free and open tier with no registration or payment required.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto w-full space-y-16">
        {/* Header Hero */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-sky-400 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Get in Touch</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            We’d Love to Hear <br />
            <span className="bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-400 bg-clip-text text-transparent">
              From You
            </span>
          </h1>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Have questions about the weather app, suggestions for new features, or feedback for the Ostad Module 16 assignment? Fill out the contact form below.
          </p>
        </div>

        {/* Contact Form & Contact Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-3xl bg-slate-900/60 border border-slate-800 backdrop-blur-xl space-y-6">
              <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-sky-400" />
                Contact Information
              </h2>
              <p className="text-sm text-slate-400 leading-relaxed">
                Reach out to us through any of the following channels or directly send a message using the form.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-950/70 border border-slate-800/80">
                  <div className="p-2.5 rounded-xl bg-blue-500/10 border border-blue-500/20 text-sky-400 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs uppercase tracking-wider font-semibold text-slate-400">
                      Email Address
                    </h3>
                    <p className="text-sm font-medium text-white mt-0.5">
                      contact@skycast-weather.local
                    </p>
                    <p className="text-xs text-slate-500">24/7 automated inbox</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-950/70 border border-slate-800/80">
                  <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs uppercase tracking-wider font-semibold text-slate-400">
                      Location
                    </h3>
                    <p className="text-sm font-medium text-white mt-0.5">
                      Dhaka, Bangladesh
                    </p>
                    <p className="text-xs text-slate-500">GMT+6 Timezone</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-950/70 border border-slate-800/80">
                  <div className="p-2.5 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs uppercase tracking-wider font-semibold text-slate-400">
                      Average Response Time
                    </h3>
                    <p className="text-sm font-medium text-white mt-0.5">
                      Under 24 Hours
                    </p>
                    <p className="text-xs text-slate-500">Monday - Friday support</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Assignment Quick Notice */}
            <div className="p-5 rounded-2xl bg-slate-900/40 border border-slate-800 text-xs text-slate-400 space-y-1">
              <span className="font-semibold text-sky-400">Note:</span>
              <p>
                This form demonstrates client-side form validation, responsive layout design, and interactive submission feedback states.
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-10 rounded-3xl bg-slate-900/70 border border-slate-800 backdrop-blur-xl shadow-2xl relative">
              <h2 className="text-2xl font-bold text-white mb-2">
                Send Us a Message
              </h2>
              <p className="text-sm text-slate-400 mb-8">
                Please fill in the form below and we will respond as soon as possible.
              </p>

              {/* Success Banner */}
              {status === "success" ? (
                <div className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-4 animate-in fade-in-50 duration-300">
                  <div className="w-16 h-16 mx-auto rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    Thank You! Message Sent Successfully.
                  </h3>
                  <p className="text-sm text-slate-300 max-w-md mx-auto">
                    We have received your message. Our team will review your inquiry and get back to you shortly.
                  </p>
                  <button
                    type="button"
                    onClick={handleReset}
                    className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold border border-slate-700 transition-all"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Error Notification */}
                  {status === "error" && errorMessage && (
                    <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-sm flex items-center gap-3">
                      <AlertCircle className="w-5 h-5 text-rose-400 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Full Name */}
                    <div className="space-y-2">
                      <label
                        htmlFor="name"
                        className="block text-xs font-semibold uppercase tracking-wider text-slate-300"
                      >
                        Full Name <span className="text-rose-400">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all shadow-inner"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="block text-xs font-semibold uppercase tracking-wider text-slate-300"
                      >
                        Email Address <span className="text-rose-400">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all shadow-inner"
                      />
                    </div>
                  </div>

                  {/* Subject Dropdown */}
                  <div className="space-y-2">
                    <label
                      htmlFor="subject"
                      className="block text-xs font-semibold uppercase tracking-wider text-slate-300"
                    >
                      Subject / Topic
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-700/80 text-white text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all"
                    >
                      <option value="Feedback">App Feedback & Suggestions</option>
                      <option value="Bug Report">Bug / Issue Report</option>
                      <option value="API Inquiry">Open-Meteo API Question</option>
                      <option value="Assignment Review">Ostad Assignment Review</option>
                      <option value="Other">Other Inquiry</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="block text-xs font-semibold uppercase tracking-wider text-slate-300"
                    >
                      Message <span className="text-rose-400">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Write your message or inquiry here..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all resize-none shadow-inner"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-blue-600 via-sky-500 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold text-sm shadow-lg shadow-sky-500/25 transition-all flex items-center justify-center gap-2 disabled:opacity-50 active:scale-[0.99]"
                  >
                    {status === "submitting" ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Quick FAQ Accordion / Cards */}
        <div className="p-8 sm:p-10 rounded-3xl bg-slate-900/50 border border-slate-800 space-y-8">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-sky-500/10 border border-sky-500/20 text-sky-400">
              <HelpCircle className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white">
                Frequently Asked Questions
              </h2>
              <p className="text-xs text-slate-400">Quick answers to common inquiries</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-slate-950/60 border border-slate-800/80 space-y-2"
              >
                <h3 className="text-sm font-bold text-white flex items-start gap-2">
                  <span className="text-sky-400 font-mono">Q:</span>
                  <span>{faq.q}</span>
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed pl-5">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

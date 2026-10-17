# SkyCast - Live Weather Intelligence App

A modern, high-precision weather web application built using **Next.js (App Router)** and **Tailwind CSS**, powered by the **Open-Meteo Free Weather API**. 

Developed for the **Ostad Web Development Course (Module 16 Assignment)**.

---

## 🌟 Key Features & Requirements

### 1. 4 Core Pages
- **Home (`/`)**: Dynamic Hero banner, interactive Weather Display card, About preview section, and universal Footer.
- **About (`/about`)**: Complete breakdown of the application, atmospheric telemetry explanations, and technical architecture.
- **Services (`/services`)**: Showcase of weather-related capabilities (real-time telemetry, 7-day forecasting, global geocoding, unit toggling, multi-device responsiveness).
- **Contact (`/contact`)**: Fully responsive contact form with input validation, animated submission feedback, and FAQ section.

### 2. Meteorological Telemetry Display
- 🌡️ **Temperature**: Ambient 2m temperature with instant °C / °F unit toggle and "feels like" metrics.
- 🕒 **Observation Time**: Formatted local observation timestamp with date and timezone.
- ⏱️ **Update Interval**: Cadence tracking displaying station interval rates (e.g. 15 min / 900 seconds).
- 💧 **Relative Humidity**: Real-time atmospheric moisture percentage.
- 💨 **Wind Speed**: 10-meter altitude wind velocity in km/h.
- 📅 **7-Day Weather Forecast**: Daily maximum and minimum temperatures with WMO weather condition icons.
- 🔍 **City Search & Geocoding**: Search for any city worldwide or select from preset popular hubs (Dhaka, Chittagong, Sylhet, London, New York, Tokyo, Dubai).

### 3. Architecture & Design
- **Tailwind CSS v4**: Ultra-modern dark glassmorphism interface, custom animations, and mobile-first responsive layout.
- **Reusable Components**: Global `Header` (with mobile drawer & active route styling) and `Footer` configured across all routes.
- **Zero API Key Requirement**: Direct integration with [Open-Meteo](https://open-meteo.com/) free tier models.
- **Production Optimized**: Static prerendering, zero ESLint errors, and sub-second page loads.

---

## 🚀 Getting Started

### Prerequisites
- Node.js `v18.17+` or `v20+` (tested on Node `v24.x`)
- npm, yarn, or pnpm

### 1. Clone & Install Dependencies
```bash
git clone <your-repository-url>
cd Assignment-on-Module-16
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your web browser.

---

## 🏭 Production Build & Deployment

### 1. Build for Production
Compiles the application and generates optimized static pages:
```bash
npm run build
```

### 2. Start Production Server Locally
```bash
npm run start
```
By default, the server runs on [http://localhost:3000](http://localhost:3000).

### 3. Deploy to Vercel (Recommended)
1. Push your repository to GitHub.
2. Go to [Vercel](https://vercel.com/) and import your repository.
3. Next.js will automatically be detected with preset build command `npm run build`.
4. Click **Deploy**. Your app will be live globally on a high-speed Edge CDN!

### 4. Deploy with Docker (Optional)
```dockerfile
FROM node:20-alpine AS runner
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| **Next.js 16 (App Router)** | Framework, routing, layouts, and server/client components |
| **React 19** | Modern UI rendering & reactive state hooks |
| **Tailwind CSS v4** | Modern utility-first responsive styling and theme tokens |
| **Open-Meteo API** | Free weather forecast models & geocoding city lookup |
| **Lucide React** | Weather condition iconography and UI icons |
| **ESLint 9** | Code quality & best practice enforcement |

---

## 📝 License
Created as part of the Ostad Web Development program. Weather data provided under Attribution 4.0 International by [Open-Meteo](https://open-meteo.com/).

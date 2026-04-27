# Rest Countries API Explorer

A responsive, interactive web application that displays country information from the [REST Countries API](https://restcountries.com/). Built with **React**, **React Router**, and bundled with **Parcel**.

## Features

- **Home Page** — Browse all countries with an instant search and region filter.
- **Country Details** — Click any country card to view rich details including native name, population, region, subregion, capital, top-level domain, currencies, languages, and bordering countries.
- **Search** — Real-time search across country names.
- **Region Filter** — Filter countries by Africa, America, Asia, Europe, or Oceania.
- **Dark Mode** — Toggle between light and dark themes; preference is saved to `localStorage`.
- **Responsive Design** — Fully responsive layout optimized for all screen sizes.
- **SPA Navigation** — Client-side routing using `react-router-dom`.

## Tech Stack

- **React** `^19.1.0`
- **React DOM** `^19.1.0`
- **React Router DOM** `^6.30.1`
- **Parcel** `^2.15.4` — Bundler & dev server

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) installed on your machine

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/rest-country-api.git
   cd rest-country-api
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser** and navigate to the local server URL shown in the terminal (usually `http://localhost:1234`).

### Build for Production

To create an optimized production build:

```bash
npx parcel build index.html --public-url ./
```

The output will be placed in the `dist/` folder.

## API Reference

This project uses the free [REST Countries API v3.1](https://restcountries.com/).

| Endpoint | Description |
|----------|-------------|
| `https://restcountries.com/v3.1/name/{name}?fullText=true` | Fetch detailed data for a specific country |
| `https://restcountries.com/v3.1/region/{region}` | Fetch all countries in a given region |
| `https://restcountries.com/v3.1/alpha?codes={codes}` | Fetch multiple countries by their 3-letter country codes (used for borders) |

## Project Structure

```
rest-country-api/
├── assets/
│   ├── components/
│   │   ├── Header.jsx          — App header with title & dark mode toggle
│   │   ├── Footer.jsx          — Page footer
│   │   ├── Layout.jsx          — Layout wrapper (Outlet-based)
│   │   ├── Home.jsx            — Home page with search & filter
│   │   ├── SearchBar.jsx       — Search input component
│   │   ├── Filter.jsx          — Region dropdown filter
│   │   ├── RenderCountry.jsx   — Country cards grid
│   │   ├── RenderCountryLoader.jsx — Skeleton loader
│   │   ├── CountryDetail.jsx   — Detailed country view
│   │   └── *.css               — Component styles
│   ├── data/
│   │   └── allCountriesData.js — Static fallback country data
│   └── images/
│       └── searchIcon.svg      — Search icon asset
├── App.jsx                     — Root component with theme state
├── index.jsx                   — Entry point & router configuration
├── index.html                  — HTML template
├── App.css                     — Global styles
├── package.json
└── .gitignore
```

## Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start the Parcel development server |
| `npm test` | Placeholder for future tests |

## Customization

- **Theme Colors** — Edit `App.css` and component CSS files to adjust the color palette.
- **Default Theme** — The app checks `localStorage` for `isdarkMode` on load. To change the default, update the initial state in `App.jsx`.

## License

This project is open source and available under the [ISC License](LICENSE).

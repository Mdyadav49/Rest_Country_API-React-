
import { Link } from "react-router-dom"
// import RenderCountryLoader from "./rendercountryloader"

const RenderCountry = ({ allCountriesData }) => {
  
  // if (allCountriesData === null) {
  //   return <RenderCountryLoader/>
  // }

  return (
    <div className="countries-container">
      {allCountriesData.map((country) => (
        <Link
          className="country-card"
          key={country.cca3 ?? country.name.common ?? country.name}
          to={`/${country.name?.common ?? country.name}`}
        >
          <img
            src={country.flags.svg}
            alt={country.name?.common ?? country.name}
          />
          <div className="country-data">
            <h3>{country.name?.common ?? country.name}</h3>
            <p>
              <b>Population:</b>{" "}
              {country.population?.toLocaleString("en-IN") ?? "N/A"}
            </p>
            <p>
              <b>Region:</b> {country.region ?? "N/A"}
            </p>
            <p>
              <b>Capital:</b> {country.capital?.[0] ?? "N/A"}
            </p>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default RenderCountry
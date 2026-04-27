
import './rendercountryloader.css'

export default function RenderCountryLoader() {
  return (
    <div className="countries-container">
      {Array.from({ length: 10 }).map((_,i) => {
        return (
          <div key={`loader-${i}`} className="country-card shimmer-card">
            <div className="flag-container"></div>
            <div className="card-text">
              <h3 className="card-title"></h3>
              <p></p>
              <p></p>
              <p></p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
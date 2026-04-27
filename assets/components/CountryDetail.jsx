import { Link, useNavigate, useOutletContext, useParams } from "react-router-dom"
import './countrydetail.css'
import { useEffect, useState } from "react"

const Countrydetail = () =>{

    const params = useParams()
    const country = params.country    
    const navigate = useNavigate()
    const [countryData , setCountryData] = useState(null)
    const [notfound,setNotfound] = useState(false)
    const [isdark] = useOutletContext()
    
    useEffect(()=>{
      fetch(`https://restcountries.com/v3.1/name/${country}?fullText=true`)
      .then((res)=>res.json())
      .then(([data])=>{
        console.log(data)
        const countryobj ={
          src:data.flags.svg,
          name:data.name.common,
          nativename:Object.values(data.name.nativeName || {}).at(0)?.common ?? `N/A`,
          population : data.population ,
          region:data.region,
          subregion:data.subregion ?? `N/A`,  
          capital:data.capital?.[0] ?? `N/A`, 
          currencies:Object.values(data.currencies || {}).at(0)?.name  ?? `N/A`,
          languages:Object.values(data.languages || {}).length > 0 ? Object.values(data.languages).join(". ") : `N/A`, 
          tld :(data.tld || []).join(", "),
          borders:[],
        } 

        if(Array.isArray(data.borders) && data.borders.length > 0){
          return fetch(`https://restcountries.com/v3.1/alpha?codes=${data.borders.join(",")}`)
          .then((res)=>res.json())
          .then((data)=> {
                countryobj.borders = data.map((country)=>country.name.common);
                return countryobj
          }
        )}
        return countryobj
    })
      .then((finalcountryobj)=>setCountryData(finalcountryobj))
      .catch(()=>setNotfound(true))   
    },[country])

    if (notfound) {
      return <div>Country Not Found</div>
    }
    if(countryData === null){
      return <h1>Loading...</h1>
    }

    return(
      <main className={isdark ? 'dark' : ''}>
      <div className="country-details-container">
        <span className="back-button" onClick={()=>navigate(-1)}>
          <i className="fa-solid fa-arrow-left"></i>&nbsp; Back
        </span>
        <div className="country-details">
          <img src={countryData.src} alt={countryData.name} className="country-image" />
          <div className="details-text-container">
            <h1 className="country-name"></h1>
            <div className="details-text">
              <p><b>Native Name: </b><span className="native-name">{countryData.nativename}</span></p>
              <p><b>Population: </b><span className="population">{countryData.population.toLocaleString('en-IN')}</span></p>
              <p><b>Region: </b><span className="region">{countryData.region}</span></p>
              <p><b>Sub Region: </b><span className="sub-region">{countryData.subregion}</span></p>
              <p><b>Capital: </b><span className="capital">{countryData.capital}</span></p>
              <p>
                <b>Top Level Domain: </b><span className="top-level-domain">{countryData.tld}</span>
              </p>
              <p><b>Currencies: </b><span className="currencies">{countryData.currencies}</span></p>
              <p><b>Languages: </b><span className="languages">{countryData.languages}</span></p>
            </div>
            {(countryData.borders.length > 0) ? 
            <div className="border-countries"><b>border country:</b>
              {countryData.borders.map((border)=><Link key={border} to={`/${border}`}>{border}</Link>)}
            </div>  
            : [`N/A`]            
            }

          </div>
        </div>
      </div>
    </main>
    )
}

export default Countrydetail

import SearchBar from "./SearchBar"
import RenderCountry from "./RenderCountry"
import allCountriesData from "../data/allCountriesData"
import Filter from "./Filter"
import { useEffect, useState } from "react"
import { useOutletContext } from "react-router-dom"

const Home = ()=>{
    const [region , setRegion] = useState("")
    const [CountriesData,setCountriesData] = useState(allCountriesData)
    const [input, setInput] = useState("")
    const [isdark] = useOutletContext()

    useEffect(()=>{
        if(region === "") return ;
        fetch(`https://restcountries.com/v3.1/region/${region}`)
        .then((res)=>res.json())
        .then((data) =>setCountriesData(data))
    },[region])

    useEffect(()=>{
        if(input === "") return;
        const result = allCountriesData.filter((Country)=>Country.name.toLowerCase().slice(0,input.length).includes(input.toLowerCase()))
        setCountriesData(result)
    },[input])



    return (
        <main className={isdark ? 'dark' : ''}>
            <div className="search_filter_Parent">
                <SearchBar setInput={setInput} input={input} />
                <Filter region={region} setRegion={setRegion}/>
            </div>
            <RenderCountry allCountriesData={CountriesData}/>
        </main>
    )
}
export default Home
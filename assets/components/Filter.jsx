
const Filter = ({region,setRegion})=>{
    return (
        <div className="filter_parent">
            <select id="region-search" value={region} onChange={e=>setRegion(e.target.value)}>
                 <option value="" disabled hidden> Filter by region</option>
                <option value="Africa">Africa</option>
                <option value="America">America</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
           </select>
        </div>
    )
}
export default Filter
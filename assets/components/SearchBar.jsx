import searchIcon from 'url:../images/searchIcon.svg';

const SearchBar = ({input,setInput})=>{
     return (
        <div className="search_parent">
            <img src={searchIcon} alt="searchIcon" />
            <input type="text" placeholder="Search for a country..." value={input} className="searchCountry"  onChange={(e)=>setInput(e.target.value.toLocaleString())}/>
        </div>
    )
}
export default SearchBar

   

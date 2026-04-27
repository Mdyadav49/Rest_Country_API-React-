import { useNavigate } from "react-router-dom"

const Header = ({theme}) =>{
    const navigate = useNavigate()
    const [isdark,setIsdark]= theme
    return (
    <header className={isdark ? 'dark' : ''}>   
        <div className="header-content">
            <a className="title" onClick={()=>{navigate('/')}}>where in the world?</a>
            <div className="dark_light_parent" onClick={()=>{
                setIsdark(!isdark)
                localStorage.setItem('isdarkMode' , !isdark)
            }}>
                <i className={`fa-solid fa-${isdark ? 'sun' : 'moon'}`}></i>
                <p><span>{isdark ? 'Light' : 'Dark'}</span>Mode</p>
            </div>
        </div>
    </header>
    )
}
export default Header
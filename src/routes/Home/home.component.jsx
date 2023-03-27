import { Outlet } from "react-router-dom";
import Body from "../../components/Body/body.component";
import './home.style.css'

const Home=()=>{
    return(
        <div className="main">
        <Outlet/>
        <div className="main-container">
        <h1 className="main-header">Hello! I'm Edward Herrera  
        <div className="roller">
          <span className="rolltext">
            JUNIOR WEB DEVELOPER<br/>
            AMATEUR BOXER<br/>
            PHOTOGRAPHER<br/>
            <span className="role-text">NICE TO MEET YOU!</span><br/>
          </span>
        </div>
      </h1>
      </div>
      <div className="body">
      <Body />
      </div>
        </div>
    )
}

export default Home
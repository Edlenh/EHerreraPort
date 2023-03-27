// import Me from '../assets/images/Me4.jpg'
import expressLogo from '../assets/svg/expresslogo.svg'
import nodeLogo from '../assets/svg/nodelogo.svg'
import jsLogo from '../assets/svg/jslogo.svg'
import htmlLogo from '../assets/svg/html5.png'
import cssLogo from '../assets/svg/csslogo.svg'
import reactLogo from '../assets/svg/reactlogo.svg'
import GitHubIcon from '@mui/icons-material/GitHub';
import npmLogo from '../assets/svg/npmlogo.svg'
import bootstrapLogo from '../assets/svg/bootstraplogo.svg'
import postmanLogo from '../assets/svg/postmanlogo.png'
import mongoLogo from '../assets/svg/mongologo.svg'
import mysqlLogo from '../assets/svg/mysqlogo.svg'
import postgresLogo from '../assets/svg/postgreslogo.svg'
import graphqlLogo from '../assets/svg/graphqllogo.svg'
import firebaseLogo from '../assets/svg/firebaselogo.svg'
import jwtLogo from '../assets/svg/jwtlogo.svg'
import figmaLogo from '../assets/svg/figmalogo.svg'
import herokuLogo from '../assets/svg/herokulogo.svg'

import './body.style.css'
const Body =()=>{
    return(
        <div className="intro-main">
        <div className='even-columns'>
        <div className='main-container'>
        <h1>Full Stack Web Developer</h1>
        <div className='icon-row'>
            <img src={expressLogo} alt="express logo"  />
            <img src={nodeLogo}s alt="node logo"/>
            <img src={jsLogo} alt="javascript logo" />
            <img src={htmlLogo} alt="html logo" />
            <img src={cssLogo} alt="css logo"  />
            <img src={reactLogo} alt="css logo" />
            <GitHubIcon style={{color: "#E7D8F7" ,height:"40px", width:"40px"}}/>
            <img src={npmLogo} alt="npm logo" />
            <img src={bootstrapLogo} alt="bootstrap logo" />
            <img src={postmanLogo} alt="postmanlogo" />
            <img src={postgresLogo} alt="bootstrap logo" />
            <img src={mongoLogo} alt="mongoDb logo" />
            <img src={mysqlLogo} alt="mySql logo" />
            <img src={graphqlLogo} alt="graphQL logo" />
            <img src={firebaseLogo} alt="firebase logo" />
            <img src={jwtLogo} alt="json web token logo" />
            <img src={figmaLogo} alt="figma logo" />
            <img src={herokuLogo} alt="heroku logo" />


        </div>
        </div>
        </div>
        </div>
        )
}

export default Body
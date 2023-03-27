import {Routes, Route} from "react-router-dom"
import Nav from './components/Nav/Nav.component'
import Home from './routes/Home/home.component'
import Projects from './routes/Projects/projects.component'
import Contact from './routes/Contact/contact.component'
import Footer from './components/Footer/Footer.component'
import Hacker from './components/assets/svg/hackerman.svg'
import './index.css';

const App=()=> {
  return ((
    <div className="App" style={{ backgroundImage: `url(${Hacker})`, backgroundRepeat: 'no-repeat' }}>
    <Routes>
    <Route path='/' element={<Nav />}>
    <Route index element ={<Home />}/>
    <Route path='projects' element={<Projects />}/>
    <Route path='contact'element ={<Contact />}/>
    </Route>
    </Routes>
    <Footer />
    </div>
  ));
}

export default App;

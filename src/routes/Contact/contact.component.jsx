import { Outlet } from "react-router-dom";

const Contact=()=>{
    return(
        <div>
        <Outlet/>
        <h1>Here is my  
        <a href="https://docs.google.com/document/d/e/2PACX-1vQK2oPFEIBSEovpYb4i5lpxfws3UZ-b9FsR4WBPKV4kbYbjnjoYQMAFEurm_bMQs3ZAWPTpoIZLYzeB/pub" target="_blank" rel="noopener noreferrer"> resume</a>
             </h1>
        
        </div>
    )
}

export default Contact
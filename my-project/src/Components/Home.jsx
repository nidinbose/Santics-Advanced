import React ,{useEffect} from "react";

import Curosals from "./Home/Curosals";
import Category from "./Home/Category";
import GameChanger from "./Home/GameChanger";
import Overview from "./Home/Overview";
import Overview2 from "./Home/Overview2";
import Overview3 from "./Home/Overview3";
import Sliding from "./Home/Sliding";

import Cards from "./Home/Cards";

import Bottom from "./Navbar/bottom";
import Blog from "./Home/Blog";
import Bento from "./Home/Bento";
import VideoIntro from "./Home/VideoIntro";
import Features from "./Home/Features";
import Testimonials from "./Home/Testimonials";




const Home=()=>{

 
    return (
        <div className="overflow-hidden">
          <Bottom/>
         
             <Curosals/>
             <Category/>
             <Bento/>
             <Features/>
             <Overview/>
             {/* <GameChanger/> */}
             <Overview2/> 
             <Blog/>
             <VideoIntro/>
             <Overview3/>
             <Sliding/>
             <Cards/>
          
         
           
            
         

            
        </div>
    )
}

export default Home;
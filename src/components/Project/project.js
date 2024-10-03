import React from "react";
import './projectstyle.css';
import {Swiper,useSwiper,SwiperSlide} from "swiper/react";
import 'swiper/css'
import sliderSettings from "../../utils/common";
import data1 from "../Data/data1";
import {FaLink} from "react-icons/fa"


const Project=()=>{
  console.log(data1[0].img_name);
return (
    <div id="projects">
      
        <h1 className="h">Projects</h1>
  
    <section id="project">
 
         <div className="pro">
           <div className="pro-con">
           <Swiper {...sliderSettings} className="swiper" >
          <SlideNextButton />
          {/* slider */}
         { data1.map((da)=>{
             
             return (<SwiperSlide key={da.id} >
              <div className="pro-card">
             <img className="imgt" src={da.img_name}/>
             <div className="linkdes">
              <span className="protit">
                      <span className="s1">{da.title}</span>
                      <span className="s2">{da.tech}</span>
              </span>
              <div className="links"> <a href={da.git_link}><img className="share-link" src="github.png"/></a>
              { da.dis_link && <a href={da.app_link}><FaLink size={20}/></a>
         }
         </div>
             </div>
             </div>
                 </SwiperSlide>  )   
          })
        } 
        </Swiper>
          
        </div>
        </div>
       
      


    </section>
    </div>
);
}
export default Project;

const SlideNextButton = () => {
  const swiper = useSwiper();
  return (
    <div className="flexCenter r-buttons">
      <button onClick={() => swiper.slidePrev()} className="r-prevButton">
        &lt;
      </button>
      <button onClick={() => swiper.slideNext()} className="r-nextButton">
        &gt;
      </button>
    </div>
  );
};

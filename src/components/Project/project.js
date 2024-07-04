import React from "react";
import './projectstyle.css';
import {Swiper,useSwiper,SwiperSlide} from "swiper/react";
import 'swiper/css'
import sliderSettings from "../../utils/common";
import data1 from "../Data/data1";



const Project=()=>{
  console.log(data1[0].img_name);
return (
    <div className="wrapper-con">
      
        <h1 className="h">Projects</h1>
  
    <section id="project">
 
         <div className="pro">
          <h1>Frontend</h1>
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
              { da.dis_link && <a href={da.app_link}>o</a>
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
       
        <div className="pro">     
        <h1>MERN Stack</h1>
          <div className="pro-con">
      
        <Swiper {...sliderSettings}>
          <SlideNextButton />
          {/* slider */}
            <SwiperSlide >
            <div className="pro-card">
             <img className="imgt" src="resapp.png"/>
             <div className="linkdes">
              <span className="protit">
                      <span className="s1">RealEstate Website</span>
                      <span className="s2">Nodejs Express Reactjs MongoDB</span>
              </span>
              <div className="links"> <a href=""><img className="share-link" src="github.png"/></a>
            <a href="">o</a>
         </div>
             </div>
             </div>
               </SwiperSlide>

               <SwiperSlide >
            <div className="pro-card">
             <img className="imgt" src="drapp.png"/>
             <div className="linkdes">
              <span className="protit">
                      <span className="s1">Dynamic TO-DO List with PDF generator</span>
                      <span className="s2">Nodejs Express Reactjs MongoDB</span>
              </span>
              <div className="links"> <a href=""><img className="share-link" src="github.png"/></a>
            <a href="">o</a>
         </div>
             </div>
             </div>
               </SwiperSlide>
         
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

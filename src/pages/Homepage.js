import React from "react";
import NavBar from '../components/NavBar';
import Container from 'react-bootstrap/Container';
import bgimg from '../assets/images/bg2.avif'
import image1 from '../assets/images/img1.avif'
import image2 from '../assets/images/img2.jpg'
import Footer from "../components/Footer";
  function HomePage({items}){

    return (
        <>
           <div className="Home">
           <img class="Video_Background" src={bgimg} alt="" />
    <Container>

    <NavBar/>

    <div className=" my-5">
    <h1 class="TitleHome text-center">Good day, inhabitants of our blue planet!</h1>
    <div className="swipe-down text-center mt-5">
      Swipe down
    </div>

      <div className="section2">
        <div className="f-orbito text-center">Discovery</div>
        <div className="d-flex mt-5 pt-5 gap-5">
          <div className="img-height" ><img src={image1} alt="" /></div>
          <div>
            <div className=""><h3>Elliptical Galaxy (Purple)</h3></div>
            <hr />
            <p>This galaxy is a SBa type that was discovered on January 3rd, 1761. The galaxy is nicknamed “Purple arms” due to the star formation regions near the edges of the galaxy. The number of clusters in the galaxy is 5762, 252 globular clusters, 5510 open clusters,with the number of nebulae in the galaxy being 10158.This has made the galaxy have a ring of purple and red at the edge with stellar dust lining the outer limits and inner limits of the area in some regions. There are two main arms of this galaxy extending from the “Purple ring”, the northern and southern arm, yes very creative.</p>
                <div><a href="https://science.nasa.gov/resource/elliptical-galaxy-purple/" target="blank">Learn more</a></div>
                </div>

        </div>
      </div>
      <div className="my-5 py-5">
      <hr />
      </div>
     
      <div className="mt-5 ">
        <div className="d-flex mt-5 gap-5">

          <div>
            <div className=""><h3>NASA’s Webb Depicts Staggering Structure </h3></div>
            <hr />
          <p>These Webb images are part of a large, long-standing project, the Physics at High Angular resolution in Nearby GalaxieS (PHANGS) program, which is supported by more than 150 astronomers worldwide. Before Webb took these images, PHANGS was already brimming with data from NASA’s Hubble Space Telescope, the Very Large Telescope’s Multi-Unit Spectroscopic Explorer, and the Atacama Large Millimeter/submillimeter Array, including observations in ultraviolet, visible, and radio light. Webb’s near- and mid-infrared contributions have provided several new puzzle pieces.</p>           
           <div><a href="https://webb.nasa.gov/" target="blank">Learn more</a></div>
                </div>
                <div className="img-height" ><img src={image2} alt="" /></div>

        </div>
      </div>
        
    </div>
       
   </Container>
    <Footer/>
         </div>
              </>
           
         );
}

export default HomePage
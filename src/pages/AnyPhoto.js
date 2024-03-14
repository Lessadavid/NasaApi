import React, { useState, useEffect } from "react";
import NavBar from '../components/NavBar';
import Container from 'react-bootstrap/Container';
import bg2 from '../assets/images/bg3.avif'
import Footer from "../components/Footer";
 
const My_Key_NASA = "81rphbd6k6dXXKLfSqsYzyx3BfiqRypzgBacKyNr";
  
export default function AnyPhoto() {
    const [photoData, setPhotoData] = useState(null);

    useEffect(() => {
      fetchPhotoDay();

      async function fetchPhotoDay() {
        const res = await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=${My_Key_NASA}`
        );
        const data = await res.json();
        setPhotoData(data);
        console.log(data);
      }
    }, []);
    if (!photoData) return <div />;

      return (
        <>
        <Container>
          <NavBar />
             <img src={bg2} alt="" class="Video_Background2"/>
          <div className="AnyPhoto"> 
        
        <div>
            <div className="my-5 py-4 text-center">
              <h1>Picture of the day</h1>
            </div>

         </div>
        <h1 className="date text-light my-3">{photoData.date}</h1>
        <div className="Photo_Day">
        {photoData.media_type === "image" ? (
        <img
          src={photoData.url}
          alt={photoData.title}
          className="photo"
        />
      ) : (

        <iframe
          title="space-video"
          src={photoData.url}
          frameBorder="0"
          gesture="media"
          allow="encrypted-media"
          allowFullScreen
          className="photo"
        />

      )}
      <div>
        
        <h1 className="text-light  mt-5 text-center">{photoData.title}</h1>
        <br/> 
        <p className="text-light">{photoData.explanation}</p>
      </div>
      </div>
        </div>
        </Container>
        <Footer/>
        </>
    )
}


 
 
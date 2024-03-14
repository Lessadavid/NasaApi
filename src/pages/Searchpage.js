import React, { useState } from "react";
import NavBar from '../components/NavBar';
import Container from 'react-bootstrap/Container';
import ImagePreview from "./Imagepreviw";
import Videobg from '../assets/images/Bg_video.mp4'
import Footer from "../components/Footer";

function Searchpage(){
    const [search, setSearch] = useState("");
    const [photos, setPhotos] = useState([]);

    const handleSearch = async () => {
        const results = await fetch(
          `https://images-api.nasa.gov/search?media_type=image&q=${search}`
        );
        const previews = await results.json();
        setPhotos(previews.collection.items);
    };

    return(
      <div>
         <video className="Video_Background3" autoPlay loop muted>
              <source src={Videobg} type="video/mp4"/>
          </video>
         <Container>
            <NavBar/>
            <div className="text-center my-5">  
                <input
                    className="SearchBarHome"
                    id="nasaSearch"
                    onChange={(e) => setSearch(e.target.value)}
                    type="text"
                    placeholder="Search for an image"
                ></input>
                <button
                    className="button"
                    disabled={search === ""}
                    onClick={handleSearch}
                >
                    Search
                </button>
                <div>
                    <div>
                        {photos.map((preview, index) => (
                            <ImagePreview
                                key={index}
                                nasaPicture={preview.links[0].href}
                                title={preview.data[0].title}
                                description={preview.data[0].description}
                            />
                        ))}
                    </div>  
                </div>
            </div>
        </Container>
        <Footer/> 
      </div>
    )
}

export default Searchpage;

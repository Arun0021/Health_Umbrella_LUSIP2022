import React, { useState } from 'react';
import "slick-carousel/slick/slick.css";
import "./newsletter.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { MDBCol } from 'mdb-react-ui-kit';

import img1 from './Picture2.png';
import img2 from './Picture5.png';
import img3 from './Picture4.png';
import img4 from './Picture2.png';

import { Data } from './data';





function Newsletters() {

  const placeholder = 'Search For a Question'
  const [wordEntered, setWordEntered] = useState([]);
  const [clicked, setClicked] = useState(false);
  const [filteredData, setfilteredData] = useState([]);
  const [slideIndex, setslideIndex] = useState(0);
  const [updateCount, setupdateCount] = useState(0);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ],
    afterChange: () =>
    setupdateCount(updateCount + 1),
    beforeChange: (current, next) => setslideIndex(next)
  };
  
  
  
  const toggle = index => {
    if (clicked === index) {
      //if clicked question is already active, then close it
      return setClicked(null);
    }
    
    setClicked(index);
  };
  
  const handleFilter = (event) => {
    const searchWord = event.target.value
    setWordEntered(searchWord)
    const newFilter = Data.filter((value) => {
      return value.Title.toLowerCase().includes(searchWord.toLowerCase());
    })
    console.log(slideIndex)
    
    if (searchWord === "") {
      setfilteredData([]);
    }
    else {
      setfilteredData(newFilter);
    }
  }
  
  const clrinput = ({id}) => {
    setWordEntered('')
    setfilteredData([])
  console.log(Slider.slickGoTo(id))
}


return (
  <>
    <div className="sectionii">
      <div className="texttt">
        <h2 className='h22'>Connect With Us</h2>
        <button className='buttonnews'>Subscribe</button>

      </div>
      <div><MDBCol md="6">
        <input className="Searchi" type="text" placeholder={placeholder} value={wordEntered} aria-label="Searchii" onChange={handleFilter} />
        {filteredData.length !== 0 && (
          <div className="dataResultNewsletter">
            {filteredData.slice(0, 15).map((value, index) => {
              return (
                <div className="dataItemNeewsletter">
                  <a className="dataItemmNewsletter" onClick={()=>{
                    clrinput(value)}} href={`#${value.id}`} >
                    <p>{value.Title} </p>
                  </a>
                </div>
              );
            })}
          </div>
        )}
      </MDBCol></div>
      <div className='slide'>





        <Slider ref={slider => (slider == slider)} {...settings}>
          {Data.map((item, index) => {
            return (
              <>
                <div className='box' id={item.id}>
                  <div class="card">
                    <div className="card-body" >
                      <div><img className="imagei" src={img1} alt="" /></div>

                      <h3 className='h33'>{item.Title}</h3>
                      <p className='pp'>{item.Abstract}</p>
                    </div>
                  </div>
                </div>
              </>
            );
          })}

        </Slider>
      </div>
    </div>
  </>
);
}






export default Newsletters;
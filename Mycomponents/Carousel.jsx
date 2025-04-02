import React from 'react';
import download from './download.jpeg';
import sand from './sand.jpeg';
import sand1 from './sand1.jpeg';
import Mainvector from './Mainvector.webp';
export default function Carousel() {
  return (
    <div>
       <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" style={{marginTop:"20px",marginLeft:"102px",marginRight:"102px"}}>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={Mainvector} className="d-block w-100 " style={{height: "400px" , width:"100%"}} alt="..." />
            <div className="carousel-caption d-none d-md-block">
                <h2 style={{color: "white"}}>Information about our sites</h2>
                <p style={{color: "white", fontWeight: "bold;"}}>Sand The sand business is a large and growing market, driven by global urbanization and construction booms, with India being the second-largest consumer of sand globally </p>
              </div>
          </div>
          <div className="carousel-item">
            <img src={Mainvector}  className="d-block w-100" style={{height: "400px", width:"100%" }} alt="..." />
            <div className="carousel-caption d-none d-md-block">
                <h2 style={{color: "white"}}>Information about our sites</h2>
                <p style={{color: "white", fontWeight: "bold;"}}>Sand The sand business is a large and growing market, driven by global urbanization and construction booms, with India being the second-largest consumer of sand globally</p>
              </div>
          </div>
          <div className="carousel-item">
            <img src={Mainvector}  className="d-block w-100" style={{height:" 400px", width:"100%"}} alt="..." />
            <div className="carousel-caption d-none d-md-block">
                <h2 style={{color: "white"}}>Information about our sites</h2>
                <p style={{color:" white", fontWeight: " bold;"}}>Sand The sand business is a large and growing market, driven by global urbanization and construction booms, with India being the second-largest consumer of sand globally</p>
              </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  )
}

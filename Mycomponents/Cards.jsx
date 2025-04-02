import React from 'react'; 
import sand2 from './sand2.jpeg';
import sand3 from './sand3.jpeg';
import sand4 from './sand4.jpeg';
export default function Cards() {
  return (
  <div style={{display : "flex"}}>
   <div className="container" style={{margin:" 40px 30px 40px 96px"}} >
    <div className="row">
       <div className="col">
        <div className="card" style={{width: "18rem"}}>
            <img src={sand2} className="card-img-top" alt="..." style={{width:"287px",height:"188px"}} />
            <div className="card-body">
              <h5 className="card-title" style={{fontWeight: "bold"}}>Search simply</h5>
              <p className="card-text">Search through 5 million hotels in just a few seconds.</p>
              <a href="#" className="btn" style={{backgroundColor:"#073a71",color:"white"}}>Search</a>
            </div>
          </div>
      </div>
      <div className="col">
        <div className="card" style={{width: "18rem"}}>
            <img src={sand3} className="card-img-top" alt="..." style={{width:"287px",height:"188px"}}/>
            <div className="card-body">
              <h5 className="card-title" style={{fontWeight: "bold"}}>Compare confidently</h5>
              <p className="card-text">Compare hotel prices from 100s of sites at once..</p>
              <a href="#" className="btn" style={{backgroundColor:"#073a71",color:"white"}}>Compare</a>
            </div>
          </div>
      </div>
      <div className="col">
        <div className="card" style={{width: "18rem"}}>
            <img src={sand4} className="card-img-top" alt="..."  style={{width:"287px",height:"188px"}}/>
            <div className="card-body">
              <h5 className="card-title" style={{fontWeight: "bold"}}>Save big</h5>
              <p className="card-text">Discover a great deal to book on our partner sites.</p>
              <a href="#" className="btn" style={{backgroundColor:"#073a71",color:"white"}}>Book Now</a>
            </div>
          </div>
      </div>
     </div>
    </div>
  </div> 

  )
}

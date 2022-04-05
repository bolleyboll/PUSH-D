import React from 'react'

export default function Home() {
  return (
    <>
    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="slide_1.jpg" className="d-block" style={{width:'100%',height:'634px'}} alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Be Happy</h5>
        <p>Happiness lies in tranquility of mind.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="slide_2.jpg" className="d-block w-100"  style={{width:'100%',height:'634px'}} alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>We Care for you</h5>
        <p>Not only body but mind needs proper care as well.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="slide_3.jpg" className="d-block w-100"  style={{width:'100%',height:'634px'}} alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>A new Beginning</h5>
        <p>Come with us on a complete new journey towards happiness.</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </>
  )
}

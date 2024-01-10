import React from "react";
import pic1 from "../dist/assets/carousel1.jpeg";
import pic2 from "../dist/assets/carousel2.jpeg";

const CarouselComp = () => {
  return (
    <div
      id="carouselExampleCaptions"
      className="carousel slide border border-5"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="/dist/assets/SITES PHOTO/On Going Dombivali site/WhatsApp Image 2023-08-07 at 4.20.52 PM.jpeg" alt="" width={"100%"} height={650} />
          <div className="carousel-caption d-none d-md-block">
            <h5>Some representative placeholder content for the first slide.</h5>
            <p></p>
          </div>
        </div>
        <div className="carousel-item">
          <img src="/dist/assets/SITES PHOTO/mutha1.jpg" alt="" width={"100%"} height={650} />
          <div className="carousel-caption d-none d-md-block">
            <h5></h5>
            <p>Some representative placeholder content for the second slide.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src="/dist/assets/SITES PHOTO/silver.jpg"  alt="" width={"100%"} height={650} />
          <div className="carousel-caption d-none d-md-block">
            <h5>Third slide label</h5>
            <p>Some representative placeholder content for the third slide.</p>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default CarouselComp;

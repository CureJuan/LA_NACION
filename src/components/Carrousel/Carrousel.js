import React from "react";
import banner1 from "../Imagenes/banner1.jpg";
import banner2 from "../Imagenes/banner2.jpg";
import banner3 from "../Imagenes/banner3.jpg";

const Carrousel = () => {
  return (
    <div
      id="carouselExampleDark"
      className="carousel carousel-dark slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="10000">
          <img src={banner1} className="d-block w-100 " alt="banner 1" />
          <div className="carousel-caption d-none d-md-block">
            <h5>Guerra en Ucrania día por día</h5>
            <p>Los mapas que explican la invasión que tiene en vilo al mundo</p>
          </div>
        </div>
        <div className="carousel-item" data-bs-interval="2000">
          <img src={banner2} className="d-block w-100" alt="banner 2" />
          <div className="carousel-caption d-none d-md-block">
            <h5>River vs Boca: superclásicos inolvidables</h5>
            <p>
              Para vos, ¿cuál fue el mejor River - Boca de los últimos 10 años?
              ¡Opiná!
            </p>
          </div>
        </div>
        <div className="carousel-item">
          <img src={banner3} className="d-block w-100" alt="banner 3" />
          <div className="carousel-caption d-none d-md-block">
            <h5>La economía de argentina </h5>
            <p>
              Muestra señales positivas de recuperación aunque inflación
              continúa en alza
            </p>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carrousel;

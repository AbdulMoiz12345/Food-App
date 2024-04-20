

import React from 'react';
import Footer from './Footer';

const Home = () => {
  return (
    <>
      <div id="carouselExample" className="carousel slide custom-carousel" style={{ height: "600px" }}>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141352.jpg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJvyGM6LgwFR6Ih0kDTcP7rracpvclbeocOML8iJ5t&s" className="d-block w-100" alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div>
        <h1>Welcome to Foods</h1>
        <p>Welcome to our delectable world of culinary delights! At [Website Name], we're passionate about delivering an extraordinary food experience that tantalizes your taste buds and delights your senses. Whether you're a seasoned food enthusiast or a curious culinary explorer, our diverse menu offers a symphony of flavors that cater to every palate. From hearty comfort classics to innovative gastronomic creations, our talented chefs meticulously craft each dish using the finest, freshest ingredients sourced from local producers. Immerse yourself in a culinary journey that celebrates the art of food, blending traditional recipes with contemporary flair. Join us on this gastronomic adventure and savor the moments that bring us all together, one delicious bite at a time.</p>
      </div>
    </>
  );
};

export default Home;
import React, { useState } from 'react';
import './App.css'; // Import your CSS file

const CarInfo = () => {
  const [carInfo, setCarInfo] = useState({
    model: "BUGGATTI",
    mph: "2.2 s",
    speed: "267 mph",
    range: "431 mi",
    backgroundImage: "url(https://i.pinimg.com/originals/c3/4a/69/c34a690f5fc5f3165ab8476be7d5fb79.jpg)"
  });

  const handleClick = (newInfo) => {
    setCarInfo({
      ...newInfo,
      backgroundImage: newInfo.backgroundImage // Assuming each newInfo object has a backgroundImage property
    });
  };

  return (
    <div className="header" style={{ backgroundImage: carInfo.backgroundImage }}>
      <nav>
        <div className="logo">
          <h1>DREAM Cars</h1>
        </div>
        <ul>
          <li><button onClick={() => handleClick({ model: "CITROEN", mph: "11s", speed: "165 km/h", range: "650 km", backgroundImage: "url(https://i.pinimg.com/originals/c3/4a/69/c34a690f5fc5f3165ab8476be7d5fb79.jpg)" })}>CITROEN</button></li>
          <li><button onClick={() => handleClick({ model: "SCORPIO", mph: "11s", speed: "165 km/h", range: "650 km", backgroundImage: "url(https://images.hindustantimes.com/auto/img/2023/01/31/1600x900/Mahindra_Scorpio_Classic_1675145128326_1675145128462_1675145128462.jpg)" })}>SCORPIO</button></li>
          <li><button onClick={() => handleClick({ model: "BUGATII", mph: "11s", speed: "165 km/h", range: "650 km", backgroundImage: "url(https://s1.cdn.autoevolution.com/images/news/gallery/the-bugatti-veyron-grand-sport-vitesse-still-is-the-world-s-fastest-production-roadster_3.jpg)" })}>BUGATII</button></li>
          <li><button onClick={() => handleClick({ model: "FORTUNER", mph: "11.2s", speed: "190 km/h", range: "600 km", backgroundImage: "url(https://www.galaxytoyota.in/public/storage/946/power-to-enhance12.jpg)" })}>FORTUNER</button></li>
          <li><button onClick={() => handleClick({ model: "THAR", mph: "2.5s", speed: "155 km/h", range: "550 km", backgroundImage: "url(https://stat.overdrive.in/wp-content/uploads/2023/01/Thar1-1-900x506.jpg)" })}>THAR</button></li>
          <li><button onClick={() => handleClick({ model: "BOLERO", mph: "30.3s", speed: "117 km/h", range: "520 km", backgroundImage: "url(https://stimg.cardekho.com/images/carexteriorimages/930x620/Mahindra/Bolero/10754/1697696929365/front-left-side-47.jpg)" })}>BOLERO</button></li>
          <li><button onClick={() =>handleClick ({model: "BUGGATI" , mph :"2.2s" , speed: "267 km/h" , range: "431 mi" ,  backgroundImage: "url(https://e1.pxfuel.com/desktop-wallpaper/527/297/desktop-wallpaper-user-of-chevrolet-tavera-chevrolet-tavera.jpg" })}>TAVERA</button></li>
         <li><button className="btn" onClick={() => handleClick({model: "Gratitude blooms like a rare flower in the garden of appreciation.",backgroundImage: "url(https://t3.ftcdn.net/jpg/03/54/31/92/360_F_354319292_N5MPHBc5cyK6c3olXCIyXD1SDfkh1vJF.jpg)"})}>OrderNow</button></li> 

        </ul>
        
        
      </nav>

      <div className="info">
        <div>
          <h2 id="mph">{carInfo.mph}</h2>
          <p>100 mph</p>
        </div>
        <div>
          <h2 id="speed">{carInfo.speed}</h2>
          <p>Top Speed</p>
        </div>
        <div>
          <h2 id="range">{carInfo.range}</h2>
          <p>Max Range</p>
        </div>
        <div className="line"></div>
        <div className="line"></div>
        <div>
          <h2 id="model">{carInfo.model}</h2>
        </div>
      </div>
    </div>
  );
};

export default CarInfo;

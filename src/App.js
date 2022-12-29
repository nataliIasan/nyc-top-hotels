import { useState } from 'react';
import './App.css';
import { data } from './data';

function App() {
  const [hotels, setHotels] = useState(data);
  const [showMore, setShowMore] = useState(false);

  const removeHotel = (id) => {
    let newHotel = hotels.filter( hotelName =>  hotelName.id !==id);
    setHotels(newHotel)
  }

  const showMoreClick = (element) => {
    element.showMore = !element.showMore
    setShowMore(!showMore)
  }

  return (
    <div>
      <div className="container">
        <h1>NYC TOP {hotels.length} HOTELS </h1>
      </div>

      {hotels.map((element => {
        const {id, hotelName, description, image, source, showMore} = element;

        return(<div key= {id}>
          <div className="container">
            <h2>{id} - {hotelName}</h2>
          </div>

          <div className="container">
              <p>{showMore ? description : description.substring(0, 220) + "..."}
              <button onClick={() => showMoreClick(element)}>{showMore ? "Show less" : "Show more"}</button>
              </p>
          </div>

          <div className="container">
            <img src= {image} alt="foto" width="500px"/>
          </div>

          <div className="container">
              <p>{source}</p>
          </div>

          <div className="container">
            <button className="btn" onClick={() => removeHotel(id)}>remove</button>
          </div>
        </div>)
      }))}
    </div>
  );
}

export default App;

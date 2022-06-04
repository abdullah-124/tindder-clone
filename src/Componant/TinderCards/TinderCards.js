import React, { useEffect, useState } from "react";
import TinderCard from "react-tinder-card";
import './TinderCard.css'
import axios from '../../axios'

function TinderCards() {
  const [people, setPeople] = useState([]);
  useEffect(()=>{
    async function fetchData(){
      const req = await axios.get('/tinder/card')
      setPeople(req.data)
    }
    fetchData()
  } ,[])
  const onSwipe = (direction) => {
    console.log("You swiped: " + direction);
  };

  const onCardLeftScreen = (myIdentifier) => {
    console.log(myIdentifier + " left the screen");
  };
  return people.length===0 ? <h3 style={{textAlign: 'center',color: 'gray',padding: '10px'}}>Loading...</h3> : (
    <>
      <div>
        <div className="tinderCards_container">
          {people.map((person) => (
              <TinderCard
              className="swipe"
              key={person._id}
                onSwipe={onSwipe}
                onCardLeftScreen={() => onCardLeftScreen("fooBar")}
                preventSwipe={["right", "left"]}
              >
                <div
                  className="card"
                  style={{ backgroundImage: `url(${person.imgUrl})` }}
                >
                  <div className="cardContent">
                  <h3>{person.name}</h3>
                  </div>
                </div>
              </TinderCard>
          ))}
        </div>
      </div>
    </>
  );
}

export default TinderCards;

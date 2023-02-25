import React from "react";

import "./Card.css";
const handleShow=(imdbID)=>{
    
    const ApiKey=`94bbf794`;
     try{
     fetch(`https://www.omdbapi.com/?apikey=3cc4b5c9&i=tt1201607`)
        //fetch(`https://www.omdbapi.com/?apikey=${ApiKey}&i=${imdbID}`)
     .then((resp) => resp.json())
             .then((dt1)=>{
             console.log("handleshow are : ",dt1);
             
         });
     }catch(error){
         console.log(error)
     }  
 }


const Card = ({ imgUrl, type, title, year,imdbID}) => {
  return (
    <div className="cardContainer">
      <div className="imgContainer">
        <img src={imgUrl} />
      </div>
      <div className="cardText">Title : {title}</div>
      <div className="cardText">Type : {type}</div>
      <div className="cardText">Year : {year}</div>
      <button className="cardBtn" onClick={handleShow(imdbID)} >Know More </button>
      
    </div>
  );
};

export default Card;
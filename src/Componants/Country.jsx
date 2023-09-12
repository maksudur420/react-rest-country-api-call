import { useState } from "react";
import './country.css'

const Country = ({country,listVisitedCountry}) => {
    const {name,flags,region,area,population} =country;
    const [visited,setVisited] =useState(false);

    const visitedCountry =()=>{
        setVisited(!visited);
        
    }
    console.log(country)
    return (
        <div className={`boxSize ${visited && "visited"}`}>
            <h3>Country Name: {name.common}</h3>
            <img src={flags.png} className='flagsize' alt="" />
            <p>Region : {region}</p>
            <p>Area of Land: {area}</p>
            <p>Total Population: {population}</p>
            <button onClick={()=>listVisitedCountry(country)} className="margin">Selected</button>
            <button onClick={visitedCountry}>{visited? "Visite":"Need Visit"}</button>

        </div>
    );
};

export default Country;
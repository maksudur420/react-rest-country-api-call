import { useEffect } from "react";
import { useState } from "react";
import Country from "./Country";
import './countries.css'


const Countries = () => {
    const [countries,setCountries]=useState([]);
    const [visitedCountry,setVisitedCountry]=useState([])

    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res=>res.json())
        .then(data=>setCountries(data))
    },[])
    const listVisitedCountry =(country)=>{
        setVisitedCountry ([...visitedCountry,country]);
      
    }
    return (
        <div>
            <h1>Countries Number : {countries.length}</h1>
            <div>
                <h3>List of Visited Country</h3>
                <p>{visitedCountry.length}</p>
                <div>
                    <p>
                        {
                            visitedCountry.map(visit=><li key={visit.cca3}>{visit.name.common}</li>)
                        }
                    </p>
                </div>
                
            </div>

            <div className="container">
                {countries.map(country=><Country
                    key={country.cca2}
                    country ={country}
                    listVisitedCountry={listVisitedCountry}
                 >

                 </Country>)}
            </div>
        </div>
    );
};

export default Countries;
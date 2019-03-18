//import React from "react";

  const get = async () => {
    const response = await fetch('https://swapi.co/api/people/' );
    const phones = await response.json();
    console.log(phones)
   return phones.results
    
  }





export { get };

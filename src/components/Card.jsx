import React from 'react';

const Card = ( {country} ) => {
    return (
      <div className='contenant'>
        <li className='card'>
          <img 
            src={country.flags.png} 
            alt={"drapeau" + country.translations.fra.common} 
          />
          <div className='infos'>
            <h2>{country.translations.fra.common}</h2>
            <h2>{country.capital}</h2>
            <p>Pop. {country.population.toLocaleString()}</p>
          </div> 
        </li>
      </div>
    );
};

export default Card;
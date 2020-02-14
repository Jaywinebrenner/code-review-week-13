
import React from 'react';
import Keg from './Keg';

var masterKegList = [
  {
    name: 'IPAA',
    brand: 'Alcoholics Anonymous',
    price: '$45',
    alcoholContent: '0%'
  },
  {
    name: 'Rat Milk',
    brand: 'Animals R Us',
    price: '$34',
    alcoholContent: '5%'
  },
  {
    name: 'Pabst Yellow Ribbon',
    brand: 'Anonymous Corporate Conglomerate',
    price: '25$',
    alcoholContent: '1.2%'
  }
];

function KegList(){
  return (
    <div>

      {masterKegList.map((keg, index) =>
        <Keg name={keg.name}
          brand={keg.brand}
          price={keg.price}
          alcoholContent={keg.alcoholContent}

          key={index}/>
      )}
    </div>
  );
}

export default KegList;

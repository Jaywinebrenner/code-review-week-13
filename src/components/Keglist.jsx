
import React from 'react';
import Keg from './Keg';

var masterKegList = [
  {
    name: 'Ken and Blamp',
    brand: '3A',
    price: 'Firebase won\'t save record. Halp.'
    alcoholContent: 'Firebase won\'t save record. Halp.'
  },
  {
    name: 'Ken and Blamp',
    brand: '3A',
    price: 'Firebase won\'t save record. Halp.'
    alcoholContent: 'Firebase won\'t save record. Halp.'
  },
  {
    name: 'Ken and Blamp',
    brand: '3A',
    price: 'Firebase won\'t save record. Halp.'
    alcoholContent: 'Firebase won\'t save record. Halp.'
  }
];

function KegList(){
  return (
    <div>
      <hr/>
      {masterKegList.map((keg, index) =>
        <Keg names={keg.name}
          brand={keg.brand}
          price={keg.price}
          alcoholContent={keg.alcoholContent}

          key={index}/>
      )}
    </div>
  );
}

export default KegList;

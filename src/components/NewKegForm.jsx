import React from 'react';

function NewKegForm(){
  return (
    <div className='newkegform-wrapper'>
      <style jsx>{`
          .newkegform-wrapper{
            text-align: center;
          }

          .newkeg-input{
            margin-top: 30px;
          }

          .newkeg-button{
            margin-top: 30px;
            margin-bottom: 100px;
            padding: 20px;
            border-radius: 5px;
            background-color: black;
            color: white;

          }

          `}</style>

        <h1>Hello Ken's Keg Employee</h1>
        <h2>Please fill out the follwoing form to add a new Ken Keg</h2>
        <form>
          <input
            class='newkeg-input'
            type='text'
            id='name'
            placeholder='Keg Name'/>
          <br/>
          <input
            class='newkeg-input'
            type='text'
            id='brand'
            placeholder='Brand'/>
          <br/>
          <input
            class='newkeg-input'
            type='text'
            id='price'
            placeholder='Price'/>
          <br/>
          <input
            class='newkeg-input'
            type='text'
            id='alcoholContent'
            placeholder='Alcohol Content'/>
          <br/>
          <button class='newkeg-button'type='submit'>Enter New Keg</button>
        </form>
      </div>
    );
  }

  export default NewKegForm;

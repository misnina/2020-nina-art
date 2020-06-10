/** @jsx jsx */
import React, { useReducer, useEffect } from 'react';
import { jsx } from '@emotion/core';
import { Masonry } from 'masonic'; 

import { paImage, digiImage } from './images/image';
import bg from './images/halftone-yellow.png';

const EasyMasonryComponent = (props) => (
  <Masonry 
    items={digiImage.concat(paImage)} 
    render={MasonryCard}
    columnGutter={20}
    columnWidth={300}
    css={{
      boxSizing: 'border-box',
      padding: 100,
      maxWidth: '80%',
    }}
  />
)

const MasonryCard = ({data: {src}, data: {id}, data: {alt}}) => {
  console.log(src);
  return (
    <div css={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      transition: 'transform 100ms ease-in-out',
      width: '100%',
      minHeight: 100,
      boxShadow: `7px 10px 10px -4px rgba(35,12,59,0.25)`,
      background: '#f5f189',
    }}>
      <img 
        src={src} 
        key={`pa-${id}`}
        alt={alt}
        css={{
          width: '100%',
          display: 'block',
        }}
      />
    </div>
  );
};

function App() {
  return (
    <div className="App" css={{
      boxSizing: 'border-box',
      padding: 50,
      background: `url(${bg}) repeat`,
      width: '100%',
      textAlign: 'center',
      minHeight: '100vh',
    }}>      
      <div>
        <h1 css={{
          paddingBottom: 0,
          fontSize: 60,
          color: 'white',
          textShadow: `3px 5px 1px rgba(35,12,59,0.25)`,
        }}>
          Nina's Art Showcase
        </h1>
        <h4>
          Digital fist, pixel below.
          <div css={{
            paddingTop: 10,
            fontSize: 30,
            color: 'white',
            textShadow: `1px 1px 2px rgba(35,12,59,0.25)`,
          }}>
            ninarachaebuie@gmail.com
          </div>
        </h4>
        <div>
          <EasyMasonryComponent /> 
        </div>
      </div>
    </div>
  );
}



export default App;

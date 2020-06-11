/** @jsx jsx */
import React, { useReducer, useEffect } from 'react';
import { jsx } from '@emotion/core';
import { Masonry } from 'masonic'; 
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import { paImage, digiImage } from './images/image';
import bg from './images/halftone-yellow.png';

import Page from './page';

const DigitalArtComponent = (props) => (
  <Masonry 
    items={digiImage} 
    render={MasonryCard}
    columnGutter={20}
    columnWidth={300}
    css={{
      boxSizing: 'border-box',
      padding: 100,
      maxWidth: '80%',
    }}
  />
);

const PixelArtComponent = (props) => (
  <Masonry 
    items={paImage} 
    render={MasonryCard}
    columnGutter={20}
    columnWidth={300}
    css={{
      boxSizing: 'border-box',
      padding: 100,
      maxWidth: '80%',
    }}
  />
);

const MasonryCard = ({data: {src}, data: {id}, data: {alt}}) => {
  let isCrisp = src.slice(-4) === '.gif' ? 'crisp-edges' : 'auto';
  if (src.includes('7') || src.includes('12') || src.includes('14') || src.includes('10')) isCrisp = 'auto';
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
          imageRendering: isCrisp,
          width: '100%',
          display: 'block',
        }}
      />
    </div>
  );
};

const PixiPage = (props) => (
  <Page title={'Pixel Art'} link='/digital' switch='Digital Art'>
    <PixelArtComponent/>
  </Page>
);

const DigiPage = (props) => (
  <Page title={'Digital Art'} link='/pixel' switch='Pixel Art'>
    <DigitalArtComponent/>
  </Page>
);

const Links = (props) => (
  <div css={{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    a: {
      color: '#c849cc',
      textDecoration: 'none',
      '&:hover': {
        color: 'white',
      }
    },
    div: {
      fontSize: 40,
      weight: '900',
      padding: 10,
      margin: 5,
      width: '100%',
      textShadow: `3px 5px 1px rgba(35,12,59,0.25)`,
    }
  }}>
    <div><Link to='/digital'>Digital Portoflio</Link></div>
    <div><Link to='/pixel'>Pixel Art Portfolio</Link></div>
  </div>
)

function App() {
  return (
    <Router>
      <div className="App" css={{
        wordWrap: 'break-word',
        boxSizing: 'border-box',
        padding: 50,
        background: `url(${bg}) repeat`,
        width: '100%',
        textAlign: 'center',
        minHeight: '100vh',
      }}>      
        <div>
          <Switch>
            <Route path='/digital' children={<DigiPage />} />
            <Route path='/pixel' children={<PixiPage />} />
            <Route path='/' children={<Links />} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;

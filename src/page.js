/** @jsx jsx */
import React from 'react';
import { jsx } from '@emotion/core';
import { Link } from 'react-router-dom';

const Page = (props) => {
  return(
    <div>
      <div css={{
        position: 'absolute',
        fontSize: 18,
        top: 10,
        right: 10,
        a: {
          color: '#c849cc',
          '&:hover': {
            color: 'white',
            textShadow: `2px 2px 1px rgba(35,12,59,0.25)`,
          }
        }
      }}>
        <Link to={props.link}>Switch to {props.switch}</Link>
      </div>
      <h1 css={{
        paddingBottom: 0,
        fontSize: 80,
        color: 'white',
        textShadow: `3px 5px 1px rgba(35,12,59,0.25)`,
      }}>
        Nina Buie
      </h1>
      <h4>
        <div css={{
          textAlign: 'center',
          paddingTop: 10,
          fontSize: 30,
          textShadow: `1px 1px 2px rgba(35,12,59,0.25)`,
        }}>
          <div>{props.title}</div>
          ninarachaebuie@gmail.com
        </div>
      </h4>
      <div>
        {props.children}
      </div>
    </div>
   )

 }

export default Page;
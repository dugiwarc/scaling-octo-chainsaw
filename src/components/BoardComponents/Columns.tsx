import React from 'react';
import { verticalTiles } from '../styles';
import Column from './Column';

class Columns extends React.Component {
  render() {
    return (
      <div style={verticalTiles}>
        <Column />
        <Column />
        <Column />
        <Column />
        <Column />
        <Column />
        <Column />
      </div>
    );
  }
}

export default Columns;

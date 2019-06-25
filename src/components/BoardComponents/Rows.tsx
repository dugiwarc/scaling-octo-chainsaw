import React from 'react';
import Row from './Row';
import { horizontalTiles } from '../styles';

class Rows extends React.Component {
  render() {
    return (
      <div style={horizontalTiles}>
        <Row />
        <Row />
        <Row />
      </div>
    );
  }
}

export default Rows;

import React from 'react';
import { cell, column } from '../styles';
import uuid from 'uuid/v4';

class Column extends React.Component {
  render() {
    return (
      <div style={column}>
        <div key={uuid()} style={cell} />
        <div key={uuid()} style={cell} />
        <div key={uuid()} style={cell} />
      </div>
    );
  }
}

export default Column;

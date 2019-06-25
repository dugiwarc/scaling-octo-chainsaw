import React from 'react';
import { cell, row } from '../styles';
import uuid from 'uuid/v4';

class Row extends React.Component {
  render() {
    return (
      <div style={row}>
        <div key={uuid()} style={cell} />
        <div key={uuid()} style={cell} />
        <div key={uuid()} style={cell} />
        <div key={uuid()} style={cell} />
        <div key={uuid()} style={cell} />
        <div key={uuid()} style={cell} />
      </div>
    );
  }
}

export default Row;

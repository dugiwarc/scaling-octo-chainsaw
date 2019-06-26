import React, { Component } from 'react';
import { tile, ludoTile, safeLudoTile } from '../styles/';

interface AppProps {
  type: number;
}

export default class Tile extends Component<AppProps> {
  render() {
    const { type } = this.props;
    return (
      <div style={type === -3 ? ludoTile : type === -8 ? safeLudoTile : tile} />
    );
  }
}

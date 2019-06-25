import React from 'react';
import { status } from '../styles/';

interface AppProps {
  title: string;
  output: string | number;
}

class InfoComp extends React.Component<AppProps> {
  render() {
    const { title, output } = this.props;
    return (
      <div>
        {title}
        <span style={status}>{output}</span>
      </div>
    );
  }
}

export default InfoComp;

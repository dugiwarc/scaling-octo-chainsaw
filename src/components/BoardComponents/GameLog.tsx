import React from 'react';
import uuid from 'uuid/v4';

interface AppProps {
  gameMessage: string;
  currentDiceRoll: number;
}

interface AppState {
  messages: string[];
}

class GameLog extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      messages: []
    };
  }

  componentWillReceiveProps() {
    this.setState({
      messages: [...this.state.messages, this.props.gameMessage]
    });
  }

  componentDidUpdate() {}

  render() {
    const { gameMessage } = this.props;
    return (
      <div>
        {this.state.messages.map(
          (message, i) => i !== 1 && <div key={uuid()}>{message}</div>
        )}
        {gameMessage}
      </div>
    );
  }
}

export default GameLog;

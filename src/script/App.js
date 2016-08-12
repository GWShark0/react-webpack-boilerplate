import React from 'react';

const App = React.createClass({

  getInitialState() {
    return this.tick();
  },

  componentDidMount() {
    this.clock = setInterval(() => {
      this.setState(this.tick());
    }, 1000);
  },

  tick() {
    return {
      time: new Date().toTimeString()
    };
  },

  render() {
    return (
      <div className="time">{this.state.time}</div>
    );
  }
});

export default App;

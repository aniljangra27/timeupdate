import React from 'react';

class Clock extends React.Component {
    state = {timeupdate : new Date().toLocaleTimeString()};
    componentDidMount() {
      setInterval( () => {
        this.setState({timeupdate : new Date().toLocaleTimeString()});
      },1000);
    }
    render() {
      return <div className="App">Time is {this.state.timeupdate}</div>
    }
  }

  export default Clock;
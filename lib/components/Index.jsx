import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answer: 42,
    };
  };

  asyncFunc = () => {
    return Promise.resolve(37);
  }

  async componentDidMount() {
    this.setState({
      answer: await this.asyncFunc()
    })
  }

  render() {
    const { answer } = this.state;
    return (
      <h2>
        Hello -- { answer }
      </h2>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);

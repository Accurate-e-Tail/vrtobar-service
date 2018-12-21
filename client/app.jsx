import React from 'react';

import Layout from './components/layout/layout.jsx';

import './styles/main.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Layout />
    );
  }
}

export default App;

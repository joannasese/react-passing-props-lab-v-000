import React from 'react';

import FruitBasket from './FruitBasket';

class App extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      filters: [],
      currentFilter: null,
      fruit: [],
    }
  }

  componentWillMount() {
    this.fetchFilters();
  }

  handleFilterChange = event => {
    console.log('new filter: ', event.target.value);
    this.setState({ selectedFilter: event.target.value });
  }

  fetchFilters = () => {
    fetch('/api/fruit_types')
      .then(response => response.json())
      .then(filters => this.setState({ filters }));
  }

  componentDidMount() {
    fetch('/api/fruit')
      .then(response => response.json())
      .then(items => this.setState({ items }));
  }

  render() {
    return (
      <FruitBasket
        fruit={this.state.fruit}
        filters={this.state.filters}
        currentFilter={this.state.currentFilter}
        onUpdateFilter={this.updateFilter}
      />
    )
  }
}

// const App = () => <FruitBasket />;

export default App;

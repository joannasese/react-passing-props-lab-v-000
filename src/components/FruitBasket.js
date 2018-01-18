import React, { Component }  from 'react';

import Filter from './Filter';
import FilteredFruitList from './FilteredFruitList.js';

const FruitBasket = ( {handleChange, handleFilterChange, selectedFilter} ) =>
<div className="fruit-basket">
  <Filter handleChange={handleFilterChange} />
  <FilteredFruitList
    filter={selectedFilter} />
</div>

FruitBasket.defaultProps = {
  fruit: [],
  filters: [],
  currentFilter: [],
  updateFilterCallback: function(){}
}

export default FruitBasket;

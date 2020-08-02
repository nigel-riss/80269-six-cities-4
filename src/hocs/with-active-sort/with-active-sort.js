import React, {PureComponent} from 'react';
import Sorting from '../../utils/sort.js';


const SORT_BY_POPULAR_INDEX = 0;


const withActiveSort = (Component) => {
  class WithActiveSort extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activeSort: Sorting[SORT_BY_POPULAR_INDEX],
      };

      this._handleSortTypeSelect = this._handleSortTypeSelect.bind(this);
    }

    _handleSortTypeSelect(sort) {
      this.setState({
        activeSort: sort,
      });
    }

    render() {
      const {activeSort} = this.state;

      return (
        <Component
          {...this.props}
          activeSort={activeSort}
          onSortTypeSelect={this._handleSortTypeSelect}
        />
      );
    }
  }


  return WithActiveSort;
};


export default withActiveSort;

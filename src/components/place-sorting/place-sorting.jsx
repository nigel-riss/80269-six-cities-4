import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import Sorting from '../../utils/sort.js';


class PlaceSorting extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isOpened: false,
    };

    this._handleSortClick = this._handleSortClick.bind(this);
  }

  render() {
    const {
      activeSort,
      onSortTypeSelect,
    } = this.props;

    return (
      <form className="places__sorting" action="#" method="get">
        <span className="places__sorting-caption">Sort by </span>
        <span
          className="places__sorting-type"
          tabIndex="0"
          onClick={this._handleSortClick}
        >
          {activeSort.name}
          <svg className="places__sorting-arrow" width="7" height="4">
            <use xlinkHref="#icon-arrow-select"></use>
          </svg>
        </span>
        <ul className={`places__options places__options--custom ${this.state.isOpened && `places__options--opened`}`}>
          {Sorting.map((sort, i) => (
            <li
              key={`${sort.type}-${i}`}
              className={`places__option
                ${sort.type === activeSort.type && `places__option--active`}`}
              tabIndex="0"
              onClick={() => {
                onSortTypeSelect(sort);
                this._handleSortClick();
              }}
            >
              {sort.name}
            </li>
          ))}
        </ul>
      </form>
    );
  }

  _handleSortClick() {
    this.setState((state) => ({
      isOpened: !state.isOpened,
    }));
  }
}


PlaceSorting.propTypes = {
  activeSort: PropTypes.shape({
    type: PropTypes.string,
    name: PropTypes.string,
    func: PropTypes.func,
  }).isRequired,
  onSortTypeSelect: PropTypes.func.isRequired,
};


export default PlaceSorting;

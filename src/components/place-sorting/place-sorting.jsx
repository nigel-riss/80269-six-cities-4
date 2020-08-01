import React from 'react';
import PropTypes from 'prop-types';
import Sorting from '../../utils/sort.js';


const PlaceSorting = (props) => {
  const {
    activeSort,
    isOpened,
    onSortTypeSelect,
    onListClick,
  } = props;

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by </span>
      <span
        className="places__sorting-type"
        tabIndex="0"
        onClick={onListClick}
      >
        {activeSort.name}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${isOpened && `places__options--opened`}`}>
        {Sorting.map((sort, i) => (
          <li
            key={`${sort.type}-${i}`}
            className={`places__option
              ${sort.type === activeSort.type && `places__option--active`}`}
            tabIndex="0"
            onClick={() => {
              onSortTypeSelect(sort);
              onListClick();
            }}
          >
            {sort.name}
          </li>
        ))}
      </ul>
    </form>
  );
};


PlaceSorting.propTypes = {
  activeSort: PropTypes.shape({
    type: PropTypes.string,
    name: PropTypes.string,
    func: PropTypes.func,
  }).isRequired,
  isOpened: PropTypes.bool.isRequired,
  onListClick: PropTypes.func.isRequired,
  onSortTypeSelect: PropTypes.func.isRequired,
};


export default PlaceSorting;

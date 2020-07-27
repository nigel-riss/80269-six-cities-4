import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';


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
      onSortTypeSelect,
      activeSortType,
    } = this.props;

    return (
      <form className="places__sorting" action="#" method="get">
        <span className="places__sorting-caption">Sort by </span>
        <span
          className="places__sorting-type"
          tabIndex="0"
          onClick={this._handleSortClick}
        >
          Popular
          <svg className="places__sorting-arrow" width="7" height="4">
            <use xlinkHref="#icon-arrow-select"></use>
          </svg>
        </span>
        <ul className={`places__options places__options--custom ${this.state.isOpened && `places__options--opened`}`}>
          <li className="places__option places__option--active" tabIndex="0">Popular</li>
          <li className="places__option" tabIndex="0">Price: low to high</li>
          <li className="places__option" tabIndex="0">Price: high to low</li>
          <li className="places__option" tabIndex="0">Top rated first</li>
        </ul>
        {/* <select className="places__sorting-type" id="places-sorting">
          <option className="places__option" value="popular" selected="">Popular</option>
          <option className="places__option" value="to-high">Price: low to high</option>
          <option className="places__option" value="to-low">Price: high to low</option>
          <option className="places__option" value="top-rated">Top rated first</option>
        </select> */}
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
  onSortTypeSelect: PropTypes.func,
  activeSortType: PropTypes.string,
};


export default PlaceSorting;

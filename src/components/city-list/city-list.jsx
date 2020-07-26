import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';


class CityList extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      activeCity,
      cities,
      onCityNameClick,
    } = this.props;

    return (
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {cities.map((city, i) => (
            <li className="locations__item" key={`${city}-${i}`}>
              <a
                className={`locations__item-link tabs__item
                  ${city === activeCity && `tabs__item--active`}
                `}
                href="#"
                onClick={(evt) => {
                  evt.preventDefault();
                  onCityNameClick(city);
                }}
              >
                <span>{city}</span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    );
  }
}


CityList.propTypes = {
  activeCity: PropTypes.string.isRequired,
  cities: PropTypes.arrayOf(PropTypes.string).isRequired,
  onCityNameClick: PropTypes.func.isRequired,
};


export default CityList;

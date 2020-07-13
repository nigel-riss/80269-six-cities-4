import React, {PureComponent, createRef} from 'react';
import PropTypes from 'prop-types';
import leaflet from 'leaflet';
import {PlaceTypes} from '../../const.js';


class Map extends PureComponent {
  constructor(props) {
    super(props);

    this._mapRef = createRef();
    this._map = null;
    this._markers = null;

    this._initMap = this._initMap.bind(this);
  }

  componentDidMount() {
    this._initMap();
  }

  componentDidUpdate() {
    this._removeMarkers();
    this._addMarkers();
  }

  componentWillUnmount() {
    this._map = null;
  }

  render() {
    return (
      <div
        id="map"
        ref={this._mapRef}
        style={{height: `100%`}}
      ></div>
    );
  }

  _initMap() {
    const {
      center,
      zoom,
    } = this.props;

    this._map = leaflet.map(this._mapRef.current, {
      center,
      zoom,
      zoomControl: false,
      marker: true
    });

    this._map.setView(center, zoom);

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`,
      })
      .addTo(this._map);

    this._addMarkers();
  }

  _addMarkers() {
    const icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 40]
    });

    this._markers = this.props.offers
      .map((offer) => {
        leaflet
          .marker(offer.coordinates, {icon})
          .addTo(this._map);
      });
  }

  _removeMarkers() {
    this._markers.forEach((marker) => marker.remove());
    this._markers = null;
  }
}


Map.propTypes = {
  center: PropTypes.arrayOf(PropTypes.number).isRequired,
  zoom: PropTypes.number.isRequired,
  offers: PropTypes.arrayOf(PropTypes.shape({
    bedroomsCount: PropTypes.number.isRequired,
    coordinates: PropTypes.arrayOf(PropTypes.number).isRequired,
    descriptionLines: PropTypes.arrayOf(PropTypes.string).isRequired,
    features: PropTypes.arrayOf(PropTypes.string).isRequired,
    host: PropTypes.shape({
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      isSuper: PropTypes.bool.isRequired,
    }).isRequired,
    isPremium: PropTypes.bool.isRequired,
    maxAdultsCount: PropTypes.number.isRequired,
    photos: PropTypes.arrayOf(PropTypes.string).isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.oneOf(Object.values(PlaceTypes)).isRequired,
  })).isRequired,
};


export default Map;

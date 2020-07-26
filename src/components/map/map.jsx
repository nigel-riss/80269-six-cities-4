import React, {PureComponent, createRef} from 'react';
import PropTypes from 'prop-types';
import leaflet from 'leaflet';
import OfferTypes from '../../types/offer.js';


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

    const {
      center,
      zoom,
    } = this.props;

    this._map.setView(center, zoom);
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
      .map((offer) => (
        leaflet
          .marker(offer.location, {icon})
          .addTo(this._map)
      ));
  }

  _removeMarkers() {
    this._markers.forEach((marker) => marker.remove());
    this._markers = null;
  }
}


Map.propTypes = {
  center: PropTypes.arrayOf(PropTypes.number).isRequired,
  zoom: PropTypes.number.isRequired,
  offers: PropTypes.arrayOf(OfferTypes).isRequired,
};


export default Map;

import React, {PureComponent, createRef} from 'react';
import PropTypes from 'prop-types';
import leaflet from 'leaflet';


class Map extends PureComponent {
  constructor(props) {
    super(props);

    this._mapRef = createRef();
    this._map = null;
  }

  componentDidMount() {
    const city = [52.38333, 4.9];
    const zoom = 12;

    this._map = leaflet.map(this._mapRef.current, {
      center: city,
      zoom,
      zoomControl: false,
      marker: true
    });
    this._map.setView(city, zoom);

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`,
      })
      .addTo(this._map);

    this._addMarkers();
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

  _addMarkers() {
    const icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 40]
    });
    const offerCords = [52.3709553943508, 4.89309666406198];
    leaflet
      .marker(offerCords, {icon})
      .addTo(this._map);
  }

  _removeMarkers() {

  }
}


Map.propTypes = {

};


export default Map;

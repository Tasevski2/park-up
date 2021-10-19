import GoogleMapReact from 'google-map-react';

import { Wrapper, Marker } from './styles';

const ParkingSpaceMarker = ({ text, isTaken }) => (
  <Marker $isTaken={isTaken}>{text}</Marker>
);

const GoogleMaps = ({ location, parkingSpacesLocation, zoneAreaColor }) => {
  const defaultProps = {
    zoom: 18,
  };
  const drawZonePolygon = (map, maps) => {
    var zoneArea = new maps.Polygon({
      paths: location.coords,
      strokeColor: zoneAreaColor,
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: zoneAreaColor,
      fillOpacity: 0.2,
    });
    zoneArea.setMap(map);
  };

  return (
    <Wrapper>
      <GoogleMapReact
        defaultCenter={location.center}
        defaultZoom={defaultProps.zoom}
        yesIWantToUseGoogleMapApiInternals={true}
        onGoogleApiLoaded={({ map, maps }) => drawZonePolygon(map, maps)}
      >
        {parkingSpacesLocation.map((p, index) => (
          <ParkingSpaceMarker
            key={index}
            lat={p.lat}
            lng={p.lng}
            isTaken={p.isTaken}
            text={p.parkingSpaceNumber}
          />
        ))}
      </GoogleMapReact>
    </Wrapper>
  );
};

export default GoogleMaps;

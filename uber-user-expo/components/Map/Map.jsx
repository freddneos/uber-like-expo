import MapView, { Marker, Polygon } from "react-native-maps";
import * as S from "./styled.js";

const Map = ({ position, onRegionChange, polygonCoordinates }) => (
  <S.Map
    initialRegion={position}
    region={position}
    onRegionChangeComplete={onRegionChange}
  >
    {polygonCoordinates.map((polygonCoordinate, index) => {
      return (
        <Polygon
          key={index}
          coordinates={polygonCoordinate.polygonCoordinates}
          fillColor="rgba(0, 200, 0, 0.5)"
        />
      );
    })}

    <Marker coordinate={position} tracksViewChanges={true} />
  </S.Map>
);

export default Map;

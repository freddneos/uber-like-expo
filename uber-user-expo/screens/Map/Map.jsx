import React, { useEffect, useState } from "react";
import { Alert } from "react-native";
import * as Location from "expo-location";
import * as turf from "@turf/turf";
import Map from "../../components/Map/Map";
import { fetchPolygonData } from "../../services/MapCoverageAreas";
import * as S from "./styled.js";
import ConfirmButton from "./components/Button";
import BackButton from "../../components/BackButton/BackButton";

export default function App() {
  const [position, setPosition] = useState({
    latitude: 0,
    longitude: 0,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  const [polygonCoordinates, setPolygonCoordinates] = useState([]);
  const [isMarkerInsidePolygon, setIsMarkerInsidePolygon] = useState(false);

  const onRegionChange = (newRegion) => {
    setPosition(newRegion);

    const point = turf.point([newRegion.longitude, newRegion.latitude]);

    const insideAnyPolygon = polygonCoordinates.some((polygon) => {
      const polyCoords = polygon.polygonCoordinates.map((coord) => [
        coord.longitude,
        coord.latitude,
      ]);
      const poly = turf.polygon([polyCoords]);
      return turf.booleanPointInPolygon(point, poly);
    });

    setIsMarkerInsidePolygon(insideAnyPolygon);
  };

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        Alert.alert("Permission to access location was denied");
        return;
      }
      let location = await Location.getCurrentPositionAsync({});
      setPosition({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      });

      // Fetch polygon data
      const data = await fetchPolygonData();
      setPolygonCoordinates(data);
    })();
  }, []);

  return (
    <S.Container>
      <Map
        position={position}
        onRegionChange={onRegionChange}
        polygonCoordinates={polygonCoordinates}
      />
      <BackButton />
      <ConfirmButton isMarkerInsidePolygon={isMarkerInsidePolygon} />
    </S.Container>
  );
}

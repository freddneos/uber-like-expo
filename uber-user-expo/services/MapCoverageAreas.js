const fetchPolygonData = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          name: "Porto - Matosinhos - Zona 1",
          polygonCoordinates: [
            { latitude: 41.1640787, longitude: -8.6852241 },
            { latitude: 41.1640787, longitude: -8.6852241 },
            { latitude: 41.14928, longitude: -8.6735457 },
            { latitude: 41.1485691, longitude: -8.6435769 },
            { latitude: 41.1607186, longitude: -8.6528509 },
            { latitude: 41.1667925, longitude: -8.646153 },
            { latitude: 41.174158, longitude: -8.6683076 },
            { latitude: 41.1640141, longitude: -8.6852241 },
            { latitude: 41.1640787, longitude: -8.6852241 },
          ],
        },
        {
          name: "Porto - Porto - Zona 2",
          polygonCoordinates: [
            { latitude: 41.1585803, longitude: -8.643184 },
            { latitude: 41.1503729, longitude: -8.6390622 },
            { latitude: 41.144556, longitude: -8.6212011 },
            { latitude: 41.1547029, longitude: -8.6181098 },
            { latitude: 41.1623929, longitude: -8.6309045 },
            { latitude: 41.1586449, longitude: -8.6429264 },
            { latitude: 41.1585803, longitude: -8.643184 },
          ],
        },
      ]);
    }, 1000);
  });
};

export { fetchPolygonData };

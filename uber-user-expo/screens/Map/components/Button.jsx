import * as S from "./styled.js";

const ConfirmButton = ({ isMarkerInsidePolygon, onPress }) => (
  <S.Button disabled={!isMarkerInsidePolygon} onPress={onPress}>
    <S.ButtonText>
      {isMarkerInsidePolygon ? "Confirm location" : "Out of range 😢"}
    </S.ButtonText>
  </S.Button>
);

export default ConfirmButton;

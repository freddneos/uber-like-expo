import * as S from "./styled.js";

const ConfirmButton = ({ isMarkerInsidePolygon }) => (
  <S.ServiceContainer>
    <S.Button disabled={!isMarkerInsidePolygon}>
      <S.ButtonText>
        {isMarkerInsidePolygon ? "Confirm location" : "Out of range 😢"}
      </S.ButtonText>
    </S.Button>
  </S.ServiceContainer>
);

export default ConfirmButton;

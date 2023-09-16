import { styled } from "styled-components/native";

const Button = styled.TouchableOpacity`
  position: absolute;
  bottom: 20px;
  width: 80%;
  background-color: ${(props) => (props.disabled ? "#9b51e090" : "#9b51e0")};
  border-radius: 30px;
  padding: 15px;
`;

const ButtonText = styled.Text`
  color: white;
  text-align: center;
  font-size: 20px;
  font-family: Avenir;
  font-weight: bold;
`;

export { Button, ButtonText };

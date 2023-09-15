import { styled } from "styled-components/native";
const ServiceContainer = styled.View`
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 50px;
  width: 80%;
  height: 30%;
  background-color: white;
  border-radius: 30px;
  padding: 15px;
`;

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

export { ServiceContainer, Button, ButtonText };

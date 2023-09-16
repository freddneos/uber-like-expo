import { styled } from "styled-components/native";

const Container = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;
const ServiceContainer = styled.View`
  justify-content: flex-start;
  align-items: center;
  position: absolute;
  bottom: 100px;
  width: 80%;
  height: 30%;
  background-color: white;
  border-radius: 30px;
  padding: 35px;
`;

export { ServiceContainer, Container };

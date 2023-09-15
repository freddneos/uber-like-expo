import { useNavigation } from "@react-navigation/native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import * as S from "./styled.js";

const BackButton = () => {
  const navigation = useNavigation();

  const handleBackButton = () => {
    navigation.navigate("Home");
  };
  return (
    <S.Container onPress={handleBackButton}>
      <FontAwesome
        name="angle-left"
        color={"#9b51e0"}
        borderRadius={50}
        size={30}
      />
    </S.Container>
  );
};

export default BackButton;

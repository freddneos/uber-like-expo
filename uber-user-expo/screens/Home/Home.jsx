import { Text, SafeAreaView, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      {/* <Text>Home</Text> */}
      <TouchableOpacity
        style={{
          padding: 20,
          backgroundColor: "#9b51e0",
          borderRadius: "50%",
        }}
        onPress={() => navigation.navigate("Map")}
      >
        <Text
          style={{
            color: "white",
            fontFamily: "Avenir",
            fontWeight: "bold",
            fontSize: "20px",
          }}
        >
          Go to Map
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Home;

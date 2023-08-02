import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, View, Pressable, Button } from "react-native";
import { Box, Center, Input, VStack } from "native-base";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../App";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { add } from "../features/comments/commentsSlice";
const PlaceholderImage = require("../assets/background-image.png");
type Props = NativeStackScreenProps<RootStackParamList, "Home">;
function Home({ navigation }: Props) {
  const [text, setText] = useState<string>();
  const dispatch = useDispatch();
  const handleAddComment = () => {
    if (text) {
      dispatch(add(text));
      setText(undefined);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={PlaceholderImage} style={styles.image} />
      </View>
      <View style={styles.ctaContainer}>
        <VStack space={2}>
          <Box
            alignItems={"center"}
            flex={1}
            flexDirection={"column"}
            style={styles.box}
          >
            <Input
              mx="3"
              placeholder="Input"
              type="text"
              w="100%"
              style={styles.input}
              value={text}
              placeholderTextColor={"#fff"}
              onChangeText={setText}
            />
            <Button onPress={handleAddComment} title="Add comment" />
          </Box>
        </VStack>
        <View style={styles.buttonContainer}>
          <Button
            title="Go to Details"
            onPress={() =>
              navigation.navigate("Details", { id: 22, name: "John" })
            }
          />
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
  },
  box: {
    gap: 16,
  },
  imageContainer: {
    flex: 0.5,
    flexDirection: "column",
    paddingTop: 58,
  },
  ctaContainer: {
    flex: 0.3,
    flexDirection: "column",
    paddingTop: 58,
  },
  input: {
    color: "red",
  },
  image: {
    width: 320,
    height: 250,
    borderRadius: 18,
  },
  buttonContainer: {
    width: 320,
    height: 68,
    marginHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
    padding: 3,
  },
  button: {
    borderRadius: 10,

    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  buttonIcon: {
    paddingRight: 8,
  },
  buttonLabel: {
    textShadowColor: "blue",
    textShadowOffset: { width: 5, height: 5 },
    color: "#fff",
    fontSize: 16,
  },
});

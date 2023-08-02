import { Image, StyleSheet, Text, View, Pressable, Button } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "./NavigationComponent";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { HStack } from "native-base";
import Comments from "./Comments";
type Props = NativeStackScreenProps<RootStackParamList, "Details">;
function DetailsScreen({ navigation, route }: Props) {
  const comments = useSelector((state: RootState) => state.comments.comments);
  const { id, name } = route.params;
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "space-around",
      }}
    >
      <Text>
        Details Screen for {id} {name}
      </Text>
      <HStack space={2}>
        <Button
          title="Details with params"
          onPress={() =>
            navigation.setParams({
              id: Math.floor(Math.random() * 100),
              name: "Pepe" + Math.floor(Math.random() * 100),
            })
          }
        />
        <Button title="Go back" onPress={() => navigation.goBack()} />
        <Button title="first in stack" onPress={() => navigation.popToTop()} />
      </HStack>
      <Comments comments={comments} />
    </View>
  );
}

export default DetailsScreen;

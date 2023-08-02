import { Container, HStack, VStack, Text } from "native-base";
//import { Text } from "react-native";
import { FunctionComponent } from "react";

type Props = {
  comments: { id: number; text: string }[];
};
const Comments: FunctionComponent<Props> = ({ comments }) => {
  return (
    <VStack space={2}>
      <Text bold fontSize={"lg"}>
        Comments:
      </Text>
      {comments.map((c) => (
        <Container
          key={c.id}
          bg={"light.200"}
          padding={5}
          borderRadius={3}
          borderBottomColor={"#fff"}
        >
          <Text>{c.text}</Text>
        </Container>
      ))}
    </VStack>
  );
};

export default Comments;

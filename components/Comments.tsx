import { HStack, VStack, View } from "native-base";
import { Text } from "react-native";
import { FunctionComponent } from "react";

type Props = {
  comments: { id: number; text: string }[];
};
const Comments: FunctionComponent<Props> = ({ comments }) => {
  console.log("DDD", comments);
  return (
    <VStack>
      <Text>COMMENTS:</Text>
      <Text>{comments[0].text}</Text>
      {comments.map((c) => {
        <Text>{c.text}</Text>;
      })}
    </VStack>
  );
};

export default Comments;

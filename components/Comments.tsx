import { Container, VStack, Text, Icon, IconButton } from "native-base";
import { FunctionComponent } from "react";
import { Entypo } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { remove } from "../features/comments/commentsSlice";
type Props = {
  comments: { id: number; text: string }[];
};
const Comments: FunctionComponent<Props> = ({ comments }) => {
  const dispatch = useDispatch();

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
          <IconButton
            icon={<Icon as={Entypo} name="trash" />}
            onPress={() => dispatch(remove(c.id))}
            borderRadius="full"
            _icon={{
              color: "orange.500",
              size: "md",
            }}
            _hover={{
              bg: "orange.600:alpha.20",
            }}
            _pressed={{
              bg: "orange.600:alpha.20",
              _icon: {
                name: "emoji-flirt",
              },
              _ios: {
                _icon: {
                  size: "2xl",
                },
              },
            }}
            _ios={{
              _icon: {
                size: "2xl",
              },
            }}
          />
        </Container>
      ))}
    </VStack>
  );
};

export default Comments;

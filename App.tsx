import { NavigationContainer } from "@react-navigation/native";
import Home from "./components/Home";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DetailsScreen from "./components/Details";
import { NativeBaseProvider, Box } from "native-base";
import { Provider } from "react-redux";
import { store } from "./store";

const Stack = createNativeStackNavigator<RootStackParamList>();

export type RootStackParamList = {
  Home: undefined;
  Details: { id: number; name: string };
};

export default function App() {
  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
              name="Details"
              component={DetailsScreen}
              options={{
                headerStyle: {
                  backgroundColor: "#f4511e",
                },
                headerTintColor: "#fff",
                headerTitleStyle: {
                  fontWeight: "bold",
                },
              }}
            />
            <Stack.Screen name="Home" component={Home} />
          </Stack.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
    </Provider>
  );
}

import { Provider } from "react-redux";
import { store } from "./store";
import NavigationComponent from "./components/NavigationComponent";

export default function App() {
  return (
    <Provider store={store}>
      <NavigationComponent />
    </Provider>
  );
}

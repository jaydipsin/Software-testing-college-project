import { routes } from "./router/route";
import { useRoutes } from "react-router-dom";
import "./firebase"

function App() {
  const element = useRoutes(routes);
  return element;
}

export default App;

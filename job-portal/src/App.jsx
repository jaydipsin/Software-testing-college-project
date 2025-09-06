import { routes } from "./router/route";
import { useRoutes } from "react-router-dom";
function App() {
  const element = useRoutes(routes);
  return element;
}

export default App;

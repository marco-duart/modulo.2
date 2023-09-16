import { CardContextProvider } from "./data/contexts/CardContext";
import Login from "./pages/login";
import Router from "./router";

function App() {
  return (
    <>
      <CardContextProvider>
        <Router />
      </CardContextProvider>
    </>
  );
}

export default App;

import { CardContextProvider } from "./data/contexts/CardContext";
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

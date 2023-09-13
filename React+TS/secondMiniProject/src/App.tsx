import { CardContextProvider } from "./data/contexts/CardContext";
import Home from "./pages/home";

function App() {
  return (
    <>
      <CardContextProvider>
        <Home />
      </CardContextProvider>
    </>
  );
}

export default App;

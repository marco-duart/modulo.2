import { useState } from "react";
import News from "../News";
import Details from "../Details";
import { MainStyle } from "./styles";
import data from "../../assets/data.json";

type Navigation = "LIST" | "DETAILS";

const Main = () => {
  const [page, setPage] = useState<Navigation>("LIST");
  const [currentNews, setCurrentNews] = useState<number>(0);

  return (
    <MainStyle>
      {page === "LIST" && <News data={data} setPage={setPage} setCurrentNews={setCurrentNews} />}
      {page === "DETAILS" && (
        <Details data={data} currentNews={currentNews} setPage={setPage} />
      )}
    </MainStyle>
  );
};

export default Main;

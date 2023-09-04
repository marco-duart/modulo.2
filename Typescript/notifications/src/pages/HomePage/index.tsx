import AlertApp from "../../components/AlertApp";
import { useState } from "react";
import {
  MainStyle,
  MainButtonsDivStyle,
  MainSuccessButtonStyle,
  MainInfoButtonStyle,
  MainWarningButtonStyle,
  MainErrorButtonStyle,
  MainAlertDivStyle,
} from "./styles";

type Variant = "success" | "info" | "warning" | "error";
type Text = "Deu certo!" | "Tenho observações sobre." | "Toma cuidado viu!" | "Socorroooooooooooo!"

const HomePage = () => {
  const [alertStyle, setAlertStyle] = useState<Variant>("success");
  const [text, setText] = useState<Text>('Deu certo!')

  const changeAlert = (alertType:Variant, text:Text) => {
    setAlertStyle(alertType)
    setText(text)
  }

  return (
    <MainStyle>
      <MainButtonsDivStyle>
        <MainSuccessButtonStyle onClick={() => changeAlert("success", "Deu certo!")}>Success</MainSuccessButtonStyle>
        <MainInfoButtonStyle onClick={() => changeAlert("info", "Tenho observações sobre.")}>Info</MainInfoButtonStyle>
        <MainWarningButtonStyle onClick={() => changeAlert("warning", "Toma cuidado viu!")}>Warning</MainWarningButtonStyle>
        <MainErrorButtonStyle onClick={() => changeAlert("error", "Socorroooooooooooo!")}>Error</MainErrorButtonStyle>
      </MainButtonsDivStyle>
      <MainAlertDivStyle>
        <AlertApp variant={alertStyle} text={text} />
      </MainAlertDivStyle>
    </MainStyle>
  );
};

export default HomePage;

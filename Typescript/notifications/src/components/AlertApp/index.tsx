

type Variant = "success" | "info" | "warning" | "error"
type Text = "Deu certo!" | "Tenho observações sobre." | "Toma cuidado viu!" | "Socorroooooooooooo!"

const successStyle = {
  width: "100%",
  height: "100%",
  display: "grid",
  placeItems: "center",
  padding: "10px",
  borderRadius: "10px",
  backgroundColor: "#4caf50",
}

const infoStyle = {
  width: "100%",
  height: "100%",
  display: "grid",
  placeItems: "center",
  padding: "10px",
  borderRadius: "10px",
  backgroundColor: "#2196f3",
}

const warningStyle = {
  width: "100%",
  height: "100%",
  display: "grid",
  placeItems: "center",
  padding: "10px",
  borderRadius: "10px",
  backgroundColor: "#ff9800",
}

const errorStyle = {
  width: "100%",
  height: "100%",
  display: "grid",
  placeItems: "center",
  padding: "10px",
  borderRadius: "10px",
  backgroundColor: "#f44336",
}

type Props = {
  variant: Variant
  text: Text
}

const AlertApp = (props: Props) => {

  const getStyle = (variant: Variant) => {
    if (variant === "success") {
      return successStyle;
    }
    if (variant === "info") {
      return infoStyle;
    }
    if (variant === "warning") {
      return warningStyle;
    }
    if (variant === "error") {
      return errorStyle;
    }
    return {}
  }

  return (
    <div style={getStyle(props.variant)}><h1 style={{fontSize: "32px", color: "white"}}>{props.text}</h1></div>
  )
}

export default AlertApp;
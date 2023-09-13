/* import { useContext } from "react";
import { CardContext } from "../../../data/contexts/CardContext"; */
import { ColumnStyle } from "../../styles/Column";
import { CardStyle } from "../../styles/Card";

const NewColumn = () => {
  return (
    <ColumnStyle>
      <div>NEW</div>
      <CardStyle>
        <input type="text" />
        <textarea name="" id="" /* cols="30" rows="10" */></textarea>
      </CardStyle>
    </ColumnStyle>
  );
};

export default NewColumn;

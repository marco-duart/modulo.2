import {
  DetailsContainerStyle,
  DetailsContentDivStyle,
  DetailsImageStyle,
  DetailsTitleStyle,
  DetailsContentStyle,
  DetailsImageDivStyle,
  DetailsButtonStyle,
} from "./styles";

type Navigation = "LIST" | "DETAILS";

type DataItem = {
  id: number;
  title: string;
  author: string;
  image: string;
  text: string;
}[];

type Props = {
  data: DataItem;
  currentNews: number;
  setPage: React.Dispatch<React.SetStateAction<Navigation>>;
};

const Details = (props: Props) => {
  const dataItem = props.data[props.currentNews];

  return (
    <DetailsContainerStyle>
      <DetailsContentDivStyle>
        <DetailsTitleStyle>{dataItem.title}</DetailsTitleStyle>
      </DetailsContentDivStyle>
      <DetailsContentDivStyle>
        <DetailsContentStyle>{dataItem.author}</DetailsContentStyle>
      </DetailsContentDivStyle>
      <DetailsImageDivStyle>
        <DetailsImageStyle src={dataItem.image} alt="" />
      </DetailsImageDivStyle>
      <DetailsContentDivStyle>
        <DetailsContentStyle>{dataItem.text}</DetailsContentStyle>
      </DetailsContentDivStyle>
      <DetailsContentDivStyle>
        <DetailsButtonStyle onClick={() => props.setPage('LIST')}>Voltar</DetailsButtonStyle>
      </DetailsContentDivStyle>
    </DetailsContainerStyle>
  );
};

export default Details;

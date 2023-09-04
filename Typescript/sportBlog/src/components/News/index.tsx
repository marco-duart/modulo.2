import {
  NewsContainerStyle,
  NewsImageStyle,
  NewsContentDivStyle,
  NewsTitleStyle,
  NewsContentStyle,
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
  setCurrentNews: React.Dispatch<React.SetStateAction<number>>;
  setPage: React.Dispatch<React.SetStateAction<Navigation>>;
};

const News = (props: Props) => {
  const { data } = props;

  const seeDetails = (id: number) => {
    props.setCurrentNews(id)
    props.setPage('DETAILS')
  }

  return data.map((dataItem) => (
    <NewsContainerStyle key={dataItem.id}>
      <div>
        <NewsImageStyle src={dataItem.image} alt="" />
      </div>
      <NewsContentDivStyle>
        <NewsTitleStyle onClick={() => seeDetails(dataItem.id)}>{dataItem.title}</NewsTitleStyle>
        <NewsContentStyle>{dataItem.text}</NewsContentStyle>
      </NewsContentDivStyle>
    </NewsContainerStyle>
  ));
};

export default News;

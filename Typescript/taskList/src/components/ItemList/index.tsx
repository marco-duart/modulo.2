import Item from "../Item";

type Task = {
  type: "tarefa";
  title: string;
};
type Event = {
  type: "evento";
  title: string;
  date: string;
};
type Reminder = {
  type: "lembrete";
  title: string;
  time: string;
};
type ItemType = Task | Event | Reminder;

type Props = {
  items: ItemType[];
};

const ItemList = (props: Props) => {
  const { items } = props;
  return (
    <div>
      {items.map((item, index) => (
        <Item key={index} item={item} />
      ))}
    </div>
  );
};

export default ItemList;

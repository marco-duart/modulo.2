import { TaskItem, EventItem, ReminderItem } from "./styles";

type Task = {
  type: "tarefa";
  title: string;
}
type Event = {
  type: "evento";
  title: string;
  date: string;
}
type Reminder = {
  type: "lembrete";
  title: string;
  time: string;
}
type ItemType = Task | Event | Reminder;

type Props = {
  item: ItemType;
}

const Item = (props: Props) => {
  const { item } = props;
  if (item.type === "tarefa") {
    return <TaskItem>Tarefa: {item.title}</TaskItem>;
  } else if (item.type === "evento") {
    return (
      <EventItem>
        Evento: {item.title} - Data: {item.date}
      </EventItem>
    );
  } else if (item.type === "lembrete") {
    return (
      <ReminderItem>
        Lembrete: {item.title} - Hora: {item.time}
      </ReminderItem>
    );
  }
};

export default Item;

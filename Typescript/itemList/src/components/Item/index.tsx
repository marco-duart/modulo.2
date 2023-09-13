import { TaskBox, EventBox, ReminderBox } from "./style";

const Item = (props: Props) => {
  const { schedule } = props;
  return (
    <>
      {schedule.map((item: ScheduleType) => {
        if (item.type === "Task") {
          const { description } = item as TaskType;
          return (
            <TaskBox>
              <h3>Tarefa</h3>
              <p>{description}</p>
            </TaskBox>
          );
        }
        if (item.type === "Event") {
          const { title } = item as EventType;
          return (
            <EventBox>
              <h3>Evento</h3>
              <p>{title}</p>
            </EventBox>
          );
        }
        if (item.type === "Reminder") {
          const { text } = item as ReminderType;
          return (
            <ReminderBox>
              <h3>Lembrete</h3>
              <p>{text}</p>
            </ReminderBox>
          );
        }
      })}
    </>
  );
};

export default Item;

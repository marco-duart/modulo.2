type TaskType = {
  id: number;
  description: string;
  completed: boolean;
  type: "Task"
};

type EventType = {
  id: number;
  title: string;
  date: string;
  place: string;
  type: "Event"
};

type ReminderType = {
  id: number;
  text: string;
  date: string;
  type: "Reminder"
};

type ScheduleType = TaskType | EventType | ReminderType

type Props = {
  schedule: ScheduleType[]
}
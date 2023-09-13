import Notification from '../Notification';

type NotificationItem = {
  type: 'error' | 'warning' | 'info';
  message: string;
}

interface Props {
  notifications: NotificationItem[];
}

const NotificationBox = (props: Props) => {
  const { notifications } = props
  return (
    <div>
      {notifications.map((notification, index) => (
        <Notification key={index} type={notification.type} message={notification.message} />
      ))}
    </div>
  );
};

export default NotificationBox;

import styled, { css } from 'styled-components';

const notificationStyles = {
  error: css`
    background-color: #ffcccc;
    border: 1px solid #ff6666;
  `,
  warning: css`
    background-color: #ffeecc;
    border: 1px solid #ffcc66;
  `,
  info: css`
    background-color: #e6f7ff;
    border: 1px solid #66a3ff;
  `,
};

type NotificationType = 'error' | 'warning' | 'info';

type Props = {
  type: NotificationType;
  message: string;
}

// Componente de notificação estilizada
const StyledNotification = styled.div<{ type: NotificationType }>`
  padding: 10px;
  margin: 10px;
  border-radius: 4px;
  ${({ type }) => notificationStyles[type]};
`;

const Notification = (props: Props) => {
  const { type, message } = props
  return <StyledNotification type={type}>{message}</StyledNotification>;
};

export default Notification;
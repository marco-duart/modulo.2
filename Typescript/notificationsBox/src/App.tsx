import NotificationBox from './components/NotificationBox';

type NotificationItem = {
  type: 'error' | 'warning' | 'info';
  message: string;
}

const App = () => {
  const notifications = [
    { type: 'error', message: 'Erro: Algo deu errado!' },
    { type: 'warning', message: 'Aviso: Isso é um aviso.' },
    { type: 'info', message: 'Informação: Isso é uma informação.' },
  ] as NotificationItem[];

  return (
    <div>
      <h1>Caixa de Notificações</h1>
      <NotificationBox notifications={notifications} />
    </div>
  );
};

export default App;
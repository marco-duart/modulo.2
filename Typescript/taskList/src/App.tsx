import ItemList from "./components/ItemList"

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

const items: ItemType[] = [
  { type: 'tarefa', title: 'Fazer compras' },
  { type: 'evento', title: 'Aniversário', date: '2023-09-01' },
  { type: 'lembrete', title: 'Reunião', time: '15:00' },
  { type: 'tarefa', title: 'Estudar para o exame' },
  { type: 'evento', title: 'Concerto', date: '2023-09-15' },
  { type: 'lembrete', title: 'Enviar relatório', time: '10:30' },
  { type: 'tarefa', title: 'Limpar o apartamento' },
  { type: 'evento', title: 'Casamento', date: '2023-10-05' },
  { type: 'lembrete', title: 'Comprar presente', time: '09:00' },
  { type: 'tarefa', title: 'Fazer exercícios' },
  { type: 'evento', title: 'Palestra', date: '2023-09-20' },
  { type: 'lembrete', title: 'Medicamento', time: '18:00' },
  { type: 'tarefa', title: 'Preparar o jantar' },
  { type: 'evento', title: 'Aniversário de casamento', date: '2023-11-08' },
  { type: 'lembrete', title: 'Retirar encomenda', time: '14:30' },
];

function App() {

  return (
    <>
      <ItemList items={items} />
    </>
  )
}

export default App

import SortItems from '../../components/SortItems';
import items from '../../assets/items.json'

const HomePage = () => {

  return (
    <div>
      <h1>Lista Ordenável</h1>
      <SortItems items={items} />
    </div>
  );
};

export default HomePage;
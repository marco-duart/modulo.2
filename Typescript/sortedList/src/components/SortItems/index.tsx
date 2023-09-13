import { useState } from 'react';

type Sorting = 'asc' | 'desc';

type ListItem = {
  id: number;
  name: string;
};

type Props = {
  items: ListItem[];
};

const SortableList = (props: Props) => {
  const [sorting, setSorting] = useState<Sorting>('asc');
  const [sortBy, setSortBy] = useState<'id' | 'name'>('id');

  const sortedItems = [...props.items].sort((a, b) => {
    if (sortBy === 'id') {
      return sorting === 'asc' ? a.id - b.id : b.id - a.id;
    } else {
      return sorting === 'asc'
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name);
    }
  });

  const toggleSorting = () => {
    setSorting(sorting === 'asc' ? 'desc' : 'asc');
  };

  const handleSortByChange = (value: 'id' | 'name') => {
    setSortBy(value);
  };

  return (
    <div>
      <div>
        <button onClick={toggleSorting}>Alterar Ordem</button>
        <button onClick={() => handleSortByChange('id')}>Ordenar por ID</button>
        <button onClick={() => handleSortByChange('name')}>Ordenar por Nome</button>
      </div>
      <ul>
        {sortedItems.map((item) => (
          <li key={item.id}>
            <div>{item.id}</div>
            <div>{item.name}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SortableList;
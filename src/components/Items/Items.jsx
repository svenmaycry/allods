import { Item } from '../Item/Item';
import items from '../../assets/mock.json';

export const Items = () => {
  return (
    <div className="main-content__items">
      {items.map((value) => (
        <Item
          key={value.id}
          title={value.title}
          imagePath={value.imagePath}
          count={value.count}
          days={value.days}
        />
      ))}
    </div>
  );
};

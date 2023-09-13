import { useContext, useState } from "react";
import { CartContext } from "../../contexts/CartProvider";

type Props = {
  products: IProducts[];
};

const ProductList = (props: Props) => {
  const { cart } = useContext<ICartContext>(CartContext);

  return (
    <div>
      <div>
        <h1>Produtos</h1>
      </div>
      <div>
        {props.products.map((game) => (
          <div key={game.id}>
            <img src={game.image} alt={game.name} />
            <div>
              <strong>Valor: R${game.value.toFixed(2)}</strong>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;

/* 
Exercício 4: Gere um projeto Typescript/React utilizando o Vite. No seu app.tsx, crie um tipo chamado UserData. 
Este tipo deverá conter nome, idade e gênero. 
Crie um estado que seja deste tipo (lembre-se dos genéricos) e faça um formulário para preencher este estado.
*/
import { useState } from "react";

type UserData = {
  nome: string;
  idade: number;
  genero: string;
};

const UserDataForm = () => {
    const [data, setData] = useState<UserData>({
        nome: "",
        idade: 0,
        genero: "",
      });
  return (
    <div>
      <div>
        <label htmlFor="">Nome:</label>
        <input type="text" value={data.nome} onChange={(event) => setData({ ...data, nome: event.target.value })}/>
      </div>
      <div>
        <label htmlFor="">Idade:</label>
        <input type="text" value={data.idade} onChange={(event) => setData({ ...data, idade: Number(event.target.value) })}/>
      </div>
      <div>
        <label htmlFor="">Gênero</label>
        <input type="text" value={data.genero} onChange={(event) => setData({ ...data, genero: event.target.value })}/>
      </div>
      <div>Nome: {data.nome}, idade: {data.idade}, gênero: {data.genero}</div>
      <div>
        <button>Enviar</button>
      </div>
    </div>
  );
};

export default UserDataForm
/* Exercício 1:  Considere a seguinte interface representando um usuário:

interface User {
  id: number;
  name: string;
  age: number;
  email: string;
}
Crie um novo tipo UserWithoutEmail utilizando Omit para remover a propriedade email da interface User.
 */

interface User {
    id: number;
    name: string;
    age: number;
    email: string;
}

type UserWithoutEmail = Omit<User, 'email'>
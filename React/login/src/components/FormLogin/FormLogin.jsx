const FormLogin = () => {
    return(
        <form action="">
        <h2>Digite seus dados para logar no sistema</h2>
        <div>
          <label htmlFor="">E-mail</label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="">Senha</label>
          <input type="password" />
        </div>
        <div>
          <button>Logar</button>
        </div>
      </form>
    )
}

export default FormLogin
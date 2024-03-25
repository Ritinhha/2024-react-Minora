import "./App.css";


// Tipagem necessaria em tsx, any = var(qualquer)
// MeuBotao vira uma tag
const MeuBotao = (props: any) => {
  // props indica acesso as propriedas
  return (
    // O que a tag MeuBotao vai inserir na tela
    //titulo é a propriedade em si
    <button> {props.titulo}</button>
  );
}


const App = () => {




  return (
    //uma tag pai é obrigatoria, nesse caso é o div, todo tqm que ser feito dentro dele
    //className é parte da sintxe do jsx
    <div className="aplicacao">
      <h1>Infoweb  </h1>


   
      <button>eu sou um botão html</button>
     
      <br />
      <ul>
        <li>{tarefas}</li>
      </ul>
      <br />
      <ul>
       <li>
          <input type="checkbox" />
          Tarefa
       </li>
      </ul>


    </div>
  );
}


//jsx = React
export default App
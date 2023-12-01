import FormUncontrolled from './FormUncontrolled';


import './App.css';
import FormControlled from './FormControlled';

function App() {


  return (
    <>
      <h2>Formularios en React</h2>

      <h3>Formulario no controlado</h3>
      <p>accedemos a los valores de los campos del formulario directamente a través del atributo name, sin requerir useRef</p>
      <FormUncontrolled />
      <br />
      <hr />
      <br />
      <h3>Formulario controlado</h3>
      <p>accedemos a los valores de los campos del formulario a través de variables de estado. Ahora, React "controla" el componente</p>
      <FormControlled />
    </>
  );
}

export default App;

import { Button, Form } from "react-bootstrap";
import { useState, useEffect } from "react";
//import Form from 'react-bootstrap/Form';
import ListaTareas from "./ListaTareas";

const FormularioTareas = () => {
  const [tarea, setTarea] = useState('');
  const tareasLocalStorage = JSON.parse(localStorage.getItem('listaTareas')) || []
   const [tareas, setTareas] = useState(tareasLocalStorage);

useEffect (()=> {
  console.log("gola");
  localStorage.setItem('listaTareas', JSON.stringify(tareas));
  },[tareas])

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('desde el submit');
    setTareas([...tareas, tarea])
    //limpiar el formulario, como tiene pocos elementos uso un string vacio
    //sino deberia usar el reset del formulario
    setTarea("");
    
  };
const borrarTarea = (nombreTarea)=>{
    const copiaTareas= tareas.filter((tarea)=> tarea !== nombreTarea);
    setTareas(copiaTareas);

}


  return (
    <section>
      <Form onSubmit={handleSubmit}>
        <Form.Group
          className="mb-3 d-flex"
          controlId="exampleForm.ControlInput1"
        >
          <Form.Label className="labelTarea">Ingresa tus Tareas:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: Tarea1"
            minLength={3}
            maxLength={50}
            onChange={(e) => setTarea(e.target.value)}
            value={tarea}
          />
          <Button className="mx-3" type="submit" variant="success">
            Enviar
          </Button>
        </Form.Group>
      </Form>
      <ListaTareas tareas={tareas} borrarTarea={borrarTarea}></ListaTareas>
    </section>
  );
};

export default FormularioTareas;

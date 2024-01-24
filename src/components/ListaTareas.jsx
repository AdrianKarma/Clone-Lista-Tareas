import ListGroup from 'react-bootstrap/ListGroup';
import ItemTarea from './ItemTarea';


const ListaTareas = (props) => {
    return (
        <ListGroup>
            {
                props.tareas.map((elementoTarea, posicionTarea)=><ItemTarea key={posicionTarea} nombreTarea={elementoTarea} borrarTarea={props.borrarTarea} ></ItemTarea>)
            
            }
            
      </ListGroup>
    );
};

export default ListaTareas;
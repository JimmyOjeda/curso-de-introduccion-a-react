import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoForm.css'

function TodoForm() {

    const [newTodoValue, setNewTodoValue] = React.useState('');

    const {
        addTodo,
        setOpenModal,
    } = React.useContext(TodoContext);

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    };

    const onCancel = () => {
        setOpenModal(false);
    };
    
    const onAdd = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    };

  return (
    <form onSubmit={onAdd}>
        <label>Agregar nuevo ToDo</label>
        <textarea
            value={newTodoValue}
            onChange={onChange}
            placeholder='Introduce el nuevo ToDo'
        />
        <div className="TodoForm-buttonContainer">
            <button
                type="button"
                className="TodoForm-button TodoForm-button-cancel"
                onClick = {onCancel}
            >
                Cancelar
            </button>

            <button
                className="TodoForm-button TodoForm-button-add"
                type= "submit"
            >
                Agregar
            </button>
        </div>
    </form>
  );
};

export { TodoForm };

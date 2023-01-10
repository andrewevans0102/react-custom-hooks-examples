import { useState } from 'react';
import { TextInput } from '../models/input';

const ToDoListUseState = () => {
    const [todoInput, setTodoInput] = useState('');
    const [todos, setTodos] = useState<TextInput[]>([]);

    const handleTodoChange = (event: any) => {
        setTodoInput(event?.target.value);
        console.log(
            `todo input was updated successfully to be ${event?.target.value}`
        );
    };

    const addTodo = (newTodo: string) => {
        const localTodos: TextInput[] = todos;
        localTodos.push({ text: newTodo });
        // set value
        // use spread syntax to trigger re render
        setTodos([...localTodos]);
        console.log(
            `todo array was updated to be ${JSON.stringify(localTodos)}`
        );

        // clear input field
        setTodoInput('');
        console.log('todo input was cleared');
    };

    return (
        <section style={{ border: 'solid orange 5px' }}>
            <h2>To Do List with UseState</h2>
            <input type="text" onChange={handleTodoChange} value={todoInput} />
            <div>
                <button
                    onClick={() => {
                        addTodo(todoInput);
                    }}
                >
                    Create
                </button>
            </div>
            <ul>
                {todos &&
                    todos.map((value: TextInput, index: number) => {
                        return <li key={index}>{value.text}</li>;
                    })}
            </ul>
        </section>
    );
};

export default ToDoListUseState;

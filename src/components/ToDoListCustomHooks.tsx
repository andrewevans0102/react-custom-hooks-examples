import { useState } from 'react';
import useList from '../hooks/useList';
import { TextInput } from '../models/input';

const ToDoListCustomHooks = () => {
    const [listInput, setListInput] = useState('');
    const [list, setList] = useState<TextInput[]>([]);

    const listHook = useList(setListInput, setList);

    return (
        <section style={{ border: 'solid green 5px' }}>
            <h2>To-Do list with Custom Hooks</h2>
            <input
                type="text"
                onChange={listHook.handleInputChange}
                value={listInput}
            />
            <div>
                <button
                    onClick={() => {
                        listHook.addInput(listInput, list);
                    }}
                >
                    Create
                </button>
            </div>
            <ul>
                {list &&
                    list.map((value: TextInput, index: number) => {
                        return <li key={index}>{value.text}</li>;
                    })}
            </ul>
        </section>
    );
};

export default ToDoListCustomHooks;

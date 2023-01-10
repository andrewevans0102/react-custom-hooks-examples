import useList from '../hooks/useList';
import useLocalStorage from '../hooks/useLocalStorage';
import { TextInput } from '../models/input';

const AdvancedToDoList = () => {
    // instead of useState, save the values in local storage
    const [listInput, setListInput] = useLocalStorage<string>('input', '');
    const [list, setList] = useLocalStorage<TextInput[]>('list', []);

    const listHook = useList(setListInput, setList);

    return (
        <section style={{ border: 'solid blue 5px' }}>
            <h2>Advanced To-Do List</h2>
            <input
                type="text"
                onChange={listHook.handleInputChange}
                value={listInput}
            />
            <div>
                <button
                    style={{ backgroundColor: 'green', margin: '10px' }}
                    onClick={() => {
                        listHook.addInput(listInput, list);
                    }}
                >
                    Create
                </button>
                <button
                    style={{ backgroundColor: 'red' }}
                    onClick={() => {
                        setListInput('');
                        setList([]);
                    }}
                >
                    Clear
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

export default AdvancedToDoList;

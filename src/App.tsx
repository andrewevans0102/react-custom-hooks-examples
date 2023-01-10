import './App.css';
import AdvancedToDoList from './components/AdvancedToDoList';
import ToDoListUseState from './components/ToDoListUseState';
import ToDoListCustomHooks from './components/ToDoListCustomHooks';

function App() {
    return (
        <main>
            <ToDoListUseState />
            <ToDoListCustomHooks />
            <AdvancedToDoList />
        </main>
    );
}

export default App;

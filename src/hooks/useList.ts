import { TextInput } from '../models/input';

function useList(setListInput: Function, setList: Function) {
    const handleInputChange = (event: any) => {
        setListInput(event?.target.value);
        console.log(
            `input was updated successfully to be ${event?.target.value}`
        );
    };

    const addInput = (newInput: string, originalList: TextInput[]) => {
        originalList.push({ text: newInput });
        // use spread syntax to trigger re render
        setList([...originalList]);
        console.log(`list was updated to be ${JSON.stringify(originalList)}`);

        // clear input field
        setListInput('');
        console.log('list input was cleared');
    };

    return {
        handleInputChange,
        addInput,
    };
}

export default useList;

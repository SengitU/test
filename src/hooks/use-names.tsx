import { useCallback, useState } from "react";

const nameCards = [
    {
        id: '1',
        name: 'Ugurcan',
        meaning: 'Lucky one',
        origin: 'Turkish'
    },
    {
        id: '2',
        name: 'Pinar',
        meaning: 'Spring',
        origin: 'Turkish'
    },
    {
        id: '3',
        name: 'Ugurcan',
        meaning: 'Lucky one',
        origin: 'Turkish'
    },
    {
        id: '4',
        name: 'Pinar',
        meaning: 'Spring',
        origin: 'Turkish'
    },
    {
        id: '5',
        name: 'Ugurcan',
        meaning: 'Lucky one',
        origin: 'Turkish'
    },
    {
        id: '6',
        name: 'Pinar',
        meaning: 'Spring',
        origin: 'Turkish'
    }
];

export default function useNames() {
    const [names, setNames] = useState(nameCards);

    const processName = useCallback((id: string, isSelected: boolean) => {
        const selectedItem = names.find((name) => name.id === id);
        console.log(`Item is being removed, isSelected ${isSelected}, ${JSON.stringify(selectedItem)}`);
        const newCards = names.filter((card) => card.id !== id);
        setNames(newCards);
    }, [names])

    return {names, processName};
}
import { useState } from 'react';

export function useInput(initialValue) {
    const [storedValue, setStoredValue] = useState(initialValue);
    
    const handleChanges = (newValue) => {
        setStoredValue(newValue);
    };
        return [storedValue, setStoredValue, handleChanges];
};


export default function useLocalStorage(key, initialValue) {
    const [value, setValue] = useState(() => {
        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : initialValue;
    });

    const setNewValue = newValue => {
        setValue(newValue);
        window.localStorage.setItem(key, JSON.stringify(value));
    }

    return [value, setNewValue];   
};

import { useState } from 'react';


export default function LocalStorage(key, initialValue) {
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

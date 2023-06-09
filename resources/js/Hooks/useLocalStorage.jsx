import { useState, useEffect } from 'react';

// хук записывает необходимые данные в LocalStorage
function useLocalStorage(key, initialValue) {
    // value: значиение из localStorage или initialValue
    const [value, setValue] = useState(() => {
        try {
            const item = window.localStorage.getItem(key); // string || null || undefined
            return item ? JSON.parse(item) : initialValue;
        } catch (err) {
            //console.log(err);
            return initialValue;
        }
    });

    // Когда вызывается setValue(), новое значение
    // автомиатически записывается в localStorage
    useEffect(
        () => {
            // console.log(`value: ${value}`);
            localStorage.setItem(key, JSON.stringify(value));
        },
        // eslint-disable-next-line
        [value]
    );

    return [value, setValue];
}

export { useLocalStorage }

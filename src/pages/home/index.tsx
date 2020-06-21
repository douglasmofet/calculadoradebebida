import React, { useState, useEffect } from 'react';

/*
Heineken exemplo
600ml	- 6,99 - garrafa
350ml	- 3,49 - lata
250ml	- 2,79 - mini-lata
330ml	- 4,39 - long neck
5000ml	- 79,90 - barril 5L
*/

interface Item {
    name?: string,
    capacity: number,
    price?: number,
    calculatedPrice?: number;
}

export default function Home () {
    const [items, setItems] = useState<Item[]>([]);

    useEffect(() => {
        const items: Item[] = [
            {
                name: 'Garrafa',
                capacity: 600,
                price: 1516.99
            },
            {
                name: 'Latinha',
                capacity: 350,
                price: 0
            },
            {
                name: 'Mini-lata',
                capacity: 250,
                price: 0
            },            
            {
                name: 'Long neck',
                capacity: 250,
                price: 0
            },
        ];

        setItems(items);
    }, []);

    const formatPrice = (value: number | undefined) => {
        if (!value)
            return '';

        // let valueFormated = value.toLocaleString('pt-br', { minimumFractionDigits: 2 });

        return value.toString();
    }

    const handleValue = (price: string | undefined, index: number) => {
        if(!price)
            return;
        
        let priceValue = Number(price.replace(/\./g,'').replace(/\,/g,'.'));

        /* clone array */
        let itemsCopy = [...items];

        let item = itemsCopy[index];
        item.price = priceValue;
        itemsCopy[index] = item;

        setItems(itemsCopy);
    }

    const renderItems = () => {
        return (
            items.map((iten, index) => (
                <div key={index}>
                    <label htmlFor={`item-${index}`}>R$</label>
                    <input
                        name={`item-${index}`}
                        type="text"
                        value={formatPrice(iten.price)}
                        onChange={(el) => handleValue(el.target.value, index)} />
                    <div>
                        <strong>{iten.name ? iten.name : 'Personalizado'}</strong>
                        <br />
                        <small>{iten.capacity}</small>
                    </div>
                    <hr/>
                </div>
            ))
        );
    }

    return (
        <>
            <h1>Calculadora de bebida</h1>
            {renderItems()}
        </>
    );
}
import React, { useState, useEffect } from 'react';
import Input from './Input';

interface Item {
    name: string,
    capacity: number,
    price?: number,
    calculatedPrice?: number;
}

const Home = () => {
    const [items, setItems] = useState<Item[]>([]);

    useEffect(() => {
        const items: Item[] = [
            {
                name: 'Garrafa',
                capacity: 600,
            },
            {
                name: 'Latinha',
                capacity: 350,
                price: 3.4
            },
            {
                name: 'MiniLata',
                capacity: 250,
                price: 2.44
            },
            {
                name: 'Longneck',
                capacity: 250,
                price: 2.99
            },
            {
                name: 'Barrilzinho',
                capacity: 5000,
                price: 135
            }
        ];

        setItems(items);
    }, []);

    function handleInputChange( price: EventTarget | undefined, index: number) {
        console.log('handleInputChange', price)
        // if (!price)
        //     return;

        // //const { name, value } = event.target;

        // //let priceValue = Number(price.replace(/\./g, '').replace(/\,/g, '.'));

        // /* clone array */
        // let itemsCopy = [...items];

        // let item = itemsCopy[index];
        // item.price = Number(price);
        // itemsCopy[index] = item;

        

        // setItems(itemsCopy);
    }

    const renderItems = () => {
        return (
            <div>
                <h1>Calculadora de bebida</h1>
                {items.map((item, index) => (
                    <div key={index}>
                        <h2>{item.name}</h2>
                        <span>{`${item.capacity}ml`}</span> <br />
                        <Input
                            prefix="R$"
                            placeholder="0,00"
                            name={`item-${index}`}
                            value={item.price}
                            onKeyUp={(el) => handleInputChange(el.target, index)}
                        />
                    </div>
                ))}
                <br />
                <button type="submit">
                    Calcular
                    </button>

            </div>
        );
    }

    return (
        <>
            {renderItems()}
        </>
    );
}

export default Home;
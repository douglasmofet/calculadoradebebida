import React, { InputHTMLAttributes, useCallback } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    prefix?: string;
    value?: number | undefined;
}

export const rawNumber = (value: string) => {
    let priceValue = Number(value.replace(/\./g, '').replace(/\,/g, '.'));
    // console.log('rawNumber', priceValue);
    return priceValue;
}

const Input = (props: InputProps) => {
    // const [value, setValue] = useState<string | undefined>();

    // useEffect(() => {

    //     if(props.value) {
    //         setValue(editedPrice(props.value as number));
    //     }

    // }, [props.value]);

    const editedPrice = (price: number | undefined | null) => {
        if (!price) {
            return ""
        }
        if (price != null) {
            let newPrice = price.toFixed(2);

            newPrice = newPrice.replace(/\D/g, "");
            newPrice = newPrice.replace(/(\d)(\d{2})$/, "$1,$2");
            newPrice = newPrice.replace(/(?=(\d{3})+(\D))\B/g, ".");
            return newPrice;
        }
    }
    
    // const handleKeyUp = useCallback((e: React.FormEvent<HTMLInputElement>) => {
    //     // let value = e.currentTarget.value;
    //     // value = value.replace(/\D/g, "");
    //     // value = value.replace(/(\d)(\d{2})$/, "$1,$2");
    //     // value = value.replace(/(?=(\d{3})+(\D))\B/g, ".");
    //     // //e.currentTarget.value = value;
    //     // setValue(value);

    //     let rawValue = e.currentTarget.value ? rawNumber(e.currentTarget.value) : null;
    //     // console.log('handleKeyUp', rawValue);
    //     return rawValue;
    // }, []);

    const handleKeyUp = (el: React.FormEvent<HTMLInputElement>) => {
        let rawValue = el.currentTarget.value ? rawNumber(el.currentTarget.value) : null;
        console.log(rawValue);
        return rawValue;
    }

    
    return (<div>
        {/* {prefix && <span>{prefix}</span>} */}
        <input
            // {...props}
            onChange={handleKeyUp}
            value={editedPrice(props.value)} />
    </div>);
}

export default Input;
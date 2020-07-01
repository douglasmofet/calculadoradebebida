import React, { InputHTMLAttributes, useCallback, useEffect, useState } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    prefix?: string;

}

const Input: React.FC<InputHTMLAttributes<HTMLInputElement>> = ({prefix, ...props }) => {
    const [value, setValue] = useState<string | undefined>();

    useEffect(() => {

        if(props.value) {
            setValue(editedPrice(props.value as number));
        }

    }, [props.value]);

    const editedPrice = (price: number | undefined) => {
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
    
    const handleKeyUp = useCallback((e: React.FormEvent<HTMLInputElement>) => {
        let value = e.currentTarget.value;
        value = value.replace(/\D/g, "");
        value = value.replace(/(\d)(\d{2})$/, "$1,$2");
        value = value.replace(/(?=(\d{3})+(\D))\B/g, ".");
        //e.currentTarget.value = value;
        setValue(value);
    }, [])
    
    return (<div>
        {prefix && <span>{prefix}</span>}
        <input {...props} onChange={handleKeyUp} value={value} />
    </div>);
}

export default Input;
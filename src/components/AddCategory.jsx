import { useState } from "react";

export const AddCategory = ( { onNewCategory } ) => {

    const [InputValue, setInputValue] = useState('One Punch');

    const onInputChange = ({ target }) => {
        setInputValue(target.value);
    }


    const onSubmit = (event) =>{

        event.preventDefault();
        const newInputValue = InputValue.trim();
        if (newInputValue.length <= 1) return;

        onNewCategory( newInputValue.trim() );
        setInputValue('');

        // setCategories( categories => [ InputValue, ...categories ]);
    }

    return (
        <form onSubmit={ onSubmit }>
            <input 
                type="text" 
                placeholder="Buscar Gifs" 
                value={InputValue}
                onChange={ onInputChange }
            />
        </form>
    )
}

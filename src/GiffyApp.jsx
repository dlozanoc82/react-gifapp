import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GiffyApp = () => {

    const [categories, setCategories] = useState(['One Punch']);

    const onAddCategory = (newCategory) => {

        if (categories.includes(newCategory) ) return;

        console.log(newCategory);
        setCategories([...categories, newCategory]);
    }

    return (
        <>
            <h1>GiffyApp</h1>

            <AddCategory 
                onNewCategory={onAddCategory}
            />

            {
                categories.map(category => {
                    return (
                        <GifGrid key={category} category={category} />
                    )
                })
            }
        </>
    )
}

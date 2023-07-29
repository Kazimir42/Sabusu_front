import H2 from "@/components/H2";
import BlockButton from "@/components/BlockButton";
import React from "react";
import { API_ROUTE } from "@/api/api";
import Button from "@/components/Button";

function CategorySelector(props) {

    function back() {
        props.back('CategorySelector');
    }

    return (<div>
        <div className='flex flex-row justify-between mb-4'>
            <H2>Choose the right category</H2>
            <Button type={'button'} onClick={() => back()}>{'<'} Back</Button>
        </div>
        <div className="grid grid-cols-4 gap-4">
            {props.categories.map(category => (<BlockButton
                key={category.id}
                onClick={() => props.setSelectedCategory(category)}>
                <img
                    className="h-20 w-20" src={API_ROUTE + category.medias[0]?.path}
                    alt={category.medias[0]?.title}
                />
                {category.title}
            </BlockButton>))}
        </div>
    </div>);
}

export default CategorySelector;

import H2 from "@/components/H2";
import BlockButton from "@/components/BlockButton";
import React from "react";

function CategorySelector(props) {
    return (<div>
        <H2 className="mb-4">Choose the right category</H2>
        <div className="grid grid-cols-4 gap-4">
            {props.categories.map(category => (<BlockButton
                key={category.id}
                onClick={() => props.setSelectedCategory(category)}>
                <img
                    className="h-24 w-24 bg-primary"
                    alt={category.title}
                />
                {category.title}
            </BlockButton>))}
        </div>
    </div>);
}

export default CategorySelector;

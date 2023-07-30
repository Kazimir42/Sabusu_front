import React from "react";
import H3 from "@/components/H3";
import BlockButton from "@/components/BlockButton";
import { API_ROUTE } from "@/api/api";
import { useRouter } from "next/router";

function CategoriesList(props) {
    const router = useRouter();

    return (
        <div>
            <H3 className="mb-2">Your categories</H3>
            {props.categories.length ?
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {props.categories.map(category => (<BlockButton
                        key={category.id}
                        onClick={() => router.push('my-profile/categories/' + category.id)}>
                        <img
                            className="h-24 w-24 object-contain" src={API_ROUTE + category.medias[0]?.path}
                            alt={category.medias[0]?.title}
                        />
                        {category.title}
                    </BlockButton>))}
                </div>
                : <p className="text-gray-500 w-full">
                    No categories
                </p>}
        </div>
    );
}

export default CategoriesList;

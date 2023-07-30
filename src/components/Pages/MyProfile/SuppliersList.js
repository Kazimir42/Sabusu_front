import React from "react";
import H3 from "@/components/H3";
import BlockButton from "@/components/BlockButton";
import { API_ROUTE } from "@/api/api";
import { useRouter } from "next/router";

function SuppliersList(props) {
    const router = useRouter();

    return (
        <div>
            <H3 className="mb-2">Your suppliers</H3>
            {props.suppliers.length ?
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {props.suppliers.map(supplier => (<BlockButton
                        key={supplier.id}
                        onClick={() => router.push('my-profile/suppliers/' + supplier.id)}>
                        <img
                            className="h-24 w-24 object-contain" src={API_ROUTE + (supplier.medias[0]?.path ?? 'svg/puzzle.svg')}
                            alt={supplier.medias[0]?.title}
                        />
                        {supplier.title}
                    </BlockButton>))}
                </div>
                : <p className="text-gray-500 w-full">
                    No suppliers
                </p>}
        </div>
    );
}

export default SuppliersList;

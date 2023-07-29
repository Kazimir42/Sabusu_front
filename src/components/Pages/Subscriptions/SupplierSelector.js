import H2 from "@/components/H2";
import BlockButton from "@/components/BlockButton";
import React from "react";
import { API_ROUTE } from "@/api/api";
import Button from "@/components/Button";
import { useRouter } from "next/router";

function SupplierSelector(props) {
    const router = useRouter();

    function back() {
        props.back('SupplierSelector');
    }

    return (<div>
        <div className='flex flex-row justify-between mb-4'>
            <H2>Choose the right supplier</H2>
            <Button type={'button'} onClick={() => back()}>{'<'} Back</Button>
        </div>
        <div className="grid grid-cols-4 gap-4">
            {props.suppliers.map(supplier => (<BlockButton
                key={supplier.id}
                onClick={() => props.setSelectedSupplier(supplier)}>
                <img
                    className="h-24 w-24 object-contain" src={API_ROUTE + supplier.medias[0]?.path}
                    alt={supplier.medias[0]?.title}
                />
                {supplier.title}
            </BlockButton>))}
            <BlockButton
                onClick={() => router.push('/categories/' + props.selectedCategoryId + '/suppliers/add')}>
                <img
                    className="h-24 w-24 object-contain" src={API_ROUTE + 'svg/plus.svg'}
                    alt={'plus.svg'}
                />
                New
            </BlockButton>
        </div>
    </div>);
}

export default SupplierSelector;

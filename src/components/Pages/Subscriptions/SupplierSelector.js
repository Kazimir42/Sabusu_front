import H2 from "@/components/H2";
import BlockButton from "@/components/BlockButton";
import React from "react";
import SubscriptionForm from "@/components/Pages/Subscriptions/SubscriptionForm";

function SupplierSelector(props) {
    return (<div>
        <H2 className="mb-4">Choose the right supplier</H2>
        <div className="grid grid-cols-4 gap-4">
            {props.suppliers.map(supplier => (<BlockButton
                key={supplier.id}
                onClick={() => props.setSelectedSupplier(supplier)}>
                <img
                    className="h-24 w-24 bg-primary"
                    alt={supplier.title}
                />
                {supplier.title}
            </BlockButton>))}
        </div>
    </div>);
}

export default SupplierSelector;

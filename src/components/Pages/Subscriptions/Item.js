import React from "react";
import Link from "next/link";
import BlockButton from "@/components/BlockButton";
import { frequencyEnum } from "@/enums/frequencies";

function Item(props) {
    return (
        <Link href={"/subscriptions/" + props.subscription.id}>
            <BlockButton key={props.index} className="grid grid-cols-12 text-left w-full border-2">
                <div className="col-span-2 mx-auto my-auto">
                    <img className="h-24 w-24 bg-primary" />
                </div>
                <div className="flex flex-col gap-2 col-span-8 justify-between">
                    <p className="text-gray-600">
                        {props.subscription.category.title} |{" "}
                        {props.subscription.supplier.title}
                    </p>
                    <p className="font-bold text-2xl text-left">
                        {props.subscription.title}
                    </p>
                </div>
                <p className="col-span-2 font-bold text-2xl text-primary-light">
                    {props.subscription.amount}€ /
                    {frequencyEnum[props.subscription.frequency].title}
                </p>
            </BlockButton>
        </Link>
    );
}

export default Item;

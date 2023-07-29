import React from "react";
import Link from "next/link";
import BlockButton from "@/components/BlockButton";
import { frequencyEnum } from "@/enums/frequencies";
import { API_ROUTE } from "@/api/api";

function Item(props) {
    return (
        <Link href={"/subscriptions/" + props.subscription.id}>
            <BlockButton key={props.index} className="grid grid-cols-12 text-left w-full border-2">
                <div className="col-span-3 md:col-span-2 mx-auto my-auto">
                    <img
                        className="h-24 w-24 inline" src={API_ROUTE + props.subscription.supplier.medias[0]?.path}
                        alt={props.subscription.supplier.medias[0]?.title}
                    />
                </div>
                <div className="flex flex-col gap-2 col-span-6 md:col-span-8 justify-between">
                    <div className="text-gray-600 flex flex-row items-center gap-1">
                        <img
                            className="h-5 w-5 inline" src={API_ROUTE + props.subscription.category.medias[0]?.path}
                            alt={props.subscription.category.medias[0]?.title}
                        />
                        <p>
                            {props.subscription.category.title} |{" "}
                            {props.subscription.supplier.title}
                        </p>
                    </div>
                    <p className="font-bold text-2xl text-left">
                        {props.subscription.title}
                    </p>
                </div>
                <p className="col-span-3 md:col-span-2 font-bold text-2xl text-primary">
                    {props.subscription.amount}€ /
                    {frequencyEnum[props.subscription.frequency].title}
                </p>
            </BlockButton>
        </Link>
    );
}

export default Item;

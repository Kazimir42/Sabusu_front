import React from "react";
import Link from "next/link";
import Eye from "@/components/Svg/Eye";
import BlockButton from "@/components/BlockButton";

function Item(props) {
    return (
        <Link href={"/subscriptions/" + props.subscription.id}>
            <BlockButton
                key={props.index}
                class="grid grid-cols-12 text-left w-full">
                <div className="col-span-2 mx-auto my-auto">
                    <img className="h-24 w-24 bg-primary" />
                </div>
                <div className="flex flex-col gap-2 col-span-8 justify-between">
                    <p className="text-gray-600">
                        {props.subscription.category.title} |{" "}
                        {props.subscription.supplier.title}
                    </p>
                    <p className="font-bold text-2xl">
                        {props.subscription.cost}€ /
                        {props.subscription.frequency}
                    </p>
                </div>
                <div className="col-span-2 justify-center items-center my-auto mx-auto">
                    <Link
                        href={`/subscriptions/${props.subscription.id}`}
                        className={"block"}>
                        <Eye
                            class={
                                "!h-10 !w-10 text-primary-light cursor-pointer"
                            }
                        />
                    </Link>
                </div>
            </BlockButton>
        </Link>
    );
}

export default Item;

import React from "react";
import Plus from "@/components/Svg/Plus";
import Link from "next/link";
import BlockButton from "@/components/BlockButton";

function NewItem(props) {
    return (
        <Link href="/subscriptions/add">
            <BlockButton className=" border-dashed border-primary-light w-full grid grid-cols-12 border-2">
                <div className=" col-span-2 mx-auto my-auto">
                    <Plus className={"h-12 w-12 text-primary-light"} />
                </div>
                <div className=" flex flex-col gap-2 col-span-10 justify-center">
                    <p className=" font-bold text-2xl text-primary-light text-left">
                        Add new subscription
                    </p>
                </div>
            </BlockButton>
        </Link>
    );
}

export default NewItem;

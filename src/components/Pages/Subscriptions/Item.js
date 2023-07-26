import React from 'react'
import Block from '@/components/Block'
import Link from 'next/link'
import Eye from '@/components/Svg/Eye'

function Item(props) {
    return (
        <Block key={props.index} className="h-32 grid grid-cols-12">
            <div className="p-6 col-span-2 mx-auto my-auto">
                <img />
            </div>
            <div className="p-6 flex flex-col gap-2 col-span-8 justify-between">
                <p className="text-gray-600">
                    {props.subscription.category.title} | {props.subscription.supplier.title}
                </p>
                <p className="font-bold text-2xl">
                    {props.subscription.cost}€ /{props.subscription.frequency}
                </p>
            </div>
            <div className="p-6 col-span-2 justify-center items-center my-auto mx-auto">
                <Link
                    href={`/subscriptions/${props.subscription.id}`}
                    className={'block'}>
                    <Eye
                        className={
                            '!h-10 !w-10 text-primary-light cursor-pointer'
                        }
                    />
                </Link>
            </div>
        </Block>
    )
}

export default Item

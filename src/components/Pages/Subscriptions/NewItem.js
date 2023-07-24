import React from 'react'
import Block from '@/components/Block'
import Plus from '@/components/Svg/Plus'
import Link from 'next/link'

function NewItem(props) {
    return (
        <Link href="/subscriptions/add">
            <Block
                key={props.index}
                className="h-32 grid grid-cols-12 border-4 border-dashed border-gray-300 bg-transparent shadow-none">
                <div className="p-6 col-span-2 mx-auto my-auto">
                    <Plus className={'h-12 w-12 text-gray-400'} />
                </div>
                <div className="p-6 flex flex-col gap-2 col-span-10 justify-center">
                    <p className="font-bold text-2xl text-gray-400">
                        Add new subscription
                    </p>
                </div>
            </Block>
        </Link>
    )
}

export default NewItem

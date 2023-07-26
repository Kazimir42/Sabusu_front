import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import AppLayout from '@/components/Layouts/AppLayout'
import Head from 'next/head'
import Container from '@/components/Container'
import Loader from '@/components/Loader'
import { fetchCategories } from '@/api/categories'
import Block from '@/components/Block'
import H2 from '@/components/H2'
import { fetchSuppliers } from '@/api/suppliers'
import Subscriptions from '@/pages/subscriptions/index'
import BlockButton from '@/components/BlockButton'
import { frequencies, frequencyEnum, MONTHLY } from '@/enums/frequencies'
import H3 from '@/components/H3'
import Input from '@/components/Input'

function Add() {
    const [categories, setCategories] = useState([])
    const [suppliers, setSuppliers] = useState([])
    const [frequencies, setFrequencies] = useState([1, 2, 3, 4])

    const [selectedCategory, setSelectedCategory] = useState(null)
    const [selectedSupplier, setSelectedSupplier] = useState(null)
    const [selectedFrequency, setSelectedFrequency] = useState(null)

    const [isLoading, setIsLoading] = useState(true)
    const router = useRouter()

    useEffect(() => {
        fetchCategories()
            .then(setCategories)
            .then(() => setIsLoading(false))
    }, [])

    useEffect(() => {
        if (selectedCategory) {
            setIsLoading(true)
            fetchSuppliers(selectedCategory.id)
                .then(setSuppliers)
                .then(() => setIsLoading(false))
        }
    }, [selectedCategory])

    function CategorySelector() {
        return (
            <div>
                <H2 className={'mb-4'}>Choose the right category</H2>
                <div className="grid grid-cols-4 gap-4">
                    {categories.map(category => {
                        return (
                            <BlockButton
                                key={category.id}
                                onClick={() => setSelectedCategory(category)}>
                                <img className="h-24 w-24 bg-primary" />
                                {category.title}
                            </BlockButton>
                        )
                    })}
                </div>
            </div>
        )
    }

    function SupplierSelector() {
        return (
            <div>
                <H2 className={'mb-4'}>Choose the right supplier</H2>
                <div className="grid grid-cols-4 gap-4">
                    {suppliers.map(supplier => {
                        return (
                            <BlockButton
                                key={supplier.id}
                                onClick={() => setSelectedSupplier(supplier)}>
                                <img className="h-24 w-24 bg-primary" />
                                {supplier.title}
                            </BlockButton>
                        )
                    })}
                </div>
            </div>
        )
    }

    function SubscriptionForm() {
        return (
            <div>
                <H2 className={'mb-4'}>Complete your subscription</H2>
                <div className={'flex flex-col gap-4'}>
                    <div>
                        <H3 className={'mb-2'}>Frequency</H3>
                        <div className="grid grid-cols-4 gap-4">
                            {frequencies.map(frequency => {
                                return (
                                    <BlockButton
                                        key={frequency}
                                        onClick={() =>
                                            setSelectedFrequency(frequency)
                                        }>
                                        <img className="h-24 w-24 bg-primary" />
                                        {frequencyEnum[frequency].title}
                                    </BlockButton>
                                )
                            })}
                        </div>
                    </div>
                    <div>
                        <H3 clasName={'mb-2'}>Frequency</H3>
                        <Input className={'p-2'} />
                    </div>
                </div>
            </div>
        )
    }

    return (
        <AppLayout
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Add Subscription
                </h2>
            }>
            <Head>
                <title>Sabusu - Subscriptions</title>
            </Head>

            <Container>
                {!isLoading ? (
                    <>
                        {!selectedCategory ? <CategorySelector /> : null}
                        {selectedCategory && !selectedSupplier ? (
                            <SupplierSelector />
                        ) : null}
                        {selectedCategory && selectedSupplier ? (
                            <SubscriptionForm />
                        ) : null}
                    </>
                ) : (
                    <Loader />
                )}
            </Container>
        </AppLayout>
    )
}

export default Add

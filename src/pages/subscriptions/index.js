import AppLayout from '@/components/Layouts/AppLayout'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import Container from '@/components/Container'
import Item from '@/components/Pages/Subscriptions/Item'
import Loader from '@/components/Loader'
import NewItem from '@/components/Pages/Subscriptions/NewItem'
import { fetchSubscriptions } from '@/api/subscriptions'

const Index = () => {
    const [subscriptions, setSubscriptions] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetchSubscriptions().then(setSubscriptions).then(setIsLoading)
    }, [])

    function DisplaySubscriptions() {
        return (
            <div className="flex flex-col gap-4">
                {subscriptions ? (
                    subscriptions.map((subscription, index) => (
                        <Item key={index} subscription={subscription} />
                    ))
                ) : (
                    <p>No subscriptions</p>
                )}
                <NewItem />
            </div>
        )
    }

    return (
        <AppLayout
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Subscriptions
                </h2>
            }>
            <Head>
                <title>Sabusu - Subscriptions</title>
            </Head>

            <Container>
                {!isLoading ? <DisplaySubscriptions /> : <Loader />}
            </Container>
        </AppLayout>
    )
}

export default Index

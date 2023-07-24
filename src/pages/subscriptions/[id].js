import React, { useState } from 'react'
import AppLayout from '@/components/Layouts/AppLayout'
import Head from 'next/head'
import Container from '@/components/Container'
import Loader from '@/components/Loader'
import { useRouter } from 'next/router'

function Id() {
    const [isLoading, setIsLoading] = useState(true)
    const router = useRouter()

    return (
        <AppLayout
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Subscription {router.query.id}
                </h2>
            }>
            <Head>
                <title>Sabusu - Subscriptions</title>
            </Head>

            <Container>{!isLoading ? <div /> : <Loader />}</Container>
        </AppLayout>
    )
}

export default Id

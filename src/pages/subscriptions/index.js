import AppLayout from '@/components/Layouts/AppLayout'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Container from '@/components/Container'
import Item from '@/components/Pages/Subscriptions/Item'
import Loader from '@/components/Loader'
import NewItem from "@/components/Pages/Subscriptions/NewItem";

const Index = () => {
    const [subscriptions, setSubscriptions] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetchSubscriptions()
    }, [])

    function fetchSubscriptions() {
        axios
            .get('http://localhost/api/subscriptions', {
                withCredentials: true, // Autorise l'envoi des cookies lors de la requête (important pour les requêtes CORS avec des cookies d'authentification)
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': 'http://localhost:3000', // Remplacez par l'URL de votre application Next.js
                },
            })
            .then(response => {
                setSubscriptions(response.data)
                setIsLoading(false)
            })
            .catch(error => {
                console.error(
                    'Erreur lors de la récupération des souscriptions :',
                    error,
                )
            })
    }

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

import AppLayout from '@/components/Layouts/AppLayout'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useAuth } from '@/hooks/auth'

const Subscriptions = () => {
    const [subscriptions, setSubscriptions] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const { token } = useAuth()

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
            <div className="flex flex-col gap-2">
                {subscriptions ? (
                    subscriptions.map((subscription, index) => (
                        <div
                            key={index}
                            className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                            <div className="p-6 bg-white border-b border-gray-200 flex flex-col gap-2">
                                <p>Title : {subscription.title}</p>
                                <p>Frequency : {subscription.frequency}</p>
                                <p>Cost : {subscription.cost}€</p>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No subscriptions</p>
                )}
            </div>
        )
    }

    function Loader() {
        return <div>LOADING</div>
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

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    {!isLoading ? <DisplaySubscriptions /> : <Loader />}
                </div>
            </div>
        </AppLayout>
    )
}

export default Subscriptions

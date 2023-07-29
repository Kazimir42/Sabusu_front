import AppLayout from "@/components/Layouts/AppLayout";
import Head from "next/head";
import { useEffect, useState } from "react";
import Container from "@/components/Container";
import Item from "@/components/Pages/Subscriptions/Item";
import Loader from "@/components/Loader";
import NewItem from "@/components/Pages/Subscriptions/NewItem";
import { fetchSubscriptions } from "@/api/subscriptions";
import Block from "@/components/Block";

const Index = () => {
    const [subscriptions, setSubscriptions] = useState([]);
    const [totalMonthlyCost, setTotalMonthlyCost] = useState(0);
    const [mostExpensiveCategory, setMostExpensiveCategory] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchSubscriptions().then((result) => {
            setSubscriptions(result.subscriptions);
            setTotalMonthlyCost(result.total_monthly_cost);
            setMostExpensiveCategory(result.most_expensive_category);
        }).then(setIsLoading);
    }, []);

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
        );
    }

    function Statistiques() {
        return (
            <div className={'grid grid-cols-2 md:grid-cols-3 gap-4 mb-4'}>
                <Block className={'col-span-1 flex flex-col hover:border-primary duration-200 text-center justify-center p-8'}>
                    <p className={'font-bold text-primary text-6xl md:text-7xl'}>{subscriptions.length}</p>
                    <p>Subscriptions</p>
                </Block>
                <Block className={'col-span-1 flex flex-col hover:border-primary duration-200 text-center justify-center p-8'}>
                    <p className={'font-bold text-primary text-6xl md:text-7xl'}>{totalMonthlyCost}€</p>
                    <p>Monthly cost</p>
                </Block>
                <Block className={'col-span-2 md:col-span-1 flex flex-col hover:border-primary duration-200 text-center justify-center p-8'}>
                    <p className={'font-bold text-primary text-3xl md:text-3xl lg:text-4xl xl:text-5xl'}>{mostExpensiveCategory.title}</p>
                    <p>Most expensive category</p>
                </Block>
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
                {!isLoading ? (
                        <>
                            <Statistiques />
                            <DisplaySubscriptions />
                        </>
                    )
                    : <Loader />
                }
            </Container>
        </AppLayout>
    );
};

export default Index;

import AppLayout from "@/components/Layouts/AppLayout";
import Head from "next/head";
import { useEffect, useState } from "react";
import Container from "@/components/Container";
import Loader from "@/components/Loader";
import Block from "@/components/Block";
import H3 from "@/components/H3";
import DistributionsByCategories from "@/components/Pages/Statistics/DistributionsByCategories";
import { fetchSubscriptionsDatas } from "@/api/subscriptions";
import DistributionsBySuppliers from "@/components/Pages/Statistics/DistributionsBySuppliers";
import BlockButton from "@/components/BlockButton";
import { router } from "next/client";

const Index = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [result, setResult] = useState(false);

    useEffect(() => {
        fetchSubscriptionsDatas().then(setResult).then(setIsLoading);
    }, []);

    const data = [
        {
            "name": "Group A",
            "value": 400
        },
        {
            "name": "Group B",
            "value": 300
        },
        {
            "name": "Group C",
            "value": 300
        },
        {
            "name": "Group D",
            "value": 200
        },
        {
            "name": "Group E",
            "value": 278
        },
        {
            "name": "Group F",
            "value": 189
        }
    ];


    return (
        <AppLayout
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Statistics
                </h2>
            }>
            <Head>
                <title>Sabusu - Statistics</title>
            </Head>

            <Container>
                {!isLoading ? (
                        <div className={'flex flex-col gap-4'}>
                            <div className={"grid grid-cols-2 md:grid-cols-3 gap-4"}>
                                <Block
                                    className={"col-span-1 flex flex-col text-center justify-center p-8"}>
                                    <p className={"font-bold text-primary text-6xl md:text-7xl"}>{result?.total_subscriptions ?? 0}</p>
                                    <p>Subscriptions</p>
                                </Block>
                                <Block
                                    className={"col-span-1 flex flex-col text-center justify-center p-8"}>
                                    <p className={"font-bold text-primary text-6xl md:text-7xl"}>{result?.total_monthly_cost ?? 0}€</p>
                                    <p>Monthly cost</p>
                                </Block>
                                <Block
                                    className={"col-span-2 md:col-span-1 flex flex-col text-center justify-center p-8"}>
                                    <p className={"font-bold text-primary text-3xl md:text-3xl lg:text-4xl xl:text-5xl"}>{result?.most_expensive_category?.title ?? "None"}</p>
                                    <p>Most expensive category</p>
                                </Block>
                            </div>
                            <div className={"grid grid-cols-1 gap-4"}>
                                <BlockButton onClick={() => router.push('/subscriptions/' + result?.most_expensive_subscription?.id)}
                                    className={"col-span-2 md:col-span-1 flex flex-col text-center justify-center p-8"}>
                                    <p className={"font-bold text-primary text-6xl md:text-7xl"}>{result?.most_expensive_subscription?.title ?? "None"}</p>
                                    <p>Most expensive subscription</p>
                                </BlockButton>
                            </div>
                            <div className={"grid grid-cols-2 gap-4"}>
                                <Block className={"h-96 p-6"}>
                                    <H3>Distributions by categories</H3>
                                    <DistributionsByCategories data={result.distribution_by_categories} />
                                </Block>
                                <Block className={"h-96 p-6"}>
                                    <H3 className={'mb-4'}>Amount by suppliers</H3>
                                    <DistributionsBySuppliers data={result.distribution_by_suppliers} />
                                </Block>
                            </div>
                        </div>
                    )
                    : <Loader />
                }
            </Container>
        </AppLayout>
    );
};

export default Index;

import React, { useEffect, useState } from "react";
import AppLayout from "@/components/Layouts/AppLayout";
import Head from "next/head";
import Container from "@/components/Container";
import Loader from "@/components/Loader";
import { useRouter } from "next/router";
import { fetchSubscription } from "@/api/subscriptions";
import { frequencyEnum } from "@/enums/frequencies";
import H1 from "@/components/H1";
import { API_ROUTE } from "@/api/api";

function Id() {
    const [subscription, setSubscription] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        if (router.query.id) {
            fetchSubscription(router.query.id).then(setSubscription).then(setIsLoading);
        }
    }, [router.query.id]);

    return (
        <AppLayout
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Subscription {subscription?.title}
                </h2>
            }>
            <Head>
                <title>Sabusu - Subscription {subscription?.title}</title>
            </Head>

            <Container>{!isLoading ?
                <div className={"flex flex-row gap-8"}>
                    <div className=" ">
                        <img
                            className="h-40 w-40 md:h-64 md:w-64 inline" src={API_ROUTE + subscription.supplier.medias[0]?.path}
                            alt={subscription.supplier.medias[0]?.title}
                        />
                    </div>
                    <div className="flex flex-col gap-2 my-auto ">
                        <div className="text-gray-600 flex flex-row items-center gap-1">
                            <img
                                className="h-5 w-5 inline" src={API_ROUTE + subscription.category.medias[0]?.path}
                                alt={subscription.category.medias[0]?.title}
                            />
                            <p>
                                {subscription.category.title} |{" "}
                                {subscription.supplier.title}
                            </p>
                        </div>
                        <H1>{subscription?.title}</H1>
                        <p className="col-span-2 font-bold text-2xl text-primary">
                            {subscription?.amount}€ /
                            {frequencyEnum[subscription?.frequency].title}
                        </p>
                        <div className={"mt-8"}>
                            <p className="text-gray-600">
                                Subscribed date : {subscription?.subscribed_at}
                            </p>
                            <p className="text-gray-600">
                                Next payment date : {subscription?.subscribed_at}
                            </p>
                        </div>
                    </div>
                </div>
                : <Loader />}</Container>
        </AppLayout>
    );
}

export default Id;

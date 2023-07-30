import React, { useEffect, useState } from "react";
import AppLayout from "@/components/Layouts/AppLayout";
import Head from "next/head";
import Container from "@/components/Container";
import Loader from "@/components/Loader";
import { useRouter } from "next/router";
import { editSubscription, fetchSubscription } from "@/api/subscriptions";
import { frequencyEnum } from "@/enums/frequencies";
import { API_ROUTE } from "@/api/api";
import Button from "@/components/Button";
import H2 from "@/components/H2";
import H3 from "@/components/H3";
import BlockButton from "@/components/BlockButton";
import Input from "@/components/Input";
import ErrorsModal from "@/components/Pages/ErrorsModal";

function edit() {
    const [frequencies] = useState([1, 2, 3, 4]);
    const [subscription, setSubscription] = useState(null);

    const [selectedFrequency, setSelectedFrequency] = useState(0);
    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState("");
    const [subscribedAt, setSubscribedAt] = useState("");
    const [paymentAt, setPaymentAt] = useState("");

    const [isLoading, setIsLoading] = useState(true);
    const [errors, setErrors] = useState(null);

    const router = useRouter();

    useEffect(() => {
        if (router.query.id) {
            fetchSubscription(router.query.id).then(setSubscription).then(setIsLoading);
        }
    }, [router.query.id]);

    function handleFormSubmit(event) {
        event.preventDefault();

        const subscription = {
            frequency: selectedFrequency,
            title: title,
            amount: amount,
            subscribed_at: subscribedAt,
            payment_at: paymentAt
        };

        editSubscription(router.query.id, subscription)
            .then(() => router.push("/subscriptions/" + router.query.id)).catch((errors) => setErrors(errors));
    }


    useEffect(() => {
        if (subscription) {
            setSelectedFrequency(subscription.frequency);
            setTitle(subscription.title);
            setAmount(subscription.amount);
            setSubscribedAt(subscription.subscribed_at ?? '');
            setPaymentAt(subscription.payment_at ?? '');
        }
    }, [subscription]);

    return (
        <AppLayout
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Edit Subscription {subscription?.title}
                </h2>
            }>
            <Head>
                <title>Sabusu - Edit Subscription {subscription?.title}</title>
            </Head>

            <Container>{!isLoading ?
                <form onSubmit={handleFormSubmit}>
                    <div className="flex flex-row justify-between mb-4">
                        <H2>Complete your subscription</H2>
                        <Button type={"button"} onClick={() => router.push('/subscriptions/' + router.query.id)}>{"<"} Back</Button>
                    </div>
                    <div className="flex flex-col gap-8">
                        <div>
                            <H3 className="mb-2">Frequency</H3>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                {frequencies.map(frequency => (<BlockButton
                                    key={frequency}
                                    onClick={() => setSelectedFrequency(frequency)}
                                    className={selectedFrequency === frequency ? "border-2 border-primary" : ""}>
                                    <img
                                        className="h-24 w-24" src={API_ROUTE + "images/frequency/" + frequency + ".png"}
                                        alt={frequencyEnum[frequency].title}
                                    />
                                    {frequencyEnum[frequency].title}
                                </BlockButton>))}
                                <input hidden={true} defaultValue={selectedFrequency} />
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4 flex-grow">
                            <div className="col-span-1 flex flex-col gap-4">
                                <div className="md:w-1/2">
                                    <H3 className="mb-2 w-full">Title</H3>
                                    <p className="text-gray-500 w-full">
                                        I'm a little desc
                                    </p>
                                    <Input
                                        className="p-3 bg-transparent border shadow-none w-full"
                                        value={title}
                                        required={true}
                                        onChange={event => setTitle(event.target.value)}
                                    />
                                </div>
                                <div className="md:w-1/2">
                                    <H3 className="mb-2 w-full">Amount</H3>
                                    <p className="text-gray-500 w-full">
                                        I'm a little desc
                                    </p>
                                    <div className="text-lg ">
                                        <Input
                                            className="p-3 bg-transparent border shadow-none w-full"
                                            value={amount}
                                            required={true}
                                            onChange={event => setAmount(event.target.value)}
                                        />
                                        €/
                                        {selectedFrequency ? frequencyEnum[selectedFrequency].title : null}
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-1 flex flex-col gap-4">
                                <div className="md:w-1/2">
                                    <H3 className="mb-2 w-full">Subscription date</H3>
                                    <p className="text-gray-500 w-full">
                                        I'm a little desc
                                    </p>
                                    <Input
                                        type="date"
                                        className="p-3 bg-transparent border shadow-none w-full"
                                        value={subscribedAt}
                                        onChange={event => setSubscribedAt(event.target.value)}
                                    />
                                </div>
                                <div className="md:w-1/2">
                                    <H3 className="mb-2 w-full">Next payment date</H3>
                                    <p className="text-gray-500 w-full">
                                        I'm a little desc
                                    </p>
                                    <Input
                                        type="date"
                                        className="p-3 bg-transparent border shadow-none w-full"
                                        value={paymentAt}
                                        onChange={event => setPaymentAt(event.target.value)}
                                    />
                                </div>
                            </div>
                        </div>
                        <Button className="w-fit py-4 px-8 text-lg" type={"submit"}>
                            Edit
                        </Button>
                    </div>
                    {errors ? <ErrorsModal errors={errors} close={() => setErrors(null)} /> : null}
                </form>
                : <Loader />}</Container>
        </AppLayout>
    );
}

export default edit;

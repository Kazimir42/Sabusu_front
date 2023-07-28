import React, { useEffect, useState } from "react";
import AppLayout from "@/components/Layouts/AppLayout";
import Head from "next/head";
import Container from "@/components/Container";
import Loader from "@/components/Loader";
import { fetchCategories } from "@/api/categories";
import { fetchSuppliers } from "@/api/suppliers";
import SubscriptionForm from "@/components/Pages/Subscriptions/SubscriptionForm";
import SupplierSelector from "@/components/Pages/Subscriptions/SupplierSelector";
import CategorySelector from "@/components/Pages/Subscriptions/CategorySelector";
import { createSubscription } from "@/api/subscriptions";
import { useRouter } from "next/router";

function Add() {
    const [categories, setCategories] = useState([]);
    const [suppliers, setSuppliers] = useState([]);
    const [frequencies] = useState([1, 2, 3, 4]);

    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedSupplier, setSelectedSupplier] = useState(null);
    const [selectedFrequency, setSelectedFrequency] = useState(null);
    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState("");
    const [subscribedAt, setSubscribedAt] = useState("");
    const [paymentAt, setPaymentAt] = useState("");

    const [isLoading, setIsLoading] = useState(true);

    const router = useRouter()

    useEffect(() => {
        fetchCategories()
            .then(setCategories)
            .then(() => setIsLoading(false));
    }, []);

    useEffect(() => {
        if (selectedCategory) {
            setIsLoading(true);
            fetchSuppliers(selectedCategory.id)
                .then(setSuppliers)
                .then(() => setIsLoading(false));
        }
    }, [selectedCategory]);

    function handleFormSubmit(event) {
        event.preventDefault();

        const subscription = {
            category_id: selectedCategory.id,
            supplier_id: selectedSupplier.id,
            frequency: selectedFrequency,
            title: title,
            amount: amount,
            subscribed_at: subscribedAt,
            payment_at: paymentAt,
        }

        createSubscription(subscription)
            .then(() => router.push('/dashboard'))
    }

    return (<AppLayout
        header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">
            Add Subscription
        </h2>}>
        <Head>
            <title>Sabusu - Subscriptions</title>
        </Head>

        <Container>
            {!isLoading ? (<>
                {!selectedCategory ?
                    <CategorySelector categories={categories} setSelectedCategory={setSelectedCategory} /> : null}
                {selectedCategory && !selectedSupplier ? (
                    <SupplierSelector suppliers={suppliers} setSelectedSupplier={setSelectedSupplier} />) : null}
                {selectedCategory && selectedSupplier ? (
                    <SubscriptionForm frequencies={frequencies} selectedFrequency={selectedFrequency}
                                      setSelectedFrequency={setSelectedFrequency} title={title} setTitle={setTitle}
                                      amount={amount} setAmount={setAmount} subscribedAt={subscribedAt}
                                      setSubscribedAt={setSubscribedAt} paymentAt={paymentAt}
                                      setPaymentAt={setPaymentAt} handleFormSubmit={handleFormSubmit}/>
                ) : null}
            </>) : (<Loader />)}
        </Container>
    </AppLayout>);
}

export default Add;

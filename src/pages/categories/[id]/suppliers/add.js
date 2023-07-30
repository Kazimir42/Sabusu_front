import React, { useState } from "react";
import AppLayout from "@/components/Layouts/AppLayout";
import Head from "next/head";
import Container from "@/components/Container";
import { useRouter } from "next/router";
import { createSupplier } from "@/api/suppliers";
import H2 from "@/components/H2";
import Button from "@/components/Button";
import H3 from "@/components/H3";
import Input from "@/components/Input";
import ErrorsModal from "@/components/Pages/ErrorsModal";

function Add() {
    const router = useRouter();

    const [errors, setErrors] = useState(null);

    const [title, setTitle] = useState("");
    const [image, setImage] = useState(null);

    function handleImageChange(event) {
        const file = event.target.files[0];
        setImage(file);
    }

    function handleFormSubmit(event) {
        event.preventDefault();

        const formData = new FormData();
        formData.append("title", title);
        formData.append("image", image);

        createSupplier(router.query.id, formData)
            .then(() => router.push({ pathname: "/subscriptions/add", query: { categoryId: router.query.id } })).catch((errors) => setErrors(errors));
    }

    return (<AppLayout
        header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">
            Add supplier
        </h2>}>
        <Head>
            <title>Sabusu - Subscriptions</title>
        </Head>

        <Container>
            <div className="flex flex-row justify-between mb-4">
                <H2>Create new supplier</H2>
                <Button type={"button"} onClick={() => router.back()}>{"<"} Back</Button>
            </div>
            <form onSubmit={handleFormSubmit}>
                <div className="flex flex-col gap-8">
                    <div className="w-1/2">
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
                    <div className="w-1/2">
                        <input type="file" onChange={handleImageChange} />
                    </div>
                    <Button className="w-fit py-4 px-8 text-lg" type={"submit"}>
                        Create
                    </Button>
                </div>
            </form>
            {errors ? <ErrorsModal errors={errors} close={() => setErrors(null)} /> : null}
        </Container>
    </AppLayout>);
}

export default Add;

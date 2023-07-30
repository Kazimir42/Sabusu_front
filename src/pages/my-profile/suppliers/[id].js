import React, { useEffect, useState } from "react";
import AppLayout from "@/components/Layouts/AppLayout";
import Head from "next/head";
import Container from "@/components/Container";
import Loader from "@/components/Loader";
import { useRouter } from "next/router";
import H1 from "@/components/H1";
import { API_ROUTE } from "@/api/api";
import Button from "@/components/Button";
import DeleteModal from "@/components/Pages/DeleteModal";
import { deleteSupplierForUser, fetchSupplierForUser } from "@/api/suppliers";
import { useAuth } from "@/hooks/auth";
import H2 from "@/components/H2";

function Id() {
    const [supplier, setSupplier] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const router = useRouter();
    const { user } = useAuth({ middleware: "auth" });

    useEffect(() => {
        if (router.query.id && user) {
            fetchSupplierForUser(user.id, router.query.id).then(setSupplier).then(setIsLoading);
        }
    }, [router.query.id, user]);

    useEffect(() => {
        if (router.query.showDeleteModal) {
            console.log(router.query.showDeleteModal);
        }
    }, [router.query.showDeleteModal]);

    function destroy() {
        deleteSupplierForUser(user.id, router.query.id).then(() => router.push("/my-profile"));
    }

    return (
        <AppLayout
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Supplier {supplier?.title}
                </h2>
            }>
            <Head>
                <title>Sabusu - Supplier {supplier?.title}</title>
            </Head>

            <Container>{!isLoading ?
                <>

                    <div className="flex flex-row justify-between mb-4">
                        <H2>Your supplier</H2>
                        <Button type={"button"} onClick={() => router.push('/my-profile/')}>{"<"} Back</Button>
                    </div>
                    <div className={"flex flex-row gap-8"}>
                        <div className=" ">
                            <img
                                className="h-40 w-40 md:h-64 md:w-64 inline object-contain"
                                src={API_ROUTE + (supplier.medias[0]?.path ?? "svg/puzzle.svg")}
                                alt={supplier.medias[0]?.title}
                            />
                        </div>
                        <div className="flex flex-col gap-2 my-auto ">
                            <H1>{supplier?.title}</H1>
                            <div className="mt-4 flex flex-row gap-2">
                                <Button className="w-fit" type={"submit"}
                                        onClick={() => router.push("/my-profile/suppliers/" + router.query.id + "/edit")}>
                                    Edit
                                </Button>
                                <Button className="w-fit bg-secondary hover:bg-secondary-dark" type={"submit"}
                                        onClick={() => router.push("/my-profile/suppliers/" + router.query.id + "?showDeleteModal=true")}>
                                    Delete
                                </Button>
                            </div>
                        </div>
                        {router.query.showDeleteModal ? <DeleteModal delete={() => destroy()}
                                                                     description={"You will lost all your linked subscriptions"}
                                                                     cancel={() => router.push("/my-profile/suppliers/" + router.query.id)} /> : null}
                    </div>
                </>
                : <Loader />}</Container>
        </AppLayout>
    );
}

export default Id;

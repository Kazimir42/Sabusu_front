import AppLayout from "@/components/Layouts/AppLayout";
import Head from "next/head";
import Container from "@/components/Container";
import H2 from "@/components/H2";
import { useAuth } from "@/hooks/auth";
import { useEffect, useState } from "react";
import { fetchCategoriesForUser } from "@/api/categories";
import { fetchSuppliersForUser } from "@/api/suppliers";
import CategoriesList from "@/components/Pages/MyProfile/CategoriesList";
import SuppliersList from "@/components/Pages/MyProfile/SuppliersList";

const MyProfile = () => {
    const { user } = useAuth({ middleware: "auth" });

    const [categories, setCategories] = useState([]);
    const [suppliers, setSuppliers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (user) {
            fetchCategoriesForUser(user.id).then((result) => {
                setCategories(result);
            }).then(setIsLoading);

            fetchSuppliersForUser(user.id).then((result) => {
                setSuppliers(result);
            }).then(setIsLoading);
        }
    }, [user]);

    return (
        <AppLayout
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    My profile
                </h2>
            }>
            <Head>
                <title>Sabusu - Dashboard</title>
            </Head>

            <Container className={"flex flex-col gap-4"}>
                <div className="flex flex-row justify-between mb-4">
                    <H2>{user?.name}</H2>
                </div>
                <CategoriesList categories={categories} />
                <SuppliersList suppliers={suppliers} />
            </Container>
        </AppLayout>
    );
};

export default MyProfile;

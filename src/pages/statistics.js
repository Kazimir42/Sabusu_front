import AppLayout from "@/components/Layouts/AppLayout";
import Head from "next/head";
import { useEffect, useState } from "react";
import Container from "@/components/Container";
import Loader from "@/components/Loader";

const Index = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        //fetchStatistics().then((result) => {console.log(result)}).then(setIsLoading);
    }, []);


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
                        <>
                            Statistics
                        </>
                    )
                    : <Loader />
                }
            </Container>
        </AppLayout>
    );
};

export default Index;

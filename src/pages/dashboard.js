import AppLayout from "@/components/Layouts/AppLayout";
import Head from "next/head";
import Container from "@/components/Container";
import Block from "@/components/Block";

const Dashboard = () => {
    return (
        <AppLayout
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Dashboard
                </h2>
            }>
            <Head>
                <title>Sabusu - Dashboard</title>
            </Head>

            <Container>
                <div className={"grid grid-cols-3 gap-4"}>
                    <Block>
                        1
                    </Block>
                    <Block>
                        2
                    </Block>
                    <Block>
                        3
                    </Block>
                </div>
            </Container>
        </AppLayout>
    );
};

export default Dashboard;

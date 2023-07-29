import AppLayout from "@/components/Layouts/AppLayout";
import Head from "next/head";
import Container from "@/components/Container";
import H2 from "@/components/H2";
import { useAuth } from "@/hooks/auth";
import H3 from "@/components/H3";

const MyProfile = () => {
    const { user } = useAuth({ middleware: 'auth' })

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

            <Container className={'flex flex-col gap-4'}>
                <div className='flex flex-row justify-between mb-4'>
                    <H2>{user.name}</H2>
                </div>

                <div>
                    <H3 className="mb-2">Your categories</H3>
                    todo: here
                </div>
            </Container>
        </AppLayout>
    );
};

export default MyProfile;

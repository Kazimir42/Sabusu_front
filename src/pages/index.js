import Head from "next/head";
import { useAuth } from "@/hooks/auth";
import GuestLayout from "@/components/Layouts/GuestLayout";
import H1 from "@/components/H1";
import Button from "@/components/Button";
import { useRouter } from "next/router";

export default function Home() {
    const { user } = useAuth({ middleware: "guest" });
    const router = useRouter();

    return (
        <GuestLayout className={"h-screen flex flex-col"}>
            <Head>
                <title>Sabusu</title>
            </Head>

            <div className={"mx-auto my-auto justify-center items-center flex flex-col gap-4"}>
                <H1 className={"text-primary text-7xl"}>Sabusu</H1>
                <p className="text-gray-500 w-full text-center text-2xl">
                    Manage your subscriptions.
                </p>
                <div className={"flex flex-row gap-2 mt-8"}>
                    <Button onClick={() => router.push('login')} className={""}>Login</Button>
                    <Button onClick={() => router.push('register')} className={""}>Register</Button>
                </div>
            </div>
        </GuestLayout>
    );
}

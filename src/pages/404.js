import GuestLayout from "@/components/Layouts/GuestLayout";
import H1 from "@/components/H1";
import Button from "@/components/Button";
import { useRouter } from "next/router";

function NotFoundPage() {
    const router = useRouter();

    return (
        <GuestLayout className={"h-screen flex flex-col"}>
            <div className={"mx-auto my-auto justify-center items-center flex flex-col gap-4"}>
                <H1 className={"text-primary text-7xl"}>404</H1>
                <Button onClick={() => router.back()} className={'mx-auto text-center'}>{'<'} Back</Button>
            </div>
        </GuestLayout>
    );
}

export default NotFoundPage;

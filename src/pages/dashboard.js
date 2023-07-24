import AppLayout from '@/components/Layouts/AppLayout'
import Head from 'next/head'
import Container from '@/components/Container'

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
                <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    <div className="p-6 bg-white border-b border-gray-200">
                        You're logged in!
                    </div>
                </div>
            </Container>
        </AppLayout>
    )
}

export default Dashboard

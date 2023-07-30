import Head from 'next/head'

const GuestLayout = (props) => {
    return (
        <div>
            <Head>
                <title>Laravel</title>
            </Head>

            <div className={"font-sans text-gray-900 antialiased " + props.className}>
                {props.children}
            </div>
        </div>
    )
}

export default GuestLayout

import Block from "@/components/Block";

const AuthCard = ({ logo, children }) => (
    <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100">
        <div>{logo}</div>

        <Block className={'w-96 p-6 bg-white hover:border-gray-300'}>
            {children}
        </Block>
    </div>
)

export default AuthCard

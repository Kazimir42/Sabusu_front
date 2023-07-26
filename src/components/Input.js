const Input = ({ disabled = false, className, ...props }) => (
    <input
        disabled={disabled} type={props.type ?? 'text'}
        className={`${className} rounded-md shadow-sm border-gray-300 focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50`}
        {...props}
    />
)

export default Input

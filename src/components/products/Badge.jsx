import clsx from "clsx"
const Badge = ({ text, color }) => {
    return (
        <div className={clsx("rounded-xl py-1 px-4 absolute text-lg font-medium shadow-md text-white flex", color)}>
            {text}
        </div>
    )
}
export default Badge
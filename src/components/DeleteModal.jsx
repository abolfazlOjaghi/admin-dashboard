import DeleteButton from "./ui/DeleteButton"

const DeleteModal = ({ handleDelete, cancel,  item="item" }) => {
    return (
        <section className="w-screen h-screen bg-black/50 inset-0 fixed z-50 flex items-center justify-center" onClick={e => e.stopPropagation()}>
            <div className="dark:bg-zinc-900 bg-gray-100 rounded-xl p-6 space-y-6">
                <h4 className="text-xl">Are you sure you want to delete this {item}?</h4>
                <div className="flex items-center gap-x-3 w-full *:flex-1">
                    <button className="cursor-pointer bg-purple-700 rounded-xl transition-all duration-75 py-1.5 border-2 border-purple-700 text-lg hover:dark:bg-zinc-900 hover:bg-gray-100 font-medium hover:text-purple-700" onClick={cancel}>
                        Cancel
                    </button>
                    <DeleteButton click={handleDelete}>Delete</DeleteButton>
                </div>
            </div>
        </section>
    )
}
export default DeleteModal
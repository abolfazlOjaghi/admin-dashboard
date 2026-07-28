const UserProfile = () => {
    return (
        <div className="flex justify-center items-center gap-x-2">
            <div className="font-semibold">
                <p className="text-lg dark:text-white">Emilia Watson</p>
                <p className="text-gray-600 text-right dark:text-gray-300">Admin</p>
            </div>
            <div className="size-16 rounded-full overflow-hidden border-2 border-mist-300">
                <img src="https://upload.wikimedia.org/wikipedia/en/d/d7/Random_person_image.png" alt="brad pit" />
            </div>
        </div>
    )
}
export default UserProfile
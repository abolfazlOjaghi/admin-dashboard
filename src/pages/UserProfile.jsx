import { useParams } from "react-router"
import { useFetch } from "../hooks/useFetch"
import { getUserById } from "../services/requests/users"
const UserProfile = () => {
    const { userId } = useParams()
    const { data : user } = useFetch(() => getUserById(userId), ["user", userId])
    return (
        <div className="page">
            <section className="bg-gray-100 dark:bg-zinc-950 rounded-xl py-8 px-6">
                <div className="flex flex-col items-center justify-center">
                    <img src={user?.image} alt="" className="rounded-full overflow-hidden size-20 border-2 border-gray-500" />
                    <p className="text-lg font-medium">{user?.firstName} {user?.lastName}</p>
                    <span className="text-gray-500 font-semibold">@{user?.username}</span>
                </div>
                <div className="*:space-y-4 space-y-4">
                    <div>
                        <h3>Personal Information</h3>
                        <p>Email : <span>{user?.email}</span></p>
                        <p>Password : <span>{user?.password}</span></p>
                        <p>Phone : <span>{user?.phone}</span></p>
                        <p>Date Of Birth : <span>{user?.birthDate}</span></p>
                        <p>Age : <span>{user?.age}</span></p>
                    </div>
                    <div>
                        <h3>Address</h3>
                        <p>Country : <span>{user?.address.country}</span></p>
                        <p>State : <span>{user?.address.state}</span></p>
                        <p>City : <span>{user?.address.city}</span></p>
                        <p>Postal Code : <span>{user?.address.postalCode}</span></p>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default UserProfile
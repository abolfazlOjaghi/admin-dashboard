import { useParams } from "react-router"
import { useFetch } from "../../hooks/useFetch"
import { getUserById } from "../../services/requests/users"
import { personalInfoFields, addressFields } from "../../data/userInfoFields"
import InfoRow from "./components/InfoRow"
import BackButton from "../../components/ui/BackButton"
const UserProfile = () => {
    const { userId } = useParams()
    const { data : user } = useFetch(() => getUserById(userId), ["user", userId])
    return (
        <div className="page space-y-3">
            <BackButton/>
            <section className="bg-gray-100 dark:bg-zinc-950 rounded-xl py-8 px-16">
                <div className="flex flex-col items-center justify-center">
                    <img src={user?.image} alt="" className="rounded-full overflow-hidden size-20 border-2 border-gray-500" />
                    <p className="text-lg font-medium">{user?.firstName} {user?.lastName}</p>
                    <span className="text-gray-500 font-semibold">@{user?.username}</span>
                </div>
                <div className="*:space-y-4 space-y-4">
                    <div>
                        <h3>Personal Information</h3>
                        {
                            personalInfoFields.map(info => {
                                return (
                                    <InfoRow label={info.label} value={user?.[info.key]}/>
                                )
                            })
                        }
                    </div>
                    <div>
                        <h3>Address</h3>
                        {
                           addressFields.map(address => {
                            return (
                                <InfoRow label={address.label} value={user?.address[address.key]}/>
                            )
                           }) 
                        }
                    </div>
                </div>
            </section>
        </div>
    )
}
export default UserProfile
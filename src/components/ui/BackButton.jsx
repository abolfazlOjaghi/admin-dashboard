import { ArrowLeft } from "lucide-react"
import { useNavigate } from "react-router"
const BackButton = () => {
    const navigate = useNavigate()
    return (
        <button className="flex items-center gap-x-1.5 rounded-lg cursor-pointer bg-blue-600 px-4 py-1.5 text-white hover:bg-blue-700" onClick={() => navigate(-1)}><ArrowLeft />Back</button>
    )
}
export default BackButton
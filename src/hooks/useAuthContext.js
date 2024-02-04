import { useContext } from "react"
import { AuthContext } from "../provider/AuthProvider"

export const useAuthContext = () => {
    const context = useContext(AuthContext)
    return context;
}
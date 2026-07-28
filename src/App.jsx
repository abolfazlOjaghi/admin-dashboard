import { RouterProvider } from "react-router"
import routes from "./routes"
import { ThemeProvider } from "./context/ThemeContext"
const App = () => {
  return (
    <ThemeProvider><RouterProvider router={routes}/></ThemeProvider>
  )
}
export default App
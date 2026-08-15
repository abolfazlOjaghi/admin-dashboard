import { RouterProvider } from "react-router"
import routes from "./routes"
import { ThemeProvider } from "./context/ThemeContext"
import { SkeletonTheme } from "react-loading-skeleton"
const App = () => {
  return (
      <ThemeProvider>
      <SkeletonTheme
        baseColor="#6a7282"
        highlightColor="#f3f4f6"
      >
        <RouterProvider router={routes} />
      </SkeletonTheme>
    </ThemeProvider>
  )
}
export default App
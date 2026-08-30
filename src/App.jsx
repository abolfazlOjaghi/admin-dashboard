import { RouterProvider } from "react-router";
import routes from "./routes";
import { ThemeProvider } from "./context/ThemeContext";
import { SkeletonTheme } from "react-loading-skeleton";
import { Toaster } from "sonner";
import { AuthProvider } from "./context/AuthContext";
const App = () => {
  return (
    <ThemeProvider>
      <AuthProvider>
        <SkeletonTheme baseColor="#6a7282" highlightColor="#f3f4f6">
          <Toaster position="bottom-left" richColors />
          <RouterProvider router={routes} />
        </SkeletonTheme>
      </AuthProvider>
    </ThemeProvider>
  );
};
export default App;

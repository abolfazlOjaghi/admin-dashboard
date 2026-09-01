import { Lock } from "lucide-react";
import Input from "../../components/ui/Input";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "../../validators/loginValidator";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import { toast } from "sonner";
import LoginGuide from "./elements/LoginGuide";
import { USERNAME, PASSWORD } from "../../data/constans";
const Login = () => {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue
  } = useForm({
    resolver: zodResolver(loginSchema),
  });
  const { mutate, isPending } = useMutation({
    mutationFn: async (formData) => {
      const result = await login(formData);
      return result;
    },
    onSuccess: () => {
      navigate("/", { replace: true });
    },
    onError: () => {
      toast.error("Invalid username or password");
    },
  });
  const handleAutofill = () => {
    setValue("username", USERNAME)
    setValue("password", PASSWORD)
  }
  const handlesubmitLoginForm = data => mutate(data)
  return (
    <section className="h-screen w-screen flex justify-center items-center dark:bg-black bg-gray-50 px-4 dark:text-white flex-col gap-y-3">
      <div className="w-full max-w-sm bg-white dark:bg-zinc-950 rounded-2xl shadow-sm border border-gray-100 dark:border-zinc-800 p-8 space-y-6">
        <div className="flex flex-col items-center gap-y-3 text-center">
          <div className="bg-blue-600/10 text-blue-600 rounded-full p-3">
            <Lock size={26} />
          </div>
          <div>
            <h1 className="text-xl font-bold">Welcome back</h1>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              Sign in to access your dashboard
            </p>
          </div>
        </div>

        <form className="space-y-1.5" onSubmit={handleSubmit(handlesubmitLoginForm)}>
          <Input
            placeholder="Enter your username"
            label="Username"
            {...register("username")}
            error={errors.username?.message}
            reserveErrorSpace
          />
          <Input
            placeholder="Enter your password"
            label="Password"
            type="password"
            {...register("password")}
            error={errors.password?.message}
            reserveErrorSpace
          />
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-xl py-2.5 font-medium cursor-pointer transition-colors mt-2 disabled:bg-gray-500"
            disabled={isPending}
          >
            {isPending ? "Signing in..." : "Sign in"}
          </button>
        </form>
      </div>
      <LoginGuide autofill={handleAutofill}/>
    </section>
  );
};
export default Login;

import { TextInput, TextLink } from "@/components";
import { signIn } from "@/services/auth";
import { cn } from "@/utilities";
import { buttonFilledVariants } from "@/variants";
import { SubmitHandler, useForm } from "react-hook-form";
import Cookies from "js-cookie";
import { Navigate, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "@/contexts";
import { User } from "@/entities";

interface IFormInput {
  username: string;
  password: string;
}

export function SignInPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const navigate = useNavigate();
  const userContext = useContext(UserContext);

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    const response = await signIn(data.username, data.password);

    Cookies.set("access_token", response.access_token);
    Cookies.set("refresh_token", response.refresh_token);
    Cookies.set("user_id", response.user.id);

    userContext?.setUser(new User(response.user));

    navigate("/");
  };

  if (userContext?.user) {
    <Navigate to="/" replace />;
  }

  return (
    <section
      id="sign-in-section"
      className="flex min-h-screen place-content-center"
    >
      <div className="flex max-w-sm flex-1 flex-col justify-center">
        <h1 className="text-4xl font-bold">Sign in</h1>
        <div className="mb-2 text-lg">
          Start your financial journey with Saifu
        </div>
        <form
          className="mb-7 flex flex-col gap-2"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div id="username-input-group" className="flex flex-col">
            <label id="username-label" htmlFor="username">
              Username:
            </label>
            <TextInput
              {...register("username", {
                required: { value: true, message: "Username must be filled" },
                minLength: {
                  value: 5,
                  message: "Username must be at least 5 characters long",
                },
                maxLength: {
                  value: 15,
                  message: "Username must not exceed 15 characters long",
                },
                pattern: {
                  value: /^[a-z0-9._]+$/,
                  message:
                    "Username must only contain lowercase letters, numbers, dots, and underlines",
                },
              })}
              id="username"
              type="text"
              autoComplete="off"
              aria-labelledby="username-label"
              color="primary"
              size="small"
              isError={Boolean(errors.username)}
            />
            <small
              className={cn(
                errors.username
                  ? "text-danger-600 dark:text-danger-200"
                  : "text-inherit",
              )}
            >
              {errors.username
                ? errors.username.message
                : "Enter your username"}
            </small>
          </div>
          <div id="password-input-group" className="flex flex-col">
            <label id="password-label" htmlFor="password">
              Password:
            </label>
            <TextInput
              {...register("password", {
                required: { value: true, message: "Password must be filled" },
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters long",
                },
                maxLength: {
                  value: 30,
                  message: "Password must not exceed 30 characters long",
                },
                pattern: {
                  value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).+$/,
                  message:
                    "Password must contain at least one uppercase, one lowercase, one number, and one special character",
                },
              })}
              id="password"
              type="password"
              autoComplete="off"
              aria-labelledby="password-label"
              color="primary"
              size="small"
              isError={Boolean(errors.password)}
            />
            <small
              className={cn(
                errors.password
                  ? "text-danger-600 dark:text-danger-200"
                  : "text-inherit",
              )}
            >
              {errors.password
                ? errors.password.message
                : "Enter your password"}
            </small>
          </div>
          <button className={cn(buttonFilledVariants())} type="submit">
            Sign In
          </button>
        </form>
        <div className="text-center">
          Don't have an account?{" "}
          <TextLink className="font-bold" to="/signup">
            Sign up
          </TextLink>
        </div>
      </div>
    </section>
  );
}

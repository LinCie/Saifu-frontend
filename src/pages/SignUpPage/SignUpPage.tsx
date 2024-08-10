import { Button, TextInput, TextLink } from "@/components";
import { cn, inOneHour, inOneMonth } from "@/utilities";
import { SubmitHandler, useForm } from "react-hook-form";
import Cookies from "js-cookie";
import { signUp } from "@/services/auth";
import { Navigate, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "@/contexts";
import { User } from "@/entities";

interface IFormInput {
  username: string;
  password: string;
  confirm: string;
}

export function SignUpPage() {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const navigate = useNavigate();
  const userContext = useContext(UserContext);

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    const response = await signUp(data.username, data.password);

    Cookies.set("access_token", response.access_token, {
      sameSite: "Lax",
      expires: inOneHour,
      secure: true,
    });
    Cookies.set("refresh_token", response.refresh_token, {
      sameSite: "Lax",
      expires: inOneMonth,
      secure: true,
    });
    Cookies.set("user_id", response.user.id, {
      sameSite: "Lax",
      secure: true,
    });

    userContext?.setUser(new User(response.user));

    navigate("/");
  };

  const isSimilarPassword = (password: string) => {
    return password === watch("password") || "Password must be similar";
  };

  if (userContext?.user) {
    return <Navigate to="/" replace />;
  }

  return (
    <section
      id="sign-in-section"
      className="flex min-h-screen place-content-center"
    >
      <div className="flex max-w-sm flex-1 flex-col justify-center">
        <h1 className="text-4xl font-bold">Sign up</h1>
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
                errors.username ? "text-destructive" : "text-inherit",
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
                errors.password ? "text-destructive" : "text-inherit",
              )}
            >
              {errors.password
                ? errors.password.message
                : "Enter your password"}
            </small>
          </div>
          <div id="password-input-group" className="flex flex-col">
            <label id="confirm-label" htmlFor="confirm">
              Confirm Password:
            </label>
            <TextInput
              {...register("confirm", {
                required: {
                  value: true,
                  message: "Confirm password must be filled",
                },
                validate: isSimilarPassword,
              })}
              id="confirm"
              type="password"
              autoComplete="off"
              aria-labelledby="confirm-label"
              color="primary"
              size="small"
              isError={Boolean(errors.confirm)}
            />
            <small
              className={cn(
                errors.confirm ? "text-destructive" : "text-inherit",
              )}
            >
              {errors.confirm
                ? errors.confirm.message
                : "Confirm your password"}
            </small>
          </div>
          <Button type="submit">Sign Up</Button>
        </form>
        <div className="text-center">
          Already have an account?{" "}
          <TextLink className="font-bold" to="/signin">
            Sign in
          </TextLink>
        </div>
      </div>
    </section>
  );
}

import {
  Button,
  Form,
  FormField,
  FormItem,
  FormLabel,
  TextLink,
  FormControl,
  FormDescription,
  FormMessage,
  Input,
} from "@/components";
import { signIn } from "@/services/auth";
import { storeCookieInfo } from "@/utilities";
import { useForm } from "react-hook-form";
import { Navigate, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "@/contexts";
import { User } from "@/entities";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  username: z
    .string()
    .min(5, "Username must be at least 5 characters long")
    .max(15, "Username must not exceed 15 characters long")
    .regex(
      /^[a-z0-9._]+$/,
      "Username must only contain lowercase letters, numbers, dots, and underlines",
    ),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters long")
    .max(30, "Password must not exceed 30 characters long")
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).+$/,
      "Password must contain at least one uppercase, one lowercase, one number, and one special character",
    ),
});

export function SignInPage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { username: "", password: "" },
  });

  const navigate = useNavigate();
  const userContext = useContext(UserContext);

  async function onSubmit(data: z.infer<typeof formSchema>) {
    const response = await signIn(data.username, data.password);

    storeCookieInfo({
      access_token: response.access_token,
      refresh_token: response.refresh_token,
      user_id: response.user.id,
    });

    userContext?.setUser(new User(response.user));

    navigate("/");
  }

  if (userContext?.user) {
    return <Navigate to="/" replace />;
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
        <Form {...form}>
          <form
            className="mb-7 flex flex-col gap-2"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Username:</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="johndoe"
                      autoComplete="off"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>Enter your username</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Password:</FormLabel>
                  <FormControl>
                    <Input type="password" {...field} />
                  </FormControl>
                  <FormDescription>Enter your password</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Sign In</Button>
          </form>
        </Form>
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

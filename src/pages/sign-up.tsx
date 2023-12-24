import type { NextPage } from "next";
import Head from "next/head";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button, ButtonLoading } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { ArrowLeftIcon } from "@radix-ui/react-icons";
import { checkIfApiError, trimmedString } from "@/lib/utils";
import { useRegisterUser } from "@/api/authentication-controller/authentication-controller";
import { useAppDispatch } from "@/lib/redux/hooks";
import { setAuthState } from "@/lib/redux/slices/authSlice";

const formSchema = z
  .object({
    email: z.string().email({ message: "Invalid Email" }),
    username: z
      .string()
      .min(4, { message: "Min 4 Chars Required" })
      .regex(/^[A-Za-z0-9_]*$/, "Only A-Z, 0-9 & _")
      .max(15, { message: "Max 15 Chars Allowed" }),
    password: z.string().min(8, { message: "Min 8 Chars Required" }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Does Not Match",
    path: ["confirmPassword"],
  });

const SignUpForm: React.FC = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { mutateAsync: register } = useRegisterUser();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const response = await register({
        data: {
          email: trimmedString(values.email),
          username: trimmedString(values.username),
          password: values.password,
        },
      });
      dispatch(
        setAuthState({
          status: "authenticated",
          credentials: {
            accessToken: response.data.accessToken,
            expiresAt: Date.parse(response.data.expiresAt),
            user: response.data.user,
          },
        }),
      );
      void router.push("/");
    } catch (error) {
      const apiError = checkIfApiError(error);
      if (!!apiError) {
        form.setError(apiError.subject as "email" | "username", {
          message: apiError.message,
        });
      }
      return;
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full max-w-[400px] space-y-8"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <div className="flex justify-between">
                <FormLabel>Email</FormLabel>
                <FormMessage />
              </div>
              <FormControl>
                <Input placeholder="tether@acme.ca" {...field} type="email" />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <div className="flex justify-between">
                <FormLabel>Username</FormLabel>
                <FormMessage />
              </div>
              <FormControl>
                <Input placeholder="username" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <div className="flex justify-between">
                <FormLabel>Password</FormLabel>
                <FormMessage />
              </div>
              <FormControl>
                <Input placeholder="********" {...field} type="password" />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <div className="flex justify-between">
                <FormLabel>Confirm Password</FormLabel>
                <FormMessage />
              </div>
              <FormControl>
                <Input placeholder="********" {...field} type="password" />
              </FormControl>
            </FormItem>
          )}
        />
        {form.formState.isSubmitting ? (
          <ButtonLoading size="lg" />
        ) : (
          <Button size="lg" type="submit">
            Sign Up
          </Button>
        )}
      </form>
    </Form>
  );
};

const SignUp: NextPage = ({}) => {
  return (
    <>
      <Head>
        <title>Tether - Sign Up</title>
      </Head>
      <main className="flex h-screen">
        <div className="hidden w-2/3 border-r bg-destructive hr:block"></div>
        <div className="flex w-full flex-col gap-8 p-8 hr:w-1/3">
          <Button variant="link" className="h-fit w-fit p-0" asChild>
            <Link href="/">
              <ArrowLeftIcon className="mr-2 h-5 w-5" />
              Back home
            </Link>
          </Button>
          <div className="flex flex-1 flex-col items-center justify-center gap-8">
            <h1 className="h1">Sign Up</h1>
            <SignUpForm />
            <Button
              variant="link"
              className="h-fit p-0 text-xs font-normal hr:text-sm"
              asChild
            >
              <Link href="/login">Already have an account? Login!</Link>
            </Button>
          </div>
        </div>
      </main>
    </>
  );
};
export default SignUp;

import type { NextPage } from "next";
import Head from "next/head";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import { useForm } from "react-hook-form";
import Link from "next/link";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useRouter } from "next/router";
import { ButtonLoading, Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeftIcon } from "@radix-ui/react-icons";

const formSchema = z.object({
  email: z.string().email({ message: "Invalid Email" }),
  password: z.string().min(1, { message: "Required" }),
});

const LoginForm: React.FC = () => {
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    // const response = await signIn("credentials", {
    //   redirect: false,
    //   email: values.email,
    //   password: values.password,
    // });
    // if (response?.ok) {
    //   if (
    //     router.query.callbackUrl &&
    //     typeof router.query.callbackUrl === "string"
    //   ) {
    //     void router.push(router.query.callbackUrl);
    //   } else {
    //     void router.push("/");
    //   }
    // } else {
    //   form.setError("email", {
    //     type: "manual",
    //     message: response?.error as string | undefined,
    //   });
    // }
  };

  return (
    <Form {...form}>
      <form
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full max-w-[400px] text-right"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="mb-8">
              <div className="flex justify-between">
                <FormLabel>Email</FormLabel>
                <FormMessage />
              </div>
              <FormControl>
                <Input placeholder="sloopy@acme.ca" {...field} type="email" />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem className="mb-2">
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
        <Button
          variant="link"
          className="mb-8 h-fit p-0 text-xs font-normal hr:text-sm"
          asChild
        >
          <Link href="/forgot-password">Forgot Password?</Link>
        </Button>
        {form.formState.isSubmitting ? (
          <ButtonLoading size="lg" />
        ) : (
          <Button size="lg" type="submit">
            Login
          </Button>
        )}
      </form>
    </Form>
  );
};

const Login: NextPage = ({}) => {
  return (
    <>
      <Head>
        <title>Tether - Login</title>
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
            <h1 className="h1">Login</h1>
            <LoginForm />
            <Button
              variant="link"
              className="h-fit p-0 text-xs font-normal hr:text-sm"
              asChild
            >
              <Link href="/sign-up">Don&apos;t have an account? Sign Up!</Link>
            </Button>
          </div>
        </div>
      </main>
    </>
  );
};

export default Login;

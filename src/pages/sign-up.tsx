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

const formSchema = z
  .object({
    email: z.string().email({ message: "Invalid Email" }),
    username: z
      .string()
      .min(4, { message: "Min 4 Chars Required" })
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

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    // try {
    //   const response = await signUp({
    //     email: calcTrimmedString(values.email),
    //     password: values.password,
    //   });
    //   if (!response.user) {
    //     form.setError("email", {
    //       type: "manual",
    //       message: response.error.message,
    //     });
    //     return;
    //   }
    //   await signIn("credentials", {
    //     redirect: false,
    //     email: values.email,
    //     password: values.password,
    //   });
    //   void router.replace("/");
    // } catch (error) {
    //   if (error instanceof TRPCClientError) {
    //     toast.error(`Error: ${error.message}`);
    //   }
    //   return;
    // }
  };

  return (
    <Form {...form}>
      <form
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
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

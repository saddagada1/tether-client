import Link from "next/link";
import { Button } from "./ui/button";
import { useAppSelector } from "@/lib/redux/hooks";
import { authPaths } from "@/lib/constants";
import { useRouter } from "next/router";

const Navbar: React.FC = ({}) => {
  const router = useRouter();
  const auth = useAppSelector((store) => store.auth);

  if (auth.status === "loading" || authPaths.includes(router.pathname))
    return null;

  return (
    <>
      <nav className="fixed left-0 top-0 z-40 flex w-full justify-between gap-4 bg-gradient-to-b from-background to-transparent px-6 py-4 hr:px-8 hr:py-6">
        <Link href="/" className="logo">
          tether
        </Link>
        {auth.status === "authenticated" && (
          <div className="flex">
            <Button variant="link" asChild>
              <Link href="/search">Search</Link>
            </Button>
            <Button variant="link" asChild>
              <Link
                href={router.pathname === "/profile" ? "/settings" : "/profile"}
              >
                {router.pathname === "/profile" ? "Settings" : "Profile"}
              </Link>
            </Button>
          </div>
        )}
        {auth.status === "unauthenticated" && (
          <>
            <Button variant="link" asChild>
              <Link href="/sign-up">Sign Up</Link>
            </Button>
            <Button variant="link" asChild>
              <Link href="/login">Login</Link>
            </Button>
          </>
        )}
      </nav>
      <div className="pt-24" />
    </>
  );
};

export default Navbar;

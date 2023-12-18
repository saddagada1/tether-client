import Link from "next/link";
import { Button } from "./ui/button";

const Navbar: React.FC = ({}) => {
  return (
    <nav className="fixed left-0 top-0 z-40 flex h-20 w-full justify-end gap-4 p-4">
      <Button variant="link" asChild className="text-lg">
        <Link href="/sign-up">Sign Up</Link>
      </Button>
      <Button variant="link" asChild className="text-lg">
        <Link href="/login">Login</Link>
      </Button>
    </nav>
  );
};

export default Navbar;

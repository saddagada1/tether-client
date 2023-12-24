import UserHeader from "@/components/userHeader";
import { useAppSelector } from "@/lib/redux/hooks";
import type { NextPage } from "next";
import Head from "next/head";

const Profile: NextPage = ({}) => {
  const auth = useAppSelector((store) => store.auth);

  if (!auth.credentials) return null;
  return (
    <>
      <Head>
        <title>Tether - Profile</title>
      </Head>
      <main className="pad-x">
        <UserHeader user={auth.credentials.user} />
        <p className="text-muted-foreground">
          You&apos;re not tethered to anyone.
        </p>
      </main>
    </>
  );
};

export default Profile;

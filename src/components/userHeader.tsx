import { type UserResponse } from "@/model";
import SafeImage from "./safeImage";
import { getRelativeTime } from "@/lib/utils";
import { Button } from "./ui/button";
import { CommitIcon } from "@radix-ui/react-icons";

interface UserHeaderProps {
  user: UserResponse;
  userActions?: boolean;
}

const UserHeader: React.FC<UserHeaderProps> = ({ user, userActions }) => {
  return (
    <section className="mt-8 flex flex-col items-center justify-center gap-2 p-8 hr:gap-4">
      <SafeImage
        width={150}
        url={user.image}
        alt={user.name ?? user.username}
      />
      <h1 className="title mt-4">{user.name ?? user.username}</h1>
      <p className="text-muted-foreground">{`@${
        user.username
      } - ${getRelativeTime(new Date(user.createdAt))}`}</p>
      {!!userActions && (
        <div className="mt-4 flex gap-4">
          <Button variant="secondary" className="rounded-full p-6">
            add to tether
          </Button>
          <Button variant="secondary" disabled className="rounded-full p-6">
            message
          </Button>
        </div>
      )}
    </section>
  );
};

export default UserHeader;

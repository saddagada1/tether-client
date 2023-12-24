import { ReloadIcon } from "@radix-ui/react-icons";

const Loading: React.FC = ({}) => {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center gap-4">
      <h1 className="text-5xl font-bold tracking-tight text-destructive hr:text-[10rem]">
        tether
      </h1>
      <p className="text-center text-sm font-medium hr:text-base">
        <ReloadIcon className="mr-2 inline-block h-4 w-4 animate-spin" />
        Please wait
      </p>
    </div>
  );
};

export default Loading;

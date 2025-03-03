import Image from "next/image";

const Loading = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <div className="relative h-32 w-32">
        <Image
          src="/loading.gif"
          alt="Loading..."
          fill
          className="object-contain"
          priority
        />
      </div>
    </div>
  );
};

export default Loading;

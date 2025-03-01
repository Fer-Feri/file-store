import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Skeleton = ({ className }) => {
  return <div className={`animate-pulse bg-gray-200 ${className}`} />;
};

// انواع مختلف Skeleton
export const CardSkeleton = () => (
  <Skeleton className="h-40 w-full rounded-md" />
);

export const BannerSkeleton = () => (
  <div className="flex cursor-pointer items-center justify-between gap-9 rounded-xl bg-gray-100 p-3 shadow-sm">
    <div className="flex flex-col gap-3">
      <Skeleton className="h-7 w-32 rounded" />
      <Skeleton className="h-5 w-40 rounded" />
    </div>
    <div className="relative h-[50px] w-[50px] overflow-hidden rounded-md">
      <Skeleton className="absolute inset-0" />
    </div>
  </div>
);

export const ProductSliderSkeleton = () => (
  <article className="h-full w-full max-w-[320px]">
    <Card className="flex h-full flex-col">
      <CardHeader className="flex-none">
        <div className="relative aspect-[4/3] w-full rounded-t-lg bg-gray-200"></div>
        <div className="mt-2 h-6 w-3/4 bg-gray-200"></div>
      </CardHeader>
      <CardContent className="flex flex-wrap gap-1">
        <div className="h-6 w-16 rounded bg-gray-200"></div>
        <div className="h-6 w-20 rounded bg-gray-200"></div>
        <div className="h-6 w-24 rounded bg-gray-200"></div>
      </CardContent>
      <CardFooter className="mt-auto flex items-center justify-between p-4">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-gray-200"></div>
          <div className="h-8 w-8 rounded-full bg-gray-200"></div>
        </div>
        <div className="flex items-center">
          <div className="h-8 w-8 rounded-full bg-gray-200"></div>
          <div className="h-6 w-24 rounded-l-none bg-gray-200"></div>
        </div>
      </CardFooter>
    </Card>
  </article>
);
export const GraphicSliderSkeleton = () => (
  <article className="h-full w-full max-w-[300px]">
    <Card className="flex h-full flex-col">
      <CardHeader className="flex-none">
        <div className="relative aspect-[4/3] w-full rounded-t-lg bg-gray-200"></div>
        <div className="mt-2 h-6 w-3/4 bg-gray-200"></div>
      </CardHeader>
      <CardContent className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <div className="h-5 w-16 bg-gray-200"></div>
          <div className="h-5 w-10 bg-gray-200"></div>
        </div>
        <div className="flex items-center justify-between">
          <div className="h-5 w-16 bg-gray-200"></div>
          <div className="h-5 w-24 bg-gray-200"></div>
        </div>
        <div className="flex items-center justify-between">
          <div className="h-5 w-16 bg-gray-200"></div>
          <div className="h-5 w-10 bg-gray-200"></div>
        </div>
        <div className="mt-10 flex gap-1">
          <div className="h-6 w-16 rounded bg-gray-200"></div>
          <div className="h-6 w-16 rounded bg-gray-200"></div>
          <div className="h-6 w-16 rounded bg-gray-200"></div>
        </div>
      </CardContent>
      <CardFooter className="mt-auto flex items-center justify-between p-4">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-gray-200"></div>
          <div className="h-8 w-8 rounded-full bg-gray-200"></div>
        </div>
        <div className="flex items-center">
          <div className="h-8 w-8 rounded-full bg-gray-200"></div>
          <div className="h-6 w-24 bg-gray-200"></div>
        </div>
      </CardFooter>
    </Card>
  </article>
);

export const ImageSkeleton = () => (
  <Skeleton className="h-[200px] w-full rounded-lg sm:h-[250px] md:h-[300px] lg:h-[350px]" />
);

export const TextSkeleton = () => <Skeleton className="h-4 w-3/4 rounded" />;

export default Skeleton;

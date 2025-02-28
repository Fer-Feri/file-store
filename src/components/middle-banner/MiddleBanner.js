import Image from "next/image";

const MiddleBanner = () => {
  return (
    <section className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-2">
      <Image
        src="/middle-banner/1.jpg"
        width={600}
        height={300}
        style={{ objectFit: "cover", borderRadius: "5px" }}
        priority
        alt="middle-banner-1"
      />
      <Image
        src="/middle-banner/2.jpg"
        width={600}
        height={400}
        style={{ objectFit: "cover", borderRadius: "5px" }}
        priority
        alt="middle-banner-2"
      />
    </section>
  );
};

export default MiddleBanner;

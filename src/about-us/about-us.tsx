import { useScroll } from "../components/providers/scroll-provider";
import { Typography } from "../components/typograhpy/typography";

export function AboutUs() {
  let { sectionRefs } = useScroll();
  return (
    <div className="w-full">
      <section
        id="about"
        ref={(el) => (sectionRefs.current["about"] = el as any)}
        className="text-white h-screen w-full bg-white grid place-content-center sticky top-0"
      >
        <div className="absolute bottom-0 left-0 right-0 top-0"></div>
        <Typography
          as="h1"
          className="2xl:text-7xl text-6xl px-8 font-extrabold text-center tracking-tight leading-[120%]"
        >
          About me
          <br />
          Scroll Please 👇
        </Typography>
      </section>
      <section className="bg-primary text-white grid grid-cols-2 place-content-center items-center h-screen sticky top-0 overflow-hidden">
        <h1 className="2xl:text-5xl text-4xl px-8 font-semibold text-center tracking-tight leading-[120%]">
          👋 Hey, I'm Filip—a 27-year-old software developer with a deep passion
          for building and creating. With a bachelor's degree in Telematics, I
          thrive on solving complex problems and crafting software that’s both
          efficient and scalable.
        </h1>
        <div className="flex justify-center w-full p-10">
          <img
            className="rounded-[100px] w-[50%] h-[50%]"
            src="/images/image-1.jpg"
            alt="filip-ivanusec"
          />
        </div>
      </section>
      <section className="bg-white text-primary border-2 border-primary grid grid-cols-2 place-content-center items-center h-screen sticky top-0 overflow-hidden">
        <div className="flex justify-center w-full p-10">
          <img
            className="rounded-[100px] w-[50%] h-[50%]"
            src="/images/image-2.jpg"
            alt="filip-ivanusec"
          />
        </div>
        <h1 className="2xl:text-5xl text-4xl px-8 font-semibold text-center tracking-tight leading-[120%]">
          I’ve worked on a variety of projects, from developing an e-commerce
          platform to building infrastructure and a development kit for internal
          tooling. Right now, I’m focused on frontend development with Next.js,
          leveraging server-side rendering to create high-performance
          applications.
        </h1>
      </section>
      <section className="bg-primary text-white grid grid-cols-2 place-content-center items-center h-screen sticky top-0 overflow-hidden">
        <h1 className="2xl:text-5xl text-5xl px-8 font-semibold text-center tracking-tight leading-[120%]">
          I'm all about continuous learning, experimenting with new
          technologies, and pushing the boundaries of what’s possible in
          software development. Let’s connect and build something awesome! 🚀
        </h1>
        <div className="flex justify-center w-full p-10">
          <img
            className="rounded-[100px] w-[50%] h-[50%]"
            src="/images/image-3.jpg"
            alt="filip-ivanusec"
          />
        </div>
      </section>
    </div>
  );
}

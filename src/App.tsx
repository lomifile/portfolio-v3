import { CardDisplay } from "./components/card-display/card-display";
import { Layout } from "./components/layout/layout";
import { useScroll } from "./components/providers/scroll-provider";
import { Typography } from "./components/typograhpy/typography";
import { Header } from "./header/header";
import { AboutUs } from "./about-us/about-us";
import { Projects } from "./projects/projects";
import { PdfReader } from "./components/pdf/pdf-reader";

export function App() {
  let { sectionRefs, scrollToSection } = useScroll();

  return (
    <Layout>
      <div
        id="home"
        ref={(el) => (sectionRefs.current["home"] = el as any)}
        className="min-h-screen w-full h-screen p-5 flex flex-col gap-10 lg:p-8 bg-primary lg:bg-transparent"
      >
        <Header />
        <div className="w-full lg:px-10 lg:py-8">
          <Typography
            as="h1"
            className="border-l-4 border-white lg:border-primary text-3xl font-bold px-10 text-white lg:text-dark-bg"
          >
            What I do?
          </Typography>
        </div>
        <div className="max-w-4xl">
          <Typography className="lg:p-10 text-sm lg:text-xl text-white lg:text-dark-bg">
            I have bachelors degree in telematics and working as software
            engineer for 3 years. Below you can find quick overview of
            technologies I use to create my projects. Want to know more about my
            experience and expertise? Check out my{" "}
            <span
              className="underline text-primary hover:cursor-pointer"
              onClick={() => scrollToSection("projects")}
            >
              portfolio
            </span>{" "}
            and{" "}
            <span
              className="underline text-primary hover:cursor-pointer"
              onClick={() => scrollToSection("resume")}
            >
              resume
            </span>
            .
          </Typography>
        </div>
        <CardDisplay />
      </div>
      <AboutUs />
      <div
        id="projects"
        ref={(el) => (sectionRefs.current["projects"] = el as any)}
        className="w-full lg:p-10 h-screen"
      >
        <Projects />
      </div>
      <section
        className="w-full mt-96 xl:mt-0 p-2 lg:p-10 h-screen bg-white"
        id="resume"
        ref={(el) => (sectionRefs.current["resume"] = el as any)}
      >
        <div className="w-full p-5">
          <Typography as="h1" className="text-5xl font-extrabold">
            Resume
          </Typography>
        </div>
        <PdfReader link="/cv.pdf" />
      </section>
    </Layout>
  );
}

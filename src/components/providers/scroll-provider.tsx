import {
  createContext,
  PropsWithChildren,
  RefObject,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

export interface ScrollcontextProps {
  activeSection: string | null;
  sectionRefs: RefObject<Record<string, HTMLDivElement | null>>;
  setActiveSection: (id: string) => void;
  scrollToSection: (id: string) => void;
}

const ScrollContext = createContext<ScrollcontextProps | null>(null);

export function ScrollProvider({ children }: PropsWithChildren) {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const sectionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        let mostVisible: string | null = null;
        let maxVisibleRatio = 0;

        entries.forEach((entry) => {
          const sectionId = entry.target.id;

          if (
            entry.isIntersecting &&
            entry.intersectionRatio > maxVisibleRatio
          ) {
            maxVisibleRatio = entry.intersectionRatio;
            mostVisible = sectionId;
          }
        });

        if (mostVisible) {
          setActiveSection(mostVisible);
        }
      },
      {
        threshold: 0.6,
        rootMargin: "-100px 0px 0px 0px",
      },
    );

    Object.values(sectionRefs.current).forEach((section) => {
      if (section) observer.observe(section);
    });

    const handleScroll = () => {
      // Manually check sticky sections
      Object.values(sectionRefs.current).forEach((section) => {
        if (!section) return;
        const rect = section.getBoundingClientRect();

        if (
          section.classList.contains("sticky") &&
          rect.top <= 100 &&
          rect.bottom >= 100
        ) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      Object.values(sectionRefs.current).forEach((section) => {
        if (section) observer.unobserve(section);
      });
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (id: string) => {
    sectionRefs.current[id]?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <ScrollContext.Provider
      value={{ activeSection, setActiveSection, scrollToSection, sectionRefs }}
    >
      {" "}
      {children}{" "}
    </ScrollContext.Provider>
  );
}

export function useScroll() {
  const context = useContext(ScrollContext);
  if (!context) {
    throw new Error("useScroll must be used within a ScrollProvider");
  }
  return context;
}

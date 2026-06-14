import {
  ArrowRight,
  Download,
  BookOpen,
  PenTool,
  Mic,
  Globe,
  GraduationCap,
  Users,
  Trophy,
  Quote,
  LampDesk,
  Brain,
  MessageSquare,
} from "lucide-react";

const stats = [
  { icon: GraduationCap, value: "2+", label: "Years Experience" },
  { icon: Users, value: "200+", label: "Students Taught" },
  { icon: BookOpen, value: "2+", label: "Courses Created" },
  { icon: Trophy, value: "3+", label: "Awards Won" },
];

const subjects = [
  {
    icon: BookOpen,
    title: "English Language",
    description: "Grammar, vocabulary, comprehension and communication skills.",
  },
  {
    icon: Globe,
    title: "English Literature",
    description: "Exploring poems, prose, drama and literary theories.",
  },
  {
    icon: PenTool,
    title: "Academic Writing",
    description: "Research, essays, citations and academic writing skills.",
  },
  {
    icon: Mic,
    title: "Public Speaking",
    description: "Build confidence and speak your ideas with impact.",
  },
];

const approach = [
  {
    icon: Brain,
    title: "Student Focused",
    text: "Every student is unique. I adapt to individual needs.",
  },
  {
    icon: MessageSquare,
    title: "Interactive Learning",
    text: "Engaging lessons, discussions and activities.",
  },
  {
    icon: Globe,
    title: "Real World Impact",
    text: "Practical skills for academic and real-life success.",
  },
];

const FloatingCube = ({ className = "" }) => (
  <div
    className={`absolute rounded-lg bg-linear-to-br from-orange-300 to-orange-600 shadow-[0_10px_25px_rgba(249,115,22,0.35)] opacity-80 ${className}`}
  />
);

const BookStack = () => {
  const books = ["ENGLISH LITERATURE", "Linguistics", "Coding"];

  return (
    <div className="space-y-2 ">
      {books.map((book, index) => (
        <div
          key={book}
          className="  border rounded-md border-white/5 bg-[#171717] px-4 py-2 text-[10px] font-medium tracking-wide text-gray-200 shadow-lg sm:text-xs"
          style={{ marginLeft: `${index * 0}px` }}
        >
          {book}
        </div>
      ))}
    </div>
  );
};

const SubjectCard = ({ icon: Icon, title, description }) => (
  <div className="rounded-[1.75rem] border border-white/5 bg-white/2 p-5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-orange-500/20">
    <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl border border-orange-500/20 bg-orange-500/10 shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
      <Icon className="h-8 w-8 text-orange-400" />
    </div>

    <h3 className="text-xl font-semibold text-white">{title}</h3>
    <p className="mt-3 text-sm leading-7 text-gray-400">{description}</p>

    <button className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-orange-500">
      Learn More
      <ArrowRight className="h-4 w-4" />
    </button>
  </div>
);

const Home = () => {
  return (
    <section className="min-h-screen bg-[#050505] text-white">
      <div className="px-3 py-3 sm:px-4 sm:py-4 lg:px-5 lg:py-5">
        <div className="relative mx-auto max-w-412.5 overflow-hidden rounded-[2.25rem] border border-white/5 bg-[#070707] shadow-[0_0_100px_rgba(0,0,0,0.9)]">
          {/* Background glow */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(249,115,22,0.04),transparent_30%),radial-gradient(circle_at_85%_15%,rgba(249,115,22,0.03),transparent_25%)]" />

          {/* HERO SECTION */}
          <div className="relative px-5 py-6 sm:px-6 lg:px-10 lg:py-8">
            <FloatingCube className="right-6 top-24 h-6 w-6 rotate-45" />

            <div className="grid grid-cols-1 gap-8 xl:grid-cols-[1.05fr_0.95fr] xl:items-center">
              {/* LEFT CONTENT */}
              <div>
                <div className="mb-4 flex items-center gap-3">
                  <span className="h-0.5 w-8 bg-orange-500" />
                  <span className="text-sm text-gray-400">
                    Welcome to my world
                  </span>
                </div>

                <h1 className="text-4xl font-bold leading-tight sm:text-5xl xl:text-6xl 2xl:text-7xl">
                  Teaching <span className="text-orange-500">English.</span>
                  <br />
                  Inspiring <span className="text-orange-500">Confidence.</span>
                </h1>

                <p className="mt-5 max-w-xl text-base  leading-[1.5em] text-gray-300">
                  I help students master the English language, build strong
                  communication skills, and achieve academic excellence.
                </p>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <button className="group inline-flex items-center justify-center gap-3 rounded-2xl bg-orange-500 px-6 py-3.5 text-sm font-medium shadow-[0_0_30px_rgba(249,115,22,0.35)] transition hover:bg-orange-600">
                    Explore My Classes
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </button>

                  <button className="inline-flex items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/3 px-6 py-3.5 text-sm font-medium backdrop-blur-xl hover:border-orange-500/30">
                    Download CV
                    <Download className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* RIGHT VISUAL */}
              <div className="relative">
                {/* Desk Scene */}
                <div className="relative rounded-[2.25rem] border border-white/5 bg-linear-to-br from-white/3 to-transparent p-5">
                  {/* Top right button */}
                  <div className="mb-4 flex justify-end">
                    <button className="hidden rounded-2xl bg-orange-500 px-5 py-3 text-sm font-medium shadow-[0_0_25px_rgba(249,115,22,0.3)] md:inline-flex md:items-center md:gap-2">
                      Explore My Classes
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>

                  {/* Office scene */}
                  <div className="grid grid-cols-1 gap-5 lg:grid-cols-[1fr_240px]">
                    {/* Left side: shelves + portrait placeholder */}
                    <div className="relative min-h-105">
                      {/* Shelf */}
                      <div className="absolute left-0 top-14 hidden lg:block">
                        <div className="mb-3 h-2 w-28 rounded bg-[#3b2316]" />
                        <div className="flex gap-1">
                          {[1, 2, 3, 4].map((n) => (
                            <div
                              key={n}
                              className="h-14 w-4 rounded-sm bg-[#151515]"
                            />
                          ))}
                        </div>
                        <div className="mt-4 h-10 w-10 rounded-full bg-linear-to-br from-gray-500 to-gray-800 shadow-lg" />
                      </div>

                      {/* IMAGE PLACEHOLDER FOR USER PHOTO */}
                      <div className="mx-auto flex h-105 w-full max-w-[320px] items-center justify-center rounded-[2.25rem] border border-orange-500/25 bg-[radial-gradient(circle_at_50%_20%,rgba(249,115,22,0.06),transparent_35%),linear-gradient(180deg,rgba(255,255,255,0.02),rgba(0,0,0,0.15))] shadow-[0_30px_80px_rgba(0,0,0,0.55)]">
                        {/* Replace background-image of this inner div with your own image */}
                        <div
                          className="flex h-97.5 w-72.5 items-center justify-center rounded-4xl border border-dashed border-orange-500/30 bg-black/20 bg-cover bg-center"
                          style={{
                            backgroundImage: `url(${import.meta.env.BASE_URL}assets/me.png)`,
                          }}
                        ></div>
                      </div>
                    </div>

                    {/* Right side: quote + lamp + books */}
                    <div className="relative flex flex-col justify-between gap-5">
                      <div className="rounded-[1.75rem] border border-white/10 bg-black/35 p-5 backdrop-blur-xl">
                        <Quote className="mb-3 h-5 w-5 text-orange-500" />
                        <p className="leading-8 text-gray-300">
                          The limits of my language mean the limits of my world.
                        </p>
                        <p className="mt-3 text-xs text-gray-500">
                          — Ludwig Wittgenstein
                        </p>
                      </div>

                      <div className="flex justify-end">
                        <LampDesk className="h-16 w-16 text-gray-300 opacity-90" />
                      </div>

                      <div className="flex items-end justify-between gap-4">
                        <BookStack />
                        <div className="rounded-2xl border border-orange-500/20 bg-orange-500/10 px-3 py-3 text-center text-xs font-medium leading-5 text-orange-400 shadow-[0_0_20px_rgba(249,115,22,0.15)]">
                          Teach
                          <br />
                          Inspire
                          <br />
                          Transform
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* STATS */}
            <div className="mt-8 rounded-[1.75rem] border border-white/5 bg-white/2 px-4 py-5 backdrop-blur-xl">
              <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                {stats.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.label}
                      className="flex items-center gap-3 rounded-2xl px-2 py-2 md:justify-center"
                    >
                      <Icon className="h-5 w-5 text-orange-500" />
                      <div>
                        <div className="text-2xl font-bold text-white">
                          {item.value}
                        </div>
                        <div className="text-xs text-gray-400">
                          {item.label}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* WHAT I TEACH */}
          <div className="relative px-5 py-8 sm:px-6 lg:px-10">
            <FloatingCube className="left-6 top-10 h-6 w-6 rotate-12" />
            <FloatingCube className="right-6 top-10 h-6 w-6 -rotate-12" />

            <div className="mb-8 text-center">
              <h2 className="text-3xl font-bold sm:text-4xl">What I Teach</h2>
              <div className="mx-auto mt-3 h-1 w-12 rounded-full bg-orange-500" />
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
              {subjects.map((subject) => (
                <SubjectCard key={subject.title} {...subject} />
              ))}
            </div>
          </div>

          {/* TEACHING APPROACH */}
          <div className="px-5 pb-8 sm:px-6 lg:px-10 lg:pb-10">
            <div className="rounded-4xl border border-white/5 bg-white/2 p-6 backdrop-blur-xl">
              <div className="grid grid-cols-1 gap-8 xl:grid-cols-[1.2fr_2fr]">
                <div>
                  <h2 className="text-3xl font-bold">My Teaching Approach</h2>
                  <div className="mt-3 h-1 w-12 rounded-full bg-orange-500" />
                  <p className="mt-4 leading-8 text-gray-400">
                    I believe in student-centered learning that encourages
                    curiosity, critical thinking, and practical application of
                    knowledge.
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                  {approach.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={item.title}
                        className="rounded-3xl border border-white/5 bg-black/20 p-5"
                      >
                        <Icon className="mb-4 h-6 w-6 text-orange-500" />
                        <h3 className="text-lg font-semibold">{item.title}</h3>
                        <p className="mt-2 text-sm leading-7 text-gray-400">
                          {item.text}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;

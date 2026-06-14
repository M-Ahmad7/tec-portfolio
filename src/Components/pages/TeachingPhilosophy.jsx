import {
  BookOpen,
  Brain,
  Users,
  Lightbulb,
  Sparkles,
  ArrowRight,
  Monitor,
  MessageSquare,
  Layers,
} from "lucide-react";

const philosophyCards = [
  {
    icon: Brain,
    title: "Practical Learning",
    text: "I believe students learn best through real classroom activities, collaboration and interactive engagement rather than passive memorization.",
  },
  {
    icon: Layers,
    title: "Flipped Learning",
    text: "I encourage students to explore concepts independently before class so classroom time becomes more discussion-oriented and productive.",
  },
  {
    icon: MessageSquare,
    title: "Communication Skills",
    text: "My classes focus on speaking, writing, listening and analytical thinking to improve confidence and communication.",
  },
  {
    icon: Monitor,
    title: "Technology Integration",
    text: "I integrate digital tools, presentations and web-based learning resources to create a modern educational environment.",
  },
];

const teachingMethods = [
  "Interactive classroom activities",
  "Collaborative learning tasks",
  "Flipped classroom approach",
  "Student-centered discussions",
  "Critical thinking exercises",
  "Technology-assisted teaching",
  "Practical language development",
  "Creative writing exercises",
];

const FloatingCube = ({ className = "" }) => (
  <div
    className={`absolute rounded-lg bg-gradient-to-br from-orange-300 to-orange-600 opacity-80 shadow-[0_10px_25px_rgba(249,115,22,0.35)] ${className}`}
  />
);

const PhilosophyCard = ({ icon: Icon, title, text }) => (
  <div className="group rounded-[1.75rem] border border-white/5 bg-white/[0.02] p-5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-orange-500/20 hover:bg-orange-500/[0.02]">
    <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-orange-500/20 bg-orange-500/10 shadow-[0_10px_30px_rgba(0,0,0,0.35)] transition-all duration-300 group-hover:scale-105">
      <Icon className="h-7 w-7 text-orange-400" />
    </div>

    <h3 className="text-lg font-semibold text-white">{title}</h3>

    <p className="mt-3 text-sm leading-7 text-gray-400">{text}</p>
  </div>
);

const TeachingPhilosophy = () => {
  return (
    <section className="min-h-screen bg-[#050505] text-white">
      <div className="px-3 py-3 sm:px-4 lg:px-5">
        <div className="relative mx-auto max-w-[1500px] overflow-hidden rounded-[2rem] border border-white/5 bg-[#070707] shadow-[0_0_100px_rgba(0,0,0,0.85)]">
          {/* Background Glow */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_10%,rgba(249,115,22,0.05),transparent_28%),radial-gradient(circle_at_85%_15%,rgba(249,115,22,0.03),transparent_25%)]" />

          {/* HERO SECTION */}
          <div className="relative px-4 py-5 sm:px-6 lg:px-8 lg:py-7">
            <FloatingCube className="right-8 top-14 h-5 w-5 rotate-45" />
            <FloatingCube className="left-8 top-20 h-4 w-4 -rotate-12" />

            <div className="grid grid-cols-1 gap-8 xl:grid-cols-[0.9fr_1.1fr] xl:items-center">
              {/* LEFT VISUAL */}
              <div className="relative mx-auto w-full max-w-[360px]">
                <div className="relative rounded-[2rem] border border-white/5 bg-gradient-to-br from-white/[0.03] to-transparent p-5">
                  {/* TOP CARD */}
                  <div className="mb-4 flex justify-end">
                    <div className="rounded-2xl border border-white/10 bg-black/30 p-4 backdrop-blur-xl">
                      <Sparkles className="mb-2 h-5 w-5 text-orange-500" />
                      <p className="text-xs leading-6 text-gray-300">
                        Teaching should inspire curiosity, creativity and
                        independent thinking.
                      </p>
                    </div>
                  </div>

                  {/* CENTRAL 3D VISUAL */}
                  <div
                    className="relative mx-auto flex h-[340px] w-full max-w-[280px] items-center justify-center overflow-hidden rounded-[2rem] border border-orange-500/20 bg-cover bg-center shadow-[0_25px_60px_rgba(0,0,0,0.55)]"
                    style={{
                      backgroundImage: `url(${import.meta.env.BASE_URL}assets/Phil.png)`,
                    }}
                  >
                    {/* Floating Shapes */}
                  </div>

                  {/* BOTTOM TAGS */}
                  <div className="mt-4 flex items-center justify-between gap-3">
                    <div className="rounded-xl border border-white/10 bg-black/30 px-3 py-2 text-[10px] leading-5 text-gray-400">
                      Practical • Interactive
                    </div>

                    <div className="rounded-xl border border-orange-500/20 bg-orange-500/10 px-3 py-2 text-right text-[10px] font-medium leading-4 text-orange-400">
                      Learn
                      <br />
                      Apply
                    </div>
                  </div>
                </div>
              </div>

              {/* RIGHT CONTENT */}
              <div>
                <div className="mb-3 flex items-center gap-3">
                  <span className="h-[2px] w-8 bg-orange-500" />
                  <span className="text-xs text-gray-400">
                    Teaching Philosophy
                  </span>
                </div>

                <h1 className="text-3xl font-bold leading-tight sm:text-4xl xl:text-5xl">
                  Teaching Beyond
                  <br />
                  <span className="text-orange-500">Conventional Methods.</span>
                </h1>

                <p className="mt-4 max-w-3xl text-sm leading-8 text-gray-300">
                  My teaching philosophy is centered around active learning,
                  practical classroom engagement and student participation. I
                  believe students develop stronger understanding when learning
                  becomes interactive rather than purely theoretical.
                </p>

                <p className="mt-3 max-w-3xl text-sm leading-8 text-gray-400">
                  I strongly believe in flipped learning approaches where
                  students prepare concepts independently and classroom sessions
                  become spaces for discussion, collaboration and critical
                  thinking.
                </p>

                {/* TAGS */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {[
                    "Interactive Learning",
                    "Flipped Classroom",
                    "Critical Thinking",
                    "Student-Centered",
                  ].map((item) => (
                    <span
                      key={item}
                      className="rounded-xl border border-orange-500/15 bg-orange-500/5 px-3 py-2 text-[11px] font-medium text-orange-400"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                {/* STATS */}
                <div className="mt-6 grid grid-cols-2 gap-3 lg:grid-cols-3">
                  {[
                    {
                      icon: Users,
                      value: "Student",
                      label: "Centered Learning",
                    },
                    {
                      icon: Lightbulb,
                      value: "Practical",
                      label: "Class Activities",
                    },
                    {
                      icon: BookOpen,
                      value: "Flip",
                      label: "Learning Model",
                    },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="rounded-2xl border border-white/5 bg-white/[0.02] p-4 backdrop-blur-xl"
                    >
                      <item.icon className="mb-2 h-5 w-5 text-orange-500" />
                      <div className="text-lg font-bold text-orange-500">
                        {item.value}
                      </div>
                      <div className="mt-1 text-[11px] text-gray-400">
                        {item.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* PHILOSOPHY CARDS */}
          <div className="px-4 pb-6 sm:px-6 lg:px-8">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold">My Teaching Approach</h2>
                <p className="mt-2 text-sm text-gray-400">
                  Principles that shape my classroom environment.
                </p>
              </div>

              <div className="hidden h-[1px] flex-1 bg-gradient-to-r from-orange-500/20 to-transparent md:block" />
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
              {philosophyCards.map((item) => (
                <PhilosophyCard key={item.title} {...item} />
              ))}
            </div>
          </div>

          {/* METHODS SECTION */}
          <div className="px-4 pb-8 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-5 xl:grid-cols-[0.8fr_1.2fr]">
              {/* LEFT PANEL */}
              <div className="rounded-[1.75rem] border border-white/5 bg-white/[0.02] p-5 backdrop-blur-xl">
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-orange-500/20 bg-orange-500/10">
                    <Lightbulb className="h-5 w-5 text-orange-500" />
                  </div>

                  <div>
                    <h2 className="text-xl font-bold">Core Philosophy</h2>
                    <p className="text-xs text-gray-500">
                      How I approach teaching
                    </p>
                  </div>
                </div>

                <p className="text-sm leading-8 text-gray-400">
                  I believe classrooms should encourage participation,
                  creativity and independent thinking. My focus is not only on
                  delivering information but also on helping students develop
                  confidence, curiosity and practical communication skills.
                </p>

                <p className="mt-4 text-sm leading-8 text-gray-400">
                  Through interactive activities, flipped learning and modern
                  teaching strategies, I aim to create an engaging learning
                  environment where students actively contribute to the learning
                  process.
                </p>
              </div>

              {/* RIGHT PANEL */}
              <div className="rounded-[1.75rem] border border-white/5 bg-white/[0.02] p-5 backdrop-blur-xl">
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-orange-500/20 bg-orange-500/10">
                    <BookOpen className="h-5 w-5 text-orange-500" />
                  </div>

                  <div>
                    <h2 className="text-xl font-bold">Teaching Methods</h2>
                    <p className="text-xs text-gray-500">
                      Classroom practices & activities
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {teachingMethods.map((method) => (
                    <div
                      key={method}
                      className="group flex items-start gap-3 rounded-2xl border border-white/5 bg-black/20 p-4 transition-all duration-300 hover:border-orange-500/20"
                    >
                      <div className="mt-1 flex h-7 w-7 items-center justify-center rounded-lg border border-orange-500/20 bg-orange-500/10">
                        <ArrowRight className="h-3 w-3 text-orange-400" />
                      </div>

                      <p className="text-sm leading-7 text-gray-300">
                        {method}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeachingPhilosophy;

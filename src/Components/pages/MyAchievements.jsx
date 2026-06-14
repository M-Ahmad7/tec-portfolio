import {
  Trophy,
  Award,
  Medal,
  Star,
  ChevronRight,
  Quote,
  GraduationCap,
  Users,
  BookOpen,
  Monitor,
} from "lucide-react";

const stats = [
  {
    icon: Trophy,
    value: "2+",
    label: "Awards Won",
  },
  {
    icon: Medal,
    value: "6+",
    label: "Certificates",
  },
  {
    icon: Users,
    value: "8+",
    label: "Recognitions",
  },
  {
    icon: Star,
    value: "4+",
    label: "Organizations",
  },
];

const milestones = [
  {
    year: "2024 - Present",
    title: "Lecturer at Govt. Associate College Dhoke Syedan",
    description:
      "Teaching English language, literature and communication skills with practical classroom methodologies and student-centered learning.",
    image: `${import.meta.env.BASE_URL}assets/College.png`,
    icon: GraduationCap,
  },

  {
    year: "2026 - Present",
    title:
      "Co-Ordinator — Corpus Research Center, Air University Islamabad H11 Campus",
    description:
      "Currently serving as Co-Ordinator, supporting corpus research activities, academic collaboration and research development.",
    image: `${import.meta.env.BASE_URL}assets/CRC.jpeg`,
    icon: Trophy,
  },

  {
    year: "2024",
    title: "Visiting Teacher — Gomal University",
    description:
      "Delivered undergraduate Functional English courses with focus on communication, writing and interactive learning.",
    image: `${import.meta.env.BASE_URL}assets/Gomal.png`,
    icon: BookOpen,
  },

  {
    year: "2024",
    title: "Team Member — Pakistan Association of Phonetics & Phonology",
    description:
      "Active team member and web designer contributing to linguistic, phonetic and academic initiatives.",
    image: `${import.meta.env.BASE_URL}assets/PAPPS.png`,
    icon: Monitor,
  },
];

const certificates = [
  {
    title: "Certificate in Computer Applications",
    year: "2023",
  },
  {
    title: "Workshop of PRAAT - The Basics",
    year: "2024",
  },
];

const categories = [
  {
    label: "Teaching Excellence",
    percent: "40%",
  },
  {
    label: "Research & Linguistics",
    percent: "25%",
  },
  {
    label: "Professional Growth",
    percent: "20%",
  },
  {
    label: "Leadership Roles",
    percent: "15%",
  },
];

const MyAchievements = () => {
  return (
    <section className="min-h-screen bg-[#050505] text-white">
      <div className="px-3 py-3 sm:px-4 lg:px-5">
        <div className="mx-auto max-w-[1500px] rounded-[2rem] border border-white/5 bg-[#070707] p-4 shadow-[0_0_80px_rgba(0,0,0,0.8)] sm:p-5 lg:p-6">
          {/* TOP BAR */}
          <div className="mb-6 flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs text-gray-500">
              <span>Home</span>

              <ChevronRight className="h-3 w-3" />

              <span className="text-orange-500">Achievements</span>
            </div>

            <button className="rounded-xl bg-orange-500 px-4 py-2 text-xs font-medium text-white transition-all duration-300 hover:bg-orange-600">
              {/* Explore My Classes */} Coming Soon
            </button>
          </div>

          {/* MAIN GRID */}
          <div className="grid grid-cols-1 gap-5 xl:grid-cols-[1.2fr_0.55fr]">
            {/* LEFT SIDE */}
            <div>
              {/* HERO */}
              <div className="rounded-[2rem] border border-white/5 bg-[radial-gradient(circle_at_top_left,rgba(249,115,22,0.06),transparent_30%)] p-5">
                <div className="grid grid-cols-1 gap-5 lg:grid-cols-[0.9fr_0.7fr]">
                  {/* LEFT TEXT */}
                  <div>
                    <h1 className="text-3xl font-bold leading-tight sm:text-4xl">
                      My <span className="text-orange-500">Achievements</span>
                    </h1>

                    <p className="mt-4 max-w-xl text-sm leading-7 text-gray-400">
                      Recognition and milestones that reflect my dedication to
                      teaching, research, academic growth and modern educational
                      practices.
                    </p>

                    {/* STATS */}
                    <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
                      {stats.map((item) => (
                        <div
                          key={item.label}
                          className="rounded-2xl border border-white/5 bg-white/[0.02] p-4 backdrop-blur-xl"
                        >
                          <item.icon className="mb-3 h-5 w-5 text-orange-500" />

                          <div className="text-2xl font-bold text-white">
                            {item.value}
                          </div>

                          <div className="mt-1 text-[11px] text-gray-500">
                            {item.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* RIGHT VISUAL */}
                  <div className="relative hidden overflow-hidden rounded-[2rem] border border-white/5 bg-gradient-to-br from-orange-500/5 to-transparent p-4 lg:flex lg:flex-col lg:justify-between">
                    <div className="absolute right-4 top-4 h-5 w-5 rotate-45 rounded bg-orange-500/70" />

                    <div className="flex items-center justify-center">
                      <div className="relative mt-4">
                        <div className="absolute inset-0 rounded-full bg-orange-500/20 blur-3xl" />

                        <Trophy className="relative h-28 w-28 text-orange-400 drop-shadow-[0_0_25px_rgba(249,115,22,0.5)]" />
                      </div>
                    </div>

                    <div className="mt-5 rounded-2xl border border-orange-500/10 bg-black/30 p-4">
                      <h3 className="text-sm font-semibold text-orange-400">
                        Excellence in Teaching
                      </h3>

                      <p className="mt-3 text-sm leading-7 text-gray-400">
                        Recognized for dedication towards innovative teaching,
                        student engagement and academic development.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* MILESTONES */}
              <div className="mt-5 rounded-[2rem] border border-white/5 bg-white/[0.02] p-5">
                <div className="mb-6 flex items-center justify-between">
                  <div>
                    <h2 className="text-2xl font-bold">Milestones</h2>

                    <div className="mt-2 h-[2px] w-16 bg-orange-500" />
                  </div>

                  <div className="hidden h-[1px] flex-1 bg-gradient-to-r from-orange-500/20 to-transparent md:block" />
                </div>

                <div className="relative space-y-5 border-l border-orange-500/20 pl-6">
                  {milestones.map((item, index) => (
                    <div key={index} className="relative">
                      {/* DOT */}
                      <div className="absolute -left-[31px] top-6 h-3 w-3 rounded-full bg-orange-500 shadow-[0_0_15px_rgba(249,115,22,0.6)]" />

                      <div className="grid grid-cols-1 gap-4 rounded-[1.7rem] border border-white/5 bg-black/20 p-4 lg:grid-cols-[0.9fr_0.35fr]">
                        {/* CONTENT */}
                        <div className="flex gap-4">
                          <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-orange-500/20 bg-orange-500/10">
                            <item.icon className="h-6 w-6 text-orange-400" />
                          </div>

                          <div>
                            <div className="text-sm font-medium text-orange-500">
                              {item.year}
                            </div>

                            <h3 className="mt-1 text-lg font-semibold text-white">
                              {item.title}
                            </h3>

                            <p className="mt-3 text-sm leading-7 text-gray-400">
                              {item.description}
                            </p>
                          </div>
                        </div>

                        {/* IMAGE */}
                        <div className="overflow-hidden rounded-2xl border border-white/5">
                          <div
                            className="h-[130px] w-full bg-cover bg-center transition-all duration-500 hover:scale-105"
                            style={{
                              backgroundImage: `url(${item.image})`,
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <button className="mt-6 rounded-xl border border-orange-500/20 bg-orange-500/10 px-5 py-3 text-sm font-medium text-orange-400 transition-all duration-300 hover:bg-orange-500 hover:text-white">
                  View All Achievements
                </button>
              </div>

              {/* GALLERY */}
              <div className="mt-5 rounded-[2rem] border border-white/5 bg-white/[0.02] p-5">
                <div className="mb-6 flex items-center justify-between">
                  <div>
                    <h2 className="text-2xl font-bold">Activities & Gallery</h2>

                    <p className="mt-2 text-sm text-gray-500">
                      Classroom activities, achievements and student engagement.
                    </p>
                  </div>

                  <div className="h-4 w-4 rotate-45 rounded bg-orange-500/70" />
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
                  {[
                    `${import.meta.env.BASE_URL}assets/1.jpeg`,
                    `${import.meta.env.BASE_URL}assets/2.jpeg`,
                    `${import.meta.env.BASE_URL}assets/3.jpeg`,
                    `${import.meta.env.BASE_URL}assets/4.jpeg`,
                    `${import.meta.env.BASE_URL}assets/Drive.jpeg`,
                    `${import.meta.env.BASE_URL}assets/Games5.jpeg`,
                    `${import.meta.env.BASE_URL}assets/Plantation.jpeg`,
                  ].map((image, index) => (
                    <div
                      key={index}
                      className="group overflow-hidden rounded-[1.7rem] border border-white/5 bg-black/20"
                    >
                      <div
                        className="h-[250px] w-full bg-cover bg-center transition-all duration-500 group-hover:scale-105"
                        style={{
                          backgroundImage: `url(${image})`,
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT SIDEBAR */}
            <div className="space-y-5">
              {/* CERTIFICATES */}
              <div className="rounded-[2rem] border border-white/5 bg-white/[0.02] p-5">
                <div className="mb-5 flex items-center justify-between">
                  <h2 className="text-xl font-bold">Certificates</h2>

                  <div className="h-4 w-4 rotate-45 rounded bg-orange-500/70" />
                </div>

                <div className="space-y-3">
                  {certificates.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between rounded-2xl border border-white/5 bg-black/20 p-3"
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-orange-500/20 bg-orange-500/10">
                          <Award className="h-4 w-4 text-orange-400" />
                        </div>

                        <div>
                          <h3 className="text-sm font-medium text-white">
                            {item.title}
                          </h3>
                        </div>
                      </div>

                      <span className="text-xs text-gray-500">{item.year}</span>
                    </div>
                  ))}
                </div>

                <button className="mt-5 flex items-center gap-2 text-sm font-medium text-orange-500">
                  View All Certificates
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>

              {/* CATEGORY */}
              <div className="rounded-[2rem] border border-white/5 bg-white/[0.02] p-5">
                <h2 className="text-xl font-bold">Achievements by Category</h2>

                <div className="mt-5 flex justify-center">
                  <div className="relative flex h-40 w-40 items-center justify-center rounded-full border-[14px] border-orange-500/20">
                    <div className="absolute inset-0 rounded-full border-t-[14px] border-orange-500" />

                    <Trophy className="h-8 w-8 text-orange-500" />
                  </div>
                </div>

                <div className="mt-6 space-y-3">
                  {categories.map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center justify-between text-sm"
                    >
                      <div className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-orange-500" />

                        <span className="text-gray-400">{item.label}</span>
                      </div>

                      <span className="text-white">{item.percent}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* QUOTE */}
              <div className="relative overflow-hidden rounded-[2rem] border border-white/5 bg-white/[0.02] p-5">
                <div className="absolute bottom-4 right-4 h-5 w-5 rotate-45 rounded bg-orange-500/70" />

                <Quote className="h-8 w-8 text-orange-500" />

                <p className="mt-4 text-sm leading-8 text-gray-300">
                  Success is the sum of small efforts, repeated day in and day
                  out.
                </p>

                <p className="mt-4 text-sm font-medium text-orange-500">
                  — Robert Collier
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyAchievements;

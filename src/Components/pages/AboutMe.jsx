import {
  GraduationCap,
  BookOpen,
  Quote,
  Image as ImageIcon,
  Briefcase,
} from "lucide-react";

const highlights = [
  {
    icon: GraduationCap,
    value: "MPhil",
    label: "Linguistics",
  },
  {
    icon: Briefcase,
    value: "2+",
    label: "Years Experience",
  },
  {
    icon: BookOpen,
    value: "4+",
    label: "Subjects Taught",
  },
];

const FloatingCube = ({ className = "" }) => (
  <div
    className={`absolute rounded-lg bg-gradient-to-br from-orange-300 to-orange-600 opacity-80 shadow-[0_10px_25px_rgba(249,115,22,0.35)] ${className}`}
  />
);

const StatCard = ({ icon: Icon, value, label }) => (
  <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-4 backdrop-blur-xl">
    <Icon className="mb-2 h-5 w-5 text-orange-500" />
    <div className="text-xl font-bold text-orange-500">{value}</div>
    <div className="mt-1 text-[11px] text-gray-400">{label}</div>
  </div>
);

const AboutMe = () => {
  return (
    <section className="min-h-screen bg-[#050505] text-white">
      <div className="px-3 py-3 sm:px-4 lg:px-5">
        <div className="relative mx-auto max-w-[1500px] overflow-hidden rounded-[2rem] border border-white/5 bg-[#070707] shadow-[0_0_100px_rgba(0,0,0,0.85)]">
          {/* Background Glow */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_10%,rgba(249,115,22,0.05),transparent_28%),radial-gradient(circle_at_85%_15%,rgba(249,115,22,0.03),transparent_25%)]" />

          {/* HERO */}
          <div className="relative px-4 py-5 sm:px-6 lg:px-8 lg:py-7">
            <FloatingCube className="right-8 top-14 h-5 w-5 rotate-45" />
            <FloatingCube className="left-8 top-20 h-4 w-4 -rotate-12" />

            <div className="grid grid-cols-1 gap-8 xl:grid-cols-[340px_1fr] xl:items-center">
              {/* LEFT SIDE */}
              <div className="relative mx-auto w-full max-w-[340px]">
                <div className="rounded-[2rem] border border-white/5 bg-gradient-to-br from-white/[0.03] to-transparent p-4">
                  {/* Quote */}
                  <div className="mb-4 flex justify-end">
                    <div className="w-[210px] rounded-2xl border border-white/10 bg-black/30 p-3 backdrop-blur-xl">
                      <Quote className="mb-2 h-4 w-4 text-orange-500" />
                      <p className="text-xs leading-6 text-gray-300">
                        Education is not the filling of a pail, but the lighting
                        of a fire.
                      </p>
                    </div>
                  </div>

                  {/* IMAGE PLACEHOLDER */}
                  <div className="mx-auto flex h-[360px] w-full max-w-[280px] items-center justify-center rounded-[2rem] border border-orange-500/20 bg-[radial-gradient(circle_at_50%_15%,rgba(249,115,22,0.08),transparent_35%),linear-gradient(180deg,rgba(255,255,255,0.02),rgba(0,0,0,0.2))] shadow-[0_25px_60px_rgba(0,0,0,0.55)]">
                    <div
                      className="flex h-[330px] w-[250px] items-center justify-center rounded-[1.7rem] border border-dashed border-orange-500/30 bg-black/20 bg-cover bg-center"
                      // style={{ backgroundImage: "url('/your-photo.png')" }}
                    >
                      <div className="text-center text-orange-500/70">
                        <ImageIcon className="mx-auto h-8 w-8" />
                        <p className="mt-2 text-[10px] tracking-[0.25em]">
                          YOUR PHOTO
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Tags */}
                  <div className="mt-4 flex items-end justify-between gap-3">
                    <div className="rounded-xl border border-white/10 bg-black/30 px-3 py-2 text-[10px] leading-5 text-gray-400">
                      Lecturer • Mentor
                    </div>

                    <div className="rounded-xl border border-orange-500/20 bg-orange-500/10 px-3 py-2 text-right text-[10px] font-medium leading-4 text-orange-400">
                      Teach
                      <br />
                      Inspire
                    </div>
                  </div>
                </div>
              </div>

              {/* RIGHT SIDE */}
              <div>
                <div className="mb-3 flex items-center gap-3">
                  <span className="h-[2px] w-8 bg-orange-500" />
                  <span className="text-xs text-gray-400">About Me</span>
                </div>

                <h1 className="text-3xl font-bold leading-tight sm:text-4xl xl:text-5xl">
                  Passionate About
                  <br />
                  <span className="text-orange-500">Language & Education.</span>
                </h1>

                <p className="mt-4 max-w-3xl text-sm leading-8 text-gray-300">
                  I am an English Lecturer dedicated to helping students
                  strengthen their language, communication and analytical
                  abilities through interactive and student-centered learning.
                </p>

                <p className="mt-3 max-w-3xl text-sm leading-8 text-gray-400">
                  My teaching combines academic excellence with practical
                  understanding, helping learners develop confidence and
                  professional communication skills.
                </p>

                {/* TAGS */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {[
                    "English Lecturer",
                    "Researcher",
                    "Mentor",
                    "Web Developer",
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
                  {highlights.map((item) => (
                    <StatCard key={item.label} {...item} />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* EDUCATION & EXPERIENCE */}
          <div className="px-4 pb-6 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-5 xl:grid-cols-2">
              {/* EDUCATION */}
              <div className="rounded-[1.75rem] border border-white/5 bg-white/[0.02] p-5 backdrop-blur-xl">
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-orange-500/20 bg-orange-500/10">
                    <GraduationCap className="h-5 w-5 text-orange-500" />
                  </div>

                  <div>
                    <h2 className="text-xl font-bold">Education</h2>
                    <p className="text-xs text-gray-500">
                      Academic qualifications
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  {[
                    {
                      title: "MPhil Linguistics",
                      place: "Air University, Islamabad",
                      year: "Expected 03/2026",
                    },
                    {
                      title: "BS English Language & Literature",
                      place: "Gomal University",
                      year: "01/2024",
                    },
                    {
                      title: "B-Pharmacy",
                      place: "Ayan Institute of Medical Sciences",
                      year: "Completed",
                    },
                    {
                      title: "Diploma in Computer Applications",
                      place: "The Brain College Bhakkar",
                      year: "02/2023",
                    },
                    {
                      title: "FSc Pre-Medical",
                      place: "Govt. Graduate College Bhakkar",
                      year: "06/2020",
                    },
                    {
                      title: "Matriculation",
                      place: "Govt. Model High School Bhakkar",
                      year: "06/2017",
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="rounded-2xl border border-white/5 bg-black/20 p-4"
                    >
                      <div className="flex flex-wrap items-start justify-between gap-3">
                        <div>
                          <h3 className="text-sm font-semibold text-white">
                            {item.title}
                          </h3>

                          <p className="mt-1 text-xs leading-6 text-gray-400">
                            {item.place}
                          </p>
                        </div>

                        <span className="rounded-xl border border-orange-500/15 bg-orange-500/5 px-3 py-1 text-[10px] font-medium text-orange-400">
                          {item.year}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* EXPERIENCE */}
              <div className="rounded-[1.75rem] border border-white/5 bg-white/[0.02] p-5 backdrop-blur-xl">
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-orange-500/20 bg-orange-500/10">
                    <Briefcase className="h-5 w-5 text-orange-500" />
                  </div>

                  <div>
                    <h2 className="text-xl font-bold">Experience</h2>
                    <p className="text-xs text-gray-500">
                      Professional journey
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  {[
                    {
                      title: "English Lecturer",
                      place: "Govt. Associate College Dhoke Syedan",
                      year: "10/2024 - Present",
                      desc: "Teaching intermediate students focusing on language development and academic writing.",
                    },
                    {
                      title: "Visiting Lecturer",
                      place: "Gomal University, MLT Department",
                      year: "02/2024 - 06/2024",
                      desc: "Delivered undergraduate Functional English courses and communication skills.",
                    },
                    {
                      title: "Home Tutor",
                      place: "Private Teaching",
                      year: "2021 - 2023",
                      desc: "Provided English language instruction to secondary-level students.",
                    },
                    {
                      title: "Computer Applications Training",
                      place: "Professional Training",
                      year: "02/2022 - 08/2022",
                      desc: "Developed computer application and technology integration skills.",
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="rounded-2xl border border-white/5 bg-black/20 p-4"
                    >
                      <div className="flex flex-wrap items-start justify-between gap-3">
                        <div>
                          <h3 className="text-sm font-semibold text-white">
                            {item.title}
                          </h3>

                          <p className="mt-1 text-xs text-orange-400">
                            {item.place}
                          </p>
                        </div>

                        <span className="rounded-xl border border-orange-500/15 bg-orange-500/5 px-3 py-1 text-[10px] font-medium text-orange-400">
                          {item.year}
                        </span>
                      </div>

                      <p className="mt-3 text-xs leading-7 text-gray-400">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* SUBJECTS */}
          <div className="px-4 pb-8 sm:px-6 lg:px-8">
            <div className="rounded-[1.75rem] border border-white/5 bg-white/[0.02] p-5 backdrop-blur-xl">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-orange-500/20 bg-orange-500/10">
                  <BookOpen className="h-5 w-5 text-orange-500" />
                </div>

                <div>
                  <h2 className="text-xl font-bold">Subjects I Teach</h2>
                  <p className="text-xs text-gray-500">
                    Courses & academic areas
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                {[
                  "English Literature",
                  "Linguistics",
                  "Web Development",
                  "Math, Chemistry, Physics & Computer (Till 10th)",
                ].map((subject) => (
                  <div
                    key={subject}
                    className="group rounded-2xl border border-white/5 bg-black/20 p-4 transition-all duration-300 hover:border-orange-500/20 hover:bg-orange-500/[0.03]"
                  >
                    <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl border border-orange-500/20 bg-orange-500/10">
                      <BookOpen className="h-5 w-5 text-orange-400" />
                    </div>

                    <h3 className="text-xs font-medium leading-6 text-white sm:text-sm">
                      {subject}
                    </h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;

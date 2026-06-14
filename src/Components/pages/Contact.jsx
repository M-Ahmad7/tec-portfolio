import {
  Mail,
  Phone,
  MapPin,
  Clock3,
  Send,
  Download,
  BookOpen,
  GraduationCap,
  Briefcase,
  Users,
  MessageSquare,
  Pencil,
  Quote,
} from "lucide-react";

const contactCards = [
  {
    icon: Mail,
    title: "Email",
    info: "m8876yz@gmail.com",
  },
  {
    icon: Phone,
    title: "Phone",
    info: "+92 312 6613305",
  },
  {
    icon: MapPin,
    title: "Location",
    info: "Rawalpindi, Pakistan",
  },
  {
    icon: Clock3,
    title: "Hours",
    info: "Mon - Fri, 9AM - 5PM",
  },
];

const socials = [
  //   {
  //     icon: LinkedIn,
  //     title: "LinkedIn",
  //     link: "linkedin.com/in/mr-arslan",
  //   },
  {
    icon: BookOpen,
    title: "ResearchGate",
    link: "researchgate.net/profile/arslan",
  },
  {
    icon: GraduationCap,
    title: "Google Scholar",
    link: "scholar.google.com",
  },
];

const availability = [
  {
    icon: Briefcase,
    title: "Guest Lectures",
  },
  {
    icon: Users,
    title: "Workshops & Seminars",
  },
  {
    icon: GraduationCap,
    title: "Academic Collaborations",
  },
  {
    icon: BookOpen,
    title: "Curriculum Development",
  },
  {
    icon: MessageSquare,
    title: "Consulting & Mentorship",
  },
];

const Contact = () => {
  return (
    <section className="min-h-screen bg-[#050505] text-white">
      <div className="px-3 py-3 sm:px-4 lg:px-5">
        <div className="mx-auto max-w-[1500px] rounded-[2rem] border border-white/5 bg-[#070707] p-4 shadow-[0_0_80px_rgba(0,0,0,0.8)] sm:p-5 lg:p-6">
          {/* TOP */}
          <div className="mb-6 flex items-center gap-2 text-xs text-gray-500">
            <span>Home</span>

            <span className="text-gray-700">›</span>

            <span className="text-orange-500">Contact</span>
          </div>

          {/* MAIN GRID */}
          <div className="grid grid-cols-1 gap-5 xl:grid-cols-[1.2fr_0.42fr]">
            {/* LEFT */}
            <div>
              {/* HEADING */}
              <div>
                <h1 className="text-3xl font-bold leading-tight sm:text-4xl">
                  Get In <span className="text-orange-500">Touch</span>
                </h1>

                <p className="mt-4 max-w-2xl text-sm leading-7 text-gray-400">
                  I’d love to hear from you. Whether you have a question, want
                  to collaborate, or simply wish to connect regarding education,
                  research or workshops, feel free to reach out.
                </p>
              </div>

              {/* CONTACT INFO */}
              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {contactCards.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-[1.5rem] border border-white/5 bg-white/[0.02] p-4 backdrop-blur-xl"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-orange-500/20 bg-orange-500/10">
                        <item.icon className="h-5 w-5 text-orange-500" />
                      </div>

                      <div>
                        <h3 className="text-sm font-semibold text-white">
                          {item.title}
                        </h3>

                        <p className="mt-1 text-xs text-gray-400">
                          {item.info}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* FORM SECTION */}
              <div className="mt-6 grid grid-cols-1 gap-5 rounded-[2rem] border border-white/5 bg-white/[0.02] p-5 lg:grid-cols-[0.9fr_0.55fr]">
                {/* FORM */}
                <div>
                  <div className="mb-6">
                    <h2 className="text-2xl font-bold">Send Me A Message</h2>

                    <div className="mt-2 h-[2px] w-14 bg-orange-500" />
                  </div>

                  <form className="space-y-4">
                    {/* ROW */}
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div className="relative">
                        <Mail className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />

                        <input
                          type="text"
                          placeholder="Your Name"
                          className="h-14 w-full rounded-2xl border border-white/5 bg-black/20 pl-12 pr-4 text-sm text-white outline-none transition-all duration-300 placeholder:text-gray-500 focus:border-orange-500/30"
                        />
                      </div>

                      <div className="relative">
                        <Mail className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />

                        <input
                          type="email"
                          placeholder="Your Email"
                          className="h-14 w-full rounded-2xl border border-white/5 bg-black/20 pl-12 pr-4 text-sm text-white outline-none transition-all duration-300 placeholder:text-gray-500 focus:border-orange-500/30"
                        />
                      </div>
                    </div>

                    {/* SUBJECT */}
                    <div className="relative">
                      <Pencil className="absolute left-4 top-5 h-4 w-4 text-gray-500" />

                      <input
                        type="text"
                        placeholder="Subject"
                        className="h-14 w-full rounded-2xl border border-white/5 bg-black/20 pl-12 pr-4 text-sm text-white outline-none transition-all duration-300 placeholder:text-gray-500 focus:border-orange-500/30"
                      />
                    </div>

                    {/* MESSAGE */}
                    <div className="relative">
                      <MessageSquare className="absolute left-4 top-5 h-4 w-4 text-gray-500" />

                      <textarea
                        rows="7"
                        placeholder="Your Message"
                        className="w-full rounded-2xl border border-white/5 bg-black/20 pl-12 pr-4 pt-5 text-sm text-white outline-none transition-all duration-300 placeholder:text-gray-500 focus:border-orange-500/30"
                      />
                    </div>

                    {/* BUTTON */}
                    <button className="flex items-center gap-2 rounded-2xl bg-orange-500 px-6 py-4 text-sm font-medium text-white transition-all duration-300 hover:bg-orange-600">
                      Send Message
                      <Send className="h-4 w-4" />
                    </button>
                  </form>
                </div>

                {/* RIGHT VISUAL */}
                <div className="relative hidden overflow-hidden rounded-[2rem] border border-white/5 bg-[radial-gradient(circle_at_top_left,rgba(249,115,22,0.06),transparent_30%)] p-5 lg:flex lg:flex-col lg:justify-between">
                  {/* GLOW */}
                  <div className="absolute right-4 top-4 h-5 w-5 rotate-45 rounded bg-orange-500/70" />

                  {/* ENVELOPE */}
                  <div className="relative mx-auto mt-6 flex h-[280px] w-[280px] items-center justify-center">
                    {/* TABLE */}
                    <div className="absolute bottom-0 h-14 w-full rounded-[1.5rem] bg-gradient-to-r from-[#2a1208] to-[#4a1e08] shadow-[0_15px_40px_rgba(0,0,0,0.5)]" />

                    {/* ENVELOPE */}
                    <div className="absolute bottom-12 h-[160px] w-[220px] rounded-[1.5rem] border border-white/5 bg-[#0f0f0f] shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                      <div className="absolute inset-x-0 top-0 h-1/2 origin-top border-b border-white/5 bg-gradient-to-b from-[#161616] to-[#0c0c0c] clip-path-envelope" />

                      <div className="absolute left-1/2 top-7 w-[160px] -translate-x-1/2 rounded-xl bg-[#f2dcc7] p-4 shadow-lg">
                        <p className="text-center text-lg font-semibold italic text-[#8c3d13]">
                          Let’s Connect
                        </p>
                      </div>
                    </div>

                    {/* BOOK */}
                    <div className="absolute bottom-3 right-2 h-16 w-28 rounded-xl border border-white/5 bg-[#111] shadow-xl" />

                    {/* PEN */}
                    <div className="absolute bottom-12 right-16 h-2 w-24 rotate-[-25deg] rounded-full bg-gradient-to-r from-orange-400 to-black" />
                  </div>

                  {/* TEXT */}
                  <div className="rounded-2xl border border-orange-500/10 bg-black/30 p-4">
                    <h3 className="text-lg font-semibold text-orange-400">
                      Let’s Build Something Great Together!
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-gray-400">
                      I am always open to discussing teaching opportunities,
                      workshops, educational projects and academic
                      collaborations.
                    </p>

                    <button className="mt-5 flex items-center gap-2 rounded-xl border border-orange-500/20 bg-orange-500/10 px-5 py-3 text-sm font-medium text-orange-400 transition-all duration-300 hover:bg-orange-500 hover:text-white">
                      Download My CV
                      <Download className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* AVAILABLE FOR */}
              <div className="mt-6 rounded-[2rem] border border-white/5 bg-white/[0.02] p-5">
                <div className="mb-6">
                  <h2 className="text-2xl font-bold">I’m Available For</h2>

                  <div className="mt-2 h-[2px] w-14 bg-orange-500" />
                </div>

                <div className="grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-5">
                  {availability.map((item) => (
                    <div
                      key={item.title}
                      className="rounded-2xl border border-white/5 bg-black/20 p-4 text-center transition-all duration-300 hover:border-orange-500/20"
                    >
                      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl border border-orange-500/20 bg-orange-500/10">
                        <item.icon className="h-5 w-5 text-orange-500" />
                      </div>

                      <h3 className="mt-4 text-sm font-medium leading-6 text-gray-300">
                        {item.title}
                      </h3>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT SIDEBAR */}
            <div className="space-y-5">
              {/* SOCIALS */}
              <div className="rounded-[2rem] border border-white/5 bg-white/[0.02] p-5">
                <div className="mb-5">
                  <h2 className="text-2xl font-bold">Find Me On</h2>

                  <div className="mt-2 h-[2px] w-14 bg-orange-500" />
                </div>

                <div className="space-y-4">
                  {socials.map((item) => (
                    <div
                      key={item.title}
                      className="flex items-center gap-4 rounded-2xl border border-white/5 bg-black/20 p-4"
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-orange-500/20 bg-orange-500/10">
                        <item.icon className="h-5 w-5 text-orange-500" />
                      </div>

                      <div>
                        <h3 className="text-sm font-semibold">{item.title}</h3>

                        <p className="mt-1 text-xs text-gray-500">
                          {item.link}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* QUOTE */}
              <div className="relative overflow-hidden rounded-[2rem] border border-white/5 bg-white/[0.02] p-5">
                <div className="absolute bottom-4 right-4 h-5 w-5 rotate-45 rounded bg-orange-500/70" />

                <Quote className="h-8 w-8 text-orange-500" />

                <p className="mt-4 text-sm leading-8 text-gray-300">
                  The beautiful thing about learning is that no one can take it
                  away from you.
                </p>

                <p className="mt-4 text-sm font-medium text-orange-500">
                  — B.B. King
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

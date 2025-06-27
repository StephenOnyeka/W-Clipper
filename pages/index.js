import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import {
  Scissors,
  Play,
  Mic,
  Sparkles,
  Upload,
  Film,
  SplitSquareVertical,
  BadgeCheck,
} from "lucide-react";

export default function Home() {
  return (
    <div className="">
      <div>
        <Navbar />
      </div>

      <main>
        {/* Hero */}
        <section className="bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
            <h1 className="text-4xl tracking-tighter md:text-6xl font-extrabold text-gray-900 leading-tighter mx-auto">
              AI-powered clips that make your&nbsp;podcast&nbsp;go&nbsp;viral
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Wiseclipper finds your podcast&apos;s best moments, adds animated
              subtitles, and formats them for TikTok, Reels, and
              more—in&nbsp;minutes.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/signup"
                className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white justify-center font-semibold px-6 py-3 rounded-md text-lg shadow"
              >
                <Sparkles className="h-5 w-5" />
                Try it&nbsp;Free
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center gap-2 border border-gray-300 hover:border-gray-400 text-gray-800 bg-white font-semibold px-6 py-3 rounded-md text-lg"
              >
                <Play className="h-5 w-5" />
                See&nbsp;Plans
              </Link>
            </div>
          </div>
        </section>

        {/* Features */}
        <section id="features" className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Why&nbsp;Wiseclipper?
              </h2>
              <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                Everything you need to turn long-form conversations into
                scroll-stopping content.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {[
                {
                  Icon: Upload,
                  title: "Video-Only Uploads",
                  desc: "Drag & drop a file or paste a YouTube link. Audio-only files are automatically rejected.",
                },
                {
                  Icon: Mic,
                  title: "Accurate Transcripts",
                  desc: "Word-level timestamps & speaker detection give you perfect subtitles every time.",
                },
                {
                  Icon: Sparkles,
                  title: "AI Clip Detection",
                  desc: "Our model surfaces 5-10 viral-ready moments and writes a one-sentence hook for each.",
                },
                {
                  Icon: Film,
                  title: "Automatic Rendering",
                  desc: "Formatted for 9:16 vertical, face-cropped, branded, and subtitled—hands-free.",
                },
                {
                  Icon: SplitSquareVertical,
                  title: "1:1 Quote Highlights",
                  desc: "Generate square split-screen quote cards for LinkedIn & Instagram in seconds.",
                },
                {
                  Icon: BadgeCheck,
                  title: "Background Processing",
                  desc: "Upload, walk away, and grab your finished clips later. No waiting around.",
                },
              ].map(({ Icon, title, desc }) => (
                <div
                  key={title}
                  className="bg-white rounded-xl shadow p-8 text-center"
                >
                  <Icon className="mx-auto h-10 w-10 text-purple-600 mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Workflow */}
        <section id="workflow" className="bg-gray-50 py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                From Upload&nbsp;→ Viral&nbsp;Clip in 3 Steps
              </h2>
            </div>

            <ol className="space-y-12 max-w-3xl mx-auto">
              {[
                {
                  Icon: Upload,
                  title: "Upload Your Podcast Video",
                  desc: "Drag & drop the full episode or paste the YouTube URL.",
                },
                {
                  Icon: Sparkles,
                  title: "AI Finds the Gold",
                  desc: "Wiseclipper transcribes, detects headlines, and pulls 5-10 viral moments.",
                },
                {
                  Icon: Film,
                  title: "Download & Share",
                  desc: "Grab your clips—perfectly formatted for TikTok, Reels, Shorts, & more.",
                },
              ].map(({ Icon, title, desc }, i) => (
                <li key={title} className="relative pl-14">
                  <span className="absolute left-0 top-0 flex items-center justify-center bg-purple-600 text-white h-10 w-10 rounded-full font-bold">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-1 flex items-center gap-2">
                      <Icon className="h-5 w-5 text-purple-600" />
                      {title}
                    </h3>
                    <p className="text-gray-600">{desc}</p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="text-center mt-20">
              <Link
                href="/signup"
                className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold px-8 py-3 rounded-md text-lg shadow"
              >
                Start&nbsp;Clipping&nbsp;Now
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl tracking-tighter md:text-6xl font-extrabold text-gray-900 leading-tighter mx-auto">
              Ready to turn your podcast into viral content?
            </h2>
            {/* <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
              Ready to turn your podcast into viral content?
            </h2> */}
            <p className="mt-4 text-gray-600 text-lg">
              Join dozens of creators using Wiseclipper to 10× their reach.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/signup"
                className="inline-flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-3 rounded-md text-lg shadow"
              >
                Get&nbsp;Started&nbsp;Free
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center gap-2 border border-gray-300 hover:border-gray-400 text-gray-800 bg-white font-semibold px-6 py-3 rounded-md text-lg"
              >
                View&nbsp;Pricing
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
// import Image from "next/image";
// import { Geist, Geist_Mono } from "next/font/google";
// 
// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });
// 
// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });
// 
// export default function Home() {
//   return (
//     <div
//       className={`${geistSans.className} ${geistMono.className} grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]`}
//     >
//       <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
//         <Image
//           className="dark:invert"
//           src="/next.svg"
//           alt="Next.js logo"
//           width={180}
//           height={38}
//           priority
//         />
//         <ol className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
//           <li className="mb-2 tracking-[-.01em]">
//             Get started by editing{" "}
//             <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-[family-name:var(--font-geist-mono)] font-semibold">
//               pages/index.js
//             </code>
//             .
//           </li>
//           <li className="tracking-[-.01em]">
//             Save and see your changes instantly.
//           </li>
//         </ol>
//         <div className="flex gap-4 items-center flex-col sm:flex-row">
//           <a
//             className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               className="dark:invert"
//               src="/vercel.svg"
//               alt="Vercel logomark"
//               width={20}
//               height={20}
//             />
//             Deploy now
//           </a>
//           <a
//             className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
//             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Read our docs
//           </a>
//         </div>
//       </main>
//       <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/file.svg"
//             alt="File icon"
//             width={16}
//             height={16}
//           />
//           Learn
//         </a>
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/window.svg"
//             alt="Window icon"
//             width={16}
//             height={16}
//           />
//           Examples
//         </a>
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://nextjs.org?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/globe.svg"
//             alt="Globe icon"
//             width={16}
//             height={16}
//           />
//           Go to nextjs.org →
//         </a>
//       </footer>
//     </div>
//   );
// }

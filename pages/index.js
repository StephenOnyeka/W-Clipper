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

// app/toolkit/page1.jsx
import Head from "next/head";

export default function Page1() {
  return (
    <>
      <Head>
        <title>The WhyBhanshu Creative Toolkit — Page 1</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="min-h-screen flex items-center justify-center bg-[#EFE8DA] p-8">
        <article className="w-[210mm] h-[297mm] max-w-[900px] bg-transparent">
          <header className="flex items-start justify-between">
            <div className="text-left">
              <div className="text-sm text-[#12213B] font-medium">WhyBhanshu</div>
            </div>
            <div className="text-right opacity-0 print:opacity-100"> {/* invisible on screen; visible if needed for printing */}
              {/* optional small branding at top-right */}
            </div>
          </header>

          <section className="flex flex-col items-start justify-center h-[calc(100%-40px)] pt-8">
            <h1 className="font-[\"Playfair_Display\",serif] text-[#12213B] text-[56px] leading-[1.02] max-w-[780px]">
              The WhyBhanshu <span className="block">Creative Toolkit</span>
            </h1>

            <p className="mt-6 text-[18px] max-w-[700px] text-[#252525] font-sans">
              A distilled brand system built from your voice, your choices, and the
              psychology behind your content.
            </p>

            <div className="mt-10 flex items-center gap-8">
              <div className="uppercase text-[12px] tracking-widest font-medium text-[#12213B]">Curious.</div>
              <div className="uppercase text-[12px] tracking-widest font-medium text-[#12213B]">Rational.</div>
              <div className="uppercase text-[12px] tracking-widest font-medium text-[#12213B]">Human.</div>
            </div>

            <footer className="mt-auto pt-12">
              <div className="text-sm text-[#555555]">Built by: <span className="font-medium">Priyuu</span></div>
              <div className="text-sm text-[#555555]">For: <span className="font-medium">WhyBhanshu Brand Team</span></div>
            </footer>
          </section>
        </article>
      </main>
    </>
  );
}

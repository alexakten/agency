import Link from "next/link";
import Navbar from "./components/Navbar";
import Pricing from "./components/Pricing";
import Project from "./components/Project";
import Footer from "./components/Footer";
import Marquee from "./components/Marquee";
import { Motion } from "./components/Motion";
import Logos from "./components/Logos";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center overflow-x-hidden bg-white px-3 tracking-tight text-black sm:px-8 ">
      <Motion
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.5 }}
        className="flex w-full max-w-8xl flex-col items-center"
      >
        <Navbar />
        {/* Hero */}
        <section className="z-10 mt-32 flex w-full max-w-4xl flex-col items-center text-center">
          <div className="border-gray-150 flex items-center rounded-full border py-1 pl-2 pr-3 text-sm">
            <span className="relative flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-black opacity-75"></span>
              <span className="relative inline-flex h-3 w-3 rounded-full bg-black"></span>
            </span>
            <p className="pl-2 opacity-50 ">2 spots open for September</p>
          </div>
          <h1 className="mt-4 text-[clamp(40px,6vw,80px)] font-medium leading-[1] tracking-tight">
            Web and product <br />
            <span className="font-freight text-[clamp(46px,6.666vw,88px)] font-semibold italic">
              design studio
            </span>
          </h1>
          <h2 className="mt-6 max-w-xs text-lg opacity-50 sm:max-w-xl sm:text-xl">
            We&apos;re a fully remote studio designing landing pages and
            products for startups that iterate fast.
          </h2>
          <div className="mt-8 flex items-center gap-3 tracking-normal">
            <Link
              href="mailto:alex@thefirsthouse.se?subject=Demo%20Call&body=I%20would%20like%20to%20book%20a%20call."
              className="rounded-full bg-black px-5 py-2.5 text-sm font-medium text-white hover:bg-zinc-800"
            >
              Book a call
            </Link>

            {/* <Link
              href={"/work"}
              className="group flex items-center gap-1 rounded-full border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium   hover:bg-gray-50"
            >
              See work{" "}
              <span className="inline-block translate-x-[1px] tracking-normal transition-transform duration-200 group-hover:translate-x-1">
                -&gt;
              </span>
            </Link> */}
          </div>
          <p className="mt-32 text-sm opacity-50">Trusted by teams at</p>
          <div className="mt-5">
            <Logos />
          </div>
        </section>

        {/* Testimonials */}
        <section className="mt-20 flex flex-col items-center gap-4 md:px-16">
          <Marquee />
        </section>
      </Motion>

      {/* Projects */}
      <section className=" flex w-full max-w-8xl flex-col items-center">
        {/* <h2 className="mt-4 max-w-2xl text-center text-[clamp(32px,5.5vw,48px)] font-semibold leading-[1.1] tracking-tighter">
          Recent projects
        </h2> */}
        <div className="grid w-full max-w-5xl grid-cols-1">
          <Project
            client="Qura"
            description={[
              { type: "text", content: "Legal research powered by AI — " },
              {
                type: "link",
                content: "qura.law",
                url: "https://www.qura.law",
              },
            ]}
            images={[
              { type: "full", url: "/images/qura/qura-1.png" },
              { type: "half", url: "/images/qura/qura-2.png" },
              { type: "half", url: "/images/qura/qura-3.png" },
            ]}
          />
          <Project
            client="Airbon"
            description={[
              {
                type: "text",
                content:
                  "Climate tech startup tackling emissions in agriculture — ",
              },
              {
                type: "link",
                content: "airbon.co",
                url: "https://www.airbon.co",
              },
            ]}
            images={[
              { type: "full", url: "/images/airbon/airbon-1.png" },
              { type: "full", url: "/images/airbon/airbon-2.png" },
            ]}
          />
          <Project
            client="MycoMine"
            description={[
              {
                type: "text",
                content: "The future for sustainable waste management —  ",
              },
              {
                type: "link",
                content: "mycomine.se",
                url: "https://www.mycomine.se",
              },
            ]}
            images={[
              { type: "full", url: "/images/mycomine/mycomine-1.png" },
              { type: "full", url: "/images/mycomine/mycomine-2.png" },
              // { type: "full", url: "/images/mycomine/mycomine-3.png" },
            ]}
          />
          <Project
            client="Payable"
            description={[
              { type: "text", content: "Modern debt collection company — " },
              {
                type: "link",
                content: "payable.se",
                url: "https://www.payable.se",
              },
            ]}
            images={[
              { type: "half", url: "/images/payable/payable-1.png" },
              { type: "half", url: "/images/payable/payable-2.png" },
              { type: "full", url: "/images/payable/payable-3.png" },
            ]}
          />
          <Project
            client="Flexiwaggon"
            description={[
              { type: "text", content: "Intermodal truck transport." },
              // { type: "link", content: "redpoint.top", url: "https://www.redpoint.top" },
            ]}
            images={[
              { type: "full", url: "/images/flexiwaggon/flexiwaggon-1.png" },
              { type: "full", url: "/images/flexiwaggon/flexiwaggon-2.png" },
              { type: "half", url: "/images/flexiwaggon/flexiwaggon-3.png" },
              { type: "half", url: "/images/flexiwaggon/flexiwaggon-4.png" },
            ]}
          />
          <Project
            client="Redpoint"
            description={[
              {
                type: "text",
                content: "Loyalty program for climbing gyms — ",
              },
              {
                type: "link",
                content: "redpoint.top",
                url: "https://www.redpoint.top",
              },
            ]}
            images={[
              { type: "full", url: "/images/redpoint/redpoint-1.png" },
              { type: "full", url: "/images/redpoint/redpoint-2.png" },
              { type: "half", url: "/images/redpoint/redpoint-3.png" },
              { type: "half", url: "/images/redpoint/redpoint-4.png" },
            ]}
          />
          <Project
            client="Stockholm Water Technology"
            description={[
              { type: "text", content: "Sustainable water treatment — " },
              {
                type: "link",
                content: "stockholmwater.se",
                url: "https://www.stockholmwater.se",
              },
            ]}
            images={[{ type: "full", url: "/images/swt/swt-1.png" }]}
          />
          <Project
            client="Truck on Track Solutions"
            description={[
              { type: "text", content: "Freight transport on tracks. " },
            ]}
            images={[
              { type: "full", url: "/images/tts/tts-1.png" },
              { type: "full", url: "/images/tts/tts-2.png" },
              { type: "half", url: "/images/tts/tts-3.png" },
              { type: "half", url: "/images/tts/tts-4.png" },
            ]}
          />
        </div>
      </section>

      <Footer />
    </main>
  );
}

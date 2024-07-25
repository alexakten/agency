import Link from "next/link";
import Navbar from "./components/Navbar";
import Pricing from "./components/Pricing";
import Project from "./components/Project";
import Footer from "./components/Footer";
import Marquee from "./components/Marquee";
import { MotionDiv } from "./components/MotionDiv";

export default function Home() {
  return (
    <main className="flex flex-col items-center overflow-hidden bg-white px-3 tracking-tight sm:px-8">
      <MotionDiv
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.3 }}
      >
        <Navbar />
      </MotionDiv>

      <MotionDiv
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.3 }}
      >
        {/* Hero */}
        <section className="z-10 mt-20 flex flex-col items-center text-center sm:mt-24">
          {/* <div className="rounded-full text-sm border px-5 opacity-75 py-1">New spots open for Q3</div> */}

          <h1 className="max-w-2xl text-center text-[clamp(32px,5.5vw,56px)] font-[550] leading-[1.15] tracking-tighter">
            We help startups <br /> raise their{" "}
            <span className="font-freight text-[clamp(37.12px,6.38vw,64.96px)] italic">
              next round
            </span>
          </h1>
          <p className="opacity-1 mt-4 text-xl">
            Design, UX/UI & GTM partner <br className="sm:hidden" />
            for startups.
          </p>
          <div className="mt-6 flex gap-3 tracking-normal">
            <Link
              href={"mailto:alex@thefirsthouse.se"}
              className="rounded-full bg-gradient-to-t from-gray-200 to-gray-200 p-px shadow-sm hover:shadow-none"
            >
              {/* bg-gradient-to-tl from-gray-50 to-white */}
              <div className="rounded-full  bg-white px-5 py-2.5 text-sm  font-medium hover:bg-gray-50">
                Book a call
              </div>
            </Link>

            <Link
              href={"mailto:alex@thefirsthouse.se"}
              className="group flex items-center gap-1 rounded-full border border-white bg-white px-5 py-2.5 text-sm font-medium hover:border-gray-200  hover:bg-gray-50"
            >
              Say hello{" "}
              <span className="inline-block translate-x-[1px] tracking-normal transition-transform duration-200 group-hover:translate-x-1">
                -&gt;
              </span>
            </Link>
          </div>
        </section>

        {/* Testimonials */}
        <section className="mt-20 flex flex-col items-center gap-4 md:px-16">
          <Marquee />
        </section>
      </MotionDiv>

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
              { type: "text", content: "Modern debt collection company. " },
              // { type: "link", content: "payable.se", url: "https://www.payable.se" },
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

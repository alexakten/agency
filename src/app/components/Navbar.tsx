import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="top-0 z-20 flex w-full max-w-8xl items-center justify-center pt-8 sm:px-10 sm:pt-12">
      <div className="flex flex-col items-center justify-center gap-1">
        <svg
          width="32"
          height="32"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0 0H24V8V16H16V24H24V16H32H40V40H0V0ZM40 8V0H32V8H40Z"
            fill="black"
          />
        </svg>

        <p className="relative font-freight text-2xl font-semibold leading-[1] tracking-tight">
          first
          <span className="font-medium italic">house</span>
          {/* <span className="absolute top-2 font-normal -right-1 font-inter text-[0.3rem]">®</span> */}
        </p>
      </div>
    </nav>
  );
}

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="top-0 z-20 flex w-full max-w-8xl items-center justify-center pt-10 sm:px-10">
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

        <p className="relative font-freight text-2xl font-semibold leading-[0.90] tracking-tight mix-blend-difference ">
          first
          <span className="font-medium italic">house</span>
          <span className="absolute top-1 font-normal -right-2 font-inter text-[0.5rem]">™</span>
        </p>
      </div>
    </nav>
  );
}

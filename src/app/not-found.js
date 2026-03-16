import Link from "next/link";
import AnimatedButton from "./components/button/button";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <h1
          className="max-1280:text-heading-md
            screen-1280:text-heading-lg
            screen-1281:text-heading-xl
            screen-1800:text-heading-2xl
            screen-2200:text-heading-3xl
            screen-2750:text-heading-4xl  mb-4"
        >
          404 - Page Not Found
        </h1>
        <p className="mb-4">
          Sorry, the page you are looking for does not exist.
        </p>
        <Link href="/">
          <AnimatedButton text="Go Home" className="mx-auto" />
        </Link>
      </div>
    </div>
  );
}

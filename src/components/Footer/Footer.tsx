import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex justify-center items-center h-16 bg-gray-100">
      <p className="text-gray-500 text-sm">
        Made with ❤️ by{" "}
        <Link href="" className="text-blue-500 font-medium hover:underline">
          TechStarHub
        </Link>
      </p>
    </footer>
  );
}

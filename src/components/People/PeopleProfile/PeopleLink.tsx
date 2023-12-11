import Link from "next/link";

type PeopleLinkProps = {
  label: string;
  url: string;
  type: string;
  key: number;
};

async function IconImporter(type: string) {
  switch (type) {
    case "twitter":
      return import("react-icons/fa6").then((module) => module.FaTwitter);
    case "github":
      return import("react-icons/fa6").then((module) => module.FaGithub);
    case "linkedin":
      return import("react-icons/fa6").then((module) => module.FaLinkedin);
    case "instagram":
      return import("react-icons/fa6").then((module) => module.FaInstagram);
    case "facebook":
      return import("react-icons/fa6").then((module) => module.FaFacebook);
    case "youtube":
      return import("react-icons/fa6").then((module) => module.FaYoutube);
    default:
      return import("react-icons/fa6").then((module) => module.FaLink);
  }
}

export default async function PeopleLink({
  label,
  url,
  type,
  key,
}: PeopleLinkProps) {
  const Icon = await IconImporter(type);
  return (
    <Link
      key={key}
      href={url}
      className="w-full flex items-center gap-4 px-4 py-2 rounded-full bg-slate-200 hover:border-2 hover:border-sky-600 transition-all duration-400"
    >
      <Icon className="text-xl" />
      <h1 className="text-sm font-medium">{label}</h1>
    </Link>
  );
}

import Link from "next/link";
import { FaLocationDot } from "react-icons/fa6";

type PeopleCardProps = {
  name: string;
  username: string;
  headline: string;
  profilePic: string;
  location: string;
  tags: string[];
};

export default function PeopleCard({ people }: { people: PeopleCardProps }) {
  const { name, username, headline, profilePic, location, tags } = people;
  return (
    <Link href={`/people/${username}`}>
      <div className="w-full flex justify-between p-3 rounded border shadow">
        <div className="w-full">
          <h1 className="text-2xl font-bold">{name}</h1>
          <p className="mt-1 text-md font-medium">{headline}</p>
          <p className="text-sm flex items-center gap-1 mt-1">
            <FaLocationDot className="" />
            {location}
          </p>
          <p className="flex flex-wrap gap-2 mt-2">
            {tags.map((tag) => (
              <span className="bg-sky-200 cursor-pointer text-sm text-sky-600 rounded-full px-2 hover:border-sky-600">
                {tag}
              </span>
            ))}
          </p>
        </div>
        <div className="">
          <img
            src={profilePic}
            alt={name}
            width={100}
            height={100}
            className="rounded-full"
          />
        </div>
      </div>
    </Link>
  );
}
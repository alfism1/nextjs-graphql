import React from "react";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

function Card({
  title,
  tag,
  description,
  project_slug,
  github_url,
  color,
  ongoing,
}) {
  const colorTheme = {
    green: {
      border: "border-green-500",
      bg: "bg-green-200",
      bg_hover: "bg-green-300",
    },
    red: {
      border: "border-red-500",
      bg: "bg-red-200",
      bg_hover: "bg-red-300",
    },
    gray: {
      border: "border-gray-500",
      bg: "bg-gray-200",
      bg_hover: "bg-gray-300",
    },
  };

  let colorTemplate;
  switch (color) {
    case "red":
      colorTemplate = colorTheme.red;
      break;
    case "green":
      colorTemplate = colorTheme.green;
      break;

    default:
      colorTemplate = colorTheme.gray;
      break;
  }

  return (
    <div className="col-span-12 relative md:col-span-4 border bg-white shadow-xl rounded-md px-4 pt-2 pb-14 md:w-70 hover:scale-105 transition-transform duration-200">
      <div className="flex items-start justify-between pb-2 mb-2 border-b">
        <h2 className="font-semibold">{title}</h2>
        <div
          className={`font-semibold lowercase px-3 border ${colorTemplate.border} rounded-md`}
        >
          {tag}
        </div>
      </div>

      <div>{description}</div>

      <div className="absolute left-0 bottom-2 w-full">
        <div className="flex flex-row justify-between mx-4">
          {ongoing && (
            <div className={`text-center leading-7 mt-3 mb-2`}>
              Under construction
            </div>
          )}
          {!ongoing && (
            <>
              <Link href={project_slug}>
                <div
                  role="button"
                  className={`text-center leading-7 w-36 mt-3 mb-2 cursor-pointer ${colorTemplate.bg} ${colorTemplate.border} transition-all duration-150 hover:${colorTemplate.bg_hover}`}
                >
                  Click here!
                </div>
              </Link>

              <div className="mt-3 mb-2 transition-all duration-150 hover:scale-110">
                <a href={github_url} target="_blank">
                  <FaGithub className="text-3xl" />
                </a>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Card;

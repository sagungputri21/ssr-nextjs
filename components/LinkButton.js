import Link from "next/dist/client/link";

const LinkButton = () => {
  return (
    <Link href="comments">
      <button className="px-5 md:py-3 py-2 bg-blue-200 hover:bg-blue-500 rounded-md">
        <a className="hover:text-white text-blue-800 font-semibold">
          See More
        </a>
      </button>
    </Link>
  );
};

export default LinkButton;

import Link from "next/link";


const FooterItems = ({ Links, title }) => {
  return (
    <ul>
      <h1 className="mb-1 font-semibold">{title}</h1>
      {Links.map((link) => {
        return (
          <li key={link.name}>
            <Link href={link.link} className="text-gray-400 hover:text-teal-500 duration-300 text-sm cursor-pointer leading-6">{link.name}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default FooterItems;

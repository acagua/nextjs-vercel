import Link from "next/link";
import { useRouter } from "next/router";

interface Props {
  href: string;
  text: string;
}

const style: React.CSSProperties = {
  color: "#0070f3",
  textDecoration: "underline",
};

export const ActiveLink: React.FC<Props> = ({ href, text }) => {
  const router = useRouter();

  return (
    <Link style={router.asPath === href ? style : undefined} href={href}>
      {text}
    </Link>
  );
};

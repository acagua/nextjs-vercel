import Link from "next/link";
import { MainLayout } from "app-root/components/layouts/MainLayout";

export default function HomePage() {
  return (
    <MainLayout pageName="Home">
      <h1 className={"code"}>Home Page</h1>
      <p className={"description"}>
        Ir a <Link href="/about"> About </Link>
      </p>
    </MainLayout>
  );
}

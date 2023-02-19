import Link from "next/link";
import { MainLayout } from "app-root/components/layouts/MainLayout";
import { DarkLayout } from "app-root/components/layouts/DarkLayout";
import type { NextPageWithLayout } from "./_app";

const AboutPage: NextPageWithLayout = () => {
  return (
    <>
      <h1 className={"code"}>About Page</h1>
      <p className={"description"}>
        Ir a <Link href="/"> HOME </Link>
      </p>
    </>
  );
};

AboutPage.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <MainLayout pageName="About">
      <DarkLayout>{page}</DarkLayout>
    </MainLayout>
  );
};

export default AboutPage;

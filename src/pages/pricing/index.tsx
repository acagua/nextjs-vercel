import Link from "next/link";
import { MainLayout } from "app-root/components/layouts/MainLayout";
import { DarkLayout } from "app-root/components/layouts/DarkLayout";
import type { NextPageWithLayout } from "../_app";

const PricingPage: NextPageWithLayout = () => {
  return (
    <>
      <h1 className={"code"}>Pricing Page</h1>
      <p className={"description"}>
        Ir a <Link href="/"> HOME </Link>
      </p>
    </>
  );
};

PricingPage.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <MainLayout pageName="Pricing">
      <DarkLayout>{page}</DarkLayout>
    </MainLayout>
  );
};

export default PricingPage;

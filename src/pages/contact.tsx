import Link from "next/link";
import { MainLayout } from "app-root/components/layouts/MainLayout";

const ContactPage = () => {
  return (
    <MainLayout pageName="Contact">
      <h1 className={"code"}>Contact Page</h1>
      <p className={"description"}>
        Ir a <Link href="/"> HOME </Link>
      </p>
    </MainLayout>
  );
};

export default ContactPage;

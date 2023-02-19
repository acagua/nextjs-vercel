import Head from "next/head";
import { Navbar } from "app-root/components/Navbar";
import styles from "./MainLayout.module.css";

interface Props {
  pageName: string;
}

export const MainLayout: React.FC<React.PropsWithChildren<Props>> = ({
  children,
  pageName,
}) => {
  return (
    <>
      <Head>
        <title>{`App - ${pageName}`}</title>
        <meta name="description" content={`${pageName} Page`} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className={styles.main}> {children} </main>
    </>
  );
};

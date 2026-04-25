import Head from "next/head";
import Link from "next/link";
import styles from "@/styles/404.module.scss";
import Image from "next/image";

const Custom404 = () => {
  return (
    <>
      <Head>
        <title>404 - Halaman Tidak Ditemukan</title>
      </Head>
      <div className={styles.error}>
        <Image src="/page-not-found.png" alt="404 Illustration" className={styles.error__image} width={350} height={350} />
        <h1 className={styles.error__title}>404 - Halaman Tidak Ditemukan</h1>
        <p className={styles.error__desc}>Maaf, halaman yang Anda cari tidak tersedia atau telah dipindahkan.</p>
        <Link href="/" className={styles.error__button}>
          Kembali ke Home
        </Link>
      </div>
    </>
  );
};

export default Custom404;

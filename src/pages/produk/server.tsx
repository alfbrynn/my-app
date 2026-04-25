import TampilanProduk from "../../views/produk";
import { ProductType } from "../../types/product.type";
import styles from "./product.module.scss";
import { retrieveProducts } from "../../utils/db/servicefirebase";

const halamanProdukServer = (props: { products: ProductType[] }) => {
  const { products } = props;
  return (
    <div>
      <h1 className={styles.produk__title}>Halaman Produk Server</h1>
      <TampilanProduk products={products} />
    </div>
  );
};

export default halamanProdukServer;

// Fungsi getServerSideProps akan dipanggil setiap kali halaman ini diakses, dan akan mengambil data produk dari API sebelum merender halaman.
export async function getServerSideProps() {
  const products = await retrieveProducts("products");
  
  return {
    props: {
      products: products || [], // Pastikan untuk memberikan nilai default jika data tidak tersedia
    },
  };
}
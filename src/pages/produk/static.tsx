import TampilanProduk from "../../views/produk";
import { ProductType } from "../../types/product.type";
import styles from "./product.module.scss";
import { retrieveProducts } from "../../utils/db/servicefirebase";

const halamanProdukStatic = (props: { products: ProductType[] }) => {
  const { products } = props;
  return (
    <div>
      <h1 className={styles.produk__title}>Halaman Produk Static</h1>
      <TampilanProduk products={products} />
    </div>
  );
};

export default halamanProdukStatic;

export async function getStaticProps() {
  const products = await retrieveProducts("products");

  return {
    props: {
      products,
    },
    revalidate: 10, // Revalidate data setiap 10 detik
  };
}
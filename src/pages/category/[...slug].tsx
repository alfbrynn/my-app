import { useRouter } from "next/router";

const halamanKategori = () => {
  const { query } = useRouter();
  const slug = query.slug;

  return (
    <div>
      <h1>Daftar Kategori</h1>
      <ul>
        {Array.isArray(slug) ? (
          slug.map((item, index) => (
            <li key={index}>
              List {index + 1}: {item}
            </li>
          ))
        ) : (
          <li>{slug || "Tidak ada kategori spesifik"}</li>
        )}
      </ul>
    </div>
  );
};

export default halamanKategori;

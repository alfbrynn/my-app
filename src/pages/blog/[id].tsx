import { useRouter } from "next/router";

const HalamanBlog = () => {
  const { query } = useRouter();
  return (
    <div>
      <h1>Halaman Blog</h1>
      <p>Blog: {query.id}</p>
    </div>
  );
};

export default HalamanBlog;

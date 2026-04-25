import { render, screen } from "@testing-library/react";
import HalamanProduk, { getStaticProps, getStaticPaths } from "@/pages/produk/[produk]";

jest.mock("next/router", () => ({
    useRouter() { return { isReady: true }; }
}));

global.fetch = jest.fn() as jest.Mock;

describe("Halaman Detail Produk", () => {
    it("renders detail page correctly", () => {
        const mockProduct = { id: "1", name: "Detail Product 1", price: 10000, image: "/img1.jpg", category: "Cat1", description: "Desc" };
        const page = render(<HalamanProduk product={mockProduct} />);
        expect(page).toMatchSnapshot();
    });

    it("getStaticPaths works", async () => {
        (global.fetch as jest.Mock).mockResolvedValueOnce({
            json: jest.fn().mockResolvedValueOnce({ data: [{ id: "1" }] })
        });
        const paths = await getStaticPaths();
        expect(paths).toEqual({
            paths: [{ params: { produk: "1" } }],
            fallback: false
        });
    });

    it("getStaticProps works", async () => {
        (global.fetch as jest.Mock).mockResolvedValueOnce({
            json: jest.fn().mockResolvedValueOnce({ data: { id: "1", name: "Test" } })
        });
        const response = await getStaticProps({ params: { produk: "1" } });
        expect(response).toEqual({
            props: {
                product: { id: "1", name: "Test" }
            }
        });
    });
});

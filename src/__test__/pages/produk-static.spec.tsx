import { render, screen } from "@testing-library/react";
import HalamanProdukStatic, { getStaticProps } from "@/pages/produk/static";

// Mock router
jest.mock("next/router", () => ({
    useRouter() {
        return {
            route: "/product",
            pathname: "",
            query: {},
            asPath: "",
            push: jest.fn(),
            event: { on: jest.fn(), off: jest.fn() },
            isReady: true,
        };
    },
}));

global.fetch = jest.fn() as jest.Mock;

describe("Halaman Produk Static", () => {
    it("renders static page correctly", () => {
        const mockProducts = [
            { id: "1", name: "Product 1", price: 10000, image: "/img1.jpg", category: "Cat1" }
        ];
        const page = render(<HalamanProdukStatic products={mockProducts} />);
        expect(screen.getByText("Halaman Produk Static")).toBeDefined();
        expect(page).toMatchSnapshot();
    });

    it("getStaticProps returns data", async () => {
        (global.fetch as jest.Mock).mockResolvedValueOnce({
            json: jest.fn().mockResolvedValueOnce({ data: [{ id: "2", name: "Test" }] })
        });
        const response = await getStaticProps();
        expect(response).toEqual({
            props: {
                products: [{ id: "2", name: "Test" }]
            },
            revalidate: 10
        });
    });
});

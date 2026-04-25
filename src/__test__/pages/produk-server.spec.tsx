import { render, screen } from "@testing-library/react";
import HalamanProdukServer, { getServerSideProps } from "@/pages/produk/server";

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

// Mock fetch
global.fetch = jest.fn() as jest.Mock;

describe("Halaman Produk Server", () => {
    it("renders server page correctly", () => {
        const mockProducts = [
            { id: "1", name: "Product 1", price: 10000, image: "/img1.jpg", category: "Cat1" }
        ];
        const page = render(<HalamanProdukServer products={mockProducts} />);
        expect(screen.getByText("Halaman Produk Server")).toBeDefined();
        expect(page).toMatchSnapshot();
    });

    it("getServerSideProps returns data", async () => {
        (global.fetch as jest.Mock).mockResolvedValueOnce({
            json: jest.fn().mockResolvedValueOnce({ data: [{ id: "1", name: "Test" }] })
        });
        const response = await getServerSideProps();
        expect(response).toEqual({
            props: {
                products: [{ id: "1", name: "Test" }]
            }
        });
    });
});

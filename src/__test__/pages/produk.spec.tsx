import { render, screen, act } from "@testing-library/react";
import TampilanProduk from "@/pages/produk";

// Mocking Router (Tugas Kriteria 4)
jest.mock("next/router", () => ({
    useRouter() {
        return {
            route: "/product",
            pathname: "",
            query: {},
            asPath: "",
            push: jest.fn(),
            events: {
                on: jest.fn(),
                off: jest.fn(),
            },
            beforePopState: jest.fn(() => null),
            prefetch: jest.fn(() => null),
            isReady: true,
        };
    },
}));

describe("Product Page", () => {
    it("renders product page correctly", async () => {
        let page: any;
        await act(async () => {
            page = render(<TampilanProduk />);
        });

        // Penggunaan getByTestId dan toBe (Tugas Kriteria 2)
        // Asumsi: elemen <h1> diberi atribut data-testid="title" pada views/product
        const titleElement = await screen.findByTestId("title");
        expect(titleElement.textContent).toBe("Daftar Produk");

        // Snapshot Test (Tugas Kriteria 2)
        expect(page).toMatchSnapshot();
    });
});

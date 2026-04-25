import { render, screen, act } from "@testing-library/react"
import TampilanProduk from "@/pages/produk"

// Mocking next/router agar tidak error saat pengetesan
jest.mock("next/router", () => ({
    useRouter() {
        return {
            route: "/product",
            pathname: "",
            query: {},
            asPath: "",
            push: jest.fn(),
            event: {
                on: jest.fn(),
                off: jest.fn(),
            },
            isReady: true,
        }
    },
}))

describe("Product Page", () => {
    it("renders product page correctly", async () => {
        let page: any;
        await act(async () => {
            page = render(<TampilanProduk />);
        });
        
        await screen.findByTestId("title");
        expect(page).toMatchSnapshot();
    })
})
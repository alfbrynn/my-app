import { render, screen } from "@testing-library/react"
import AboutPage from "@/pages/about"

describe("About Page", () => {
    it("renders about page correctly", () => {
        const page = render(<AboutPage />)

        // Memastikan elemen dengan test-id "title" memiliki teks yang tepat
        // expect(screen.getByTestId("title").textContent).toBe("About Page")

        // Melakukan pengecekan snapshot secara keseluruhan
        expect(page).toMatchSnapshot()
    })
})
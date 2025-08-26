import { render, screen, fireEvent } from "@testing-library/react"
import Navbar from "@/app/(home)/_components/Navbar"

const pushMock = jest.fn()
jest.mock("next/navigation", () => ({
  useRouter: () => ({
    push: pushMock,
  }),
}))

describe("Navbar link redirection", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  test("Home link points to /", () => {
    render(<Navbar />)
    const link = screen.getByText("Accueil")
    expect(link).toHaveAttribute("href", "/")
  })

  test("About link points to /about", () => {
    render(<Navbar />)
    const link = screen.getByText("A Propos")
    expect(link).toHaveAttribute("href", "/about")
  })

  test("Sites Touristiques link points to /sites_touristiques", () => {
    render(<Navbar />)
    const link = screen.getByText("Sites Touristiques")
    expect(link).toHaveAttribute("href", "/sites_touristiques")
  })

  test("CTA button redirects to /explore", () => {
    render(<Navbar />)
    const button = screen.getByRole("button", { name: /explorer vos destinations/i })
    fireEvent.click(button)
    expect(pushMock).toHaveBeenCalledWith("/explore")
  })
})

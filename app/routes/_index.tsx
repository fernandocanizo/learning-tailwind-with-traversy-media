import type { MetaFunction } from "@remix-run/node"

export const meta: MetaFunction = () => {
  return [
    { title: "Learning Tailwind" },
    { name: "description", content: "A mock project to learn TailwindCSS" },
  ]
}

export default function Index() {
  return (
    <nav className="relative container mx-auto p-6 bg-slate-300 rounded-md drop-shadow-md">
      <div className="flex items-center justify-between">
        <div className="pt-2">
          <a href="/">
            <img src="img/logo.svg" alt="Logo Manage" />
          </a>
        </div>

        <div className="hidden md:flex space-x-6">
          <a href="#pricing" className="hover:text-darkGrayishBlue">Pricing</a>
          <a href="#product" className="hover:text-darkGrayishBlue">Product</a>
          <a href="#about" className="hover:text-darkGrayishBlue">About Us</a>
          <a href="#careers" className="hover:text-darkGrayishBlue">Careers</a>
          <a href="#community" className="hover:text-darkGrayishBlue active:bg-orange-300">Community</a>
        </div>
      </div>
    </nav>
  )
}

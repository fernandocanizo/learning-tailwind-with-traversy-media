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
          <img src="img/logo.svg" alt="Logo Manage" />
        </div>
      </div>
    </nav>
  )
}

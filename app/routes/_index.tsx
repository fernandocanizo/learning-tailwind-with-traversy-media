import type { MetaFunction } from "@remix-run/node"

import NavBar from "~/components/NavBar"

export const meta: MetaFunction = () => {
  return [
    { title: "Learning Tailwind" },
    { name: "description", content: "A mock project to learn TailwindCSS" },
  ]
}

export default function Index() {
  return (
    <NavBar />
  )
}

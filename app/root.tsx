import style from "~/style.css?url"

import type { LinksFunction } from "@remix-run/node"

import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useRouteError,
  isRouteErrorResponse,
} from "@remix-run/react"

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: style },
]

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}

export default function App() {
  return <Outlet />
}

export function ErrorBoundary() {
  const error = useRouteError()

  if (isRouteErrorResponse(error)) {
    return (
      <>
        <h1>
          {error.status} {error.statusText}
        </h1>
        <p>{error.data}</p>
      </>
    )
  }

  if (error instanceof Error) {
    return (
      <>
        <h1>Error!</h1>
        <p>{error?.message ?? "Unknown error"}</p>
      </>
    )
  }

  return (
    <>
      <h1>Unknown error type</h1>
      <p>{JSON.stringify(error)}</p>
    </>
  )
}

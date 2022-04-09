import { type LinksFunction, type MetaFunction,  } from "@remix-run/cloudflare";
import {
  useCatch,
  type ThrownResponse, 
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration, } from "@remix-run/react"
import css from './main.css';
import Menus from "./components/Menus";
import React from "react";
import Error from "./components/Error";

export const links: LinksFunction = () => [
  { href: css, rel: 'stylesheet' }
]

export const meta: MetaFunction = () => {
  return { title: "New Remix App" };
};

export const CatchBoundary = () => {
  const caught = useCatch<ThrownResponse>()

  return (
    <MainLayout>
      <Error status={caught.status} msg={caught.statusText} />
    </MainLayout>
  )
}

export const ErrorBoundary = ({ error }: { error: Error }) => {
  return (
    <MainLayout>
      <Error status={422} msg={error.message} />
    </MainLayout>
  )
}

export default function App() {
  return (
    <MainLayout>
      <Outlet />
    </MainLayout>
  )
}

const MainLayout = ({ children }: { children: React.ReactElement }) => {
  return (
    <html lang="en" className="h-full bg-gray-50">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="h-full overflow-hidden">
        <Menus>
          { children }
        </Menus>
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}

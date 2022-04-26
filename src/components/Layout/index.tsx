import { ReactNode } from "react";
import Head from "next/head";

type ILayout = {
  title: string
  children: ReactNode
}

export function Layout({ title, children }: ILayout) {
  return (
    <>
      <Head>
        <title>{`Black Pear | ${title}`}</title>
      </Head>

      {children}
    </>
  )
}

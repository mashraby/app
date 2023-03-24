import React, { ReactNode } from "react";
import Head from "next/head";
import { LayoutChildrenProps } from "@/interfaces/layout.interface";
import Footer from "../footer/footer";
import Header from "../header/header";

export default function Layout({
  children,
  title,
  description,
}: LayoutChildrenProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}

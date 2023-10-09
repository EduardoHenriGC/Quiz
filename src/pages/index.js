import IndexComp from "@/components/index/indexComp";


import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Quiz Do Milênio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main> <IndexComp /></main>
    </>
  );
}

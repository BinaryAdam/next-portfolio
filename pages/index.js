import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Layout from "./../components/Layout";
import MainSection from "./../components/MainSection";
import { getHomePageData } from "../lib/content";
import Navbar from "../components/Navbar";

export default function Home({ data }) {
  return (
    <Layout>
      <Head>
        <title>Jej wnętrza</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <main className="text-blue-dark h-screen grid grid-cols-1 content-start 2xl:grid-cols-main-wide">
        <MainSection
          id="top"
          row="1"
          classes="grid grid-rows-[200px,400px] md:grid-rows-[repeat(10,1fr),40px] grid-cols-[200px,1fr] md:grid-cols-[70px,repeat(3,100px),repeat(8,1fr)] grid-flow-row justify-items-stretch items-stretch max-h-[80vh]"
        >
          <div className="w-full relative row-start-1 md:row-start-1 col-start-1 md:col-start-2 md:col-span-3 md:row-span-3 z-20">
            <Link href='/'>
              <a>
                <Image src="/logoDark.svg" layout="fill" alt="logo" />
              </a>
            </Link>
          </div>
          <Navbar />
          <div className="bg-pink w-full h-full hidden md:block md:row-start-3 md:col-start-1 md:row-span-9 md:col-span-7"></div>
          <div className="w-full relative bg-pink row-start-1 md:row-start-4 col-start-1 md:col-start-2 row-span-2 md:row-span-7  col-span-2 md:col-span-11">
            <Image
              src={data.mainPhoto}
              layout="fill"
              alt="main"
              objectFit="cover"
            />
          </div>
          <div className="bg-gray-300 w-full h-full row-start-1 md:row-start-4 col-start-1 md:col-start-2 row-span-2 md:row-span-7 col-span-2 md:col-span-11 z-10 opacity-70"></div>
          <div className="row-start-2 md:row-start-10 col-start-1 md:col-start-8 col-span-2 md:col-span-4 z-20 justify-self-end self-end pb-10 pr-10 text-blue-dark text-right text-5xl">
            <h1>Aranżacje</h1>
            <h1>Metamorfozy</h1>
          </div>
        </MainSection>
        <MainSection id="offer1" row="2">
          <div className="grid md:grid-flow-col mt-10 text-4xl justify-items-center gap-8">
            <h2>Projektowanie wnętrz</h2>
            <h2>Home Staging</h2>
          </div>
        </MainSection>
        <section className="bg-blue-dark text-xl text-pink-light mt-10 text-center pt-20 pb-10 2xl:row-start-3 2xl:col-span-3 col-start-1">
          <p>JEJ WNĘTRZA Sylwia Cyrankowska</p>
          <p>NIP: 7831517494</p>
          <email>jejwnetrza@gmail.com</email>
          <p>Tel: 667296676</p>
        </section>
      </main>
    </Layout>
  );
}

export async function getStaticProps(context) {
  const data = await getHomePageData();
  return {
    props: { data },
  };
}

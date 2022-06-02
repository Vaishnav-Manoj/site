import Contact from '@/components/Contact';
import Head from 'next/head'
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Stack from '@/components/Stack';
import Nav from '@/components/Nav';
import { meta } from '@/data/config';
import Link from "next/link"

export default function Index() {
  return (
    <>
      <Head>
        <title>Invalid page</title>
      </Head>
      <div className="p-6 lg:p-10 max-w-4xl m-auto w-full">
        <Nav />
        <div className="overflow-x-hidden w-full">
      <h2 className="landingSectionTitle max-w-max mx-0 text-left relative mb-4 md:w-max "> Error 404 </h2>
   </div>
<h3>Someone clearly took the wrong turn.
        Return to civilization by clicking <b><Link href = "/">here</Link></b> or the avatar!</h3>
  <img
    src="https://http.cat/404"
    class="flex flex-wrap justify-center border border-lightText rounded-lg m-2 px-3 py-1 bg-black transition ease-in-out delay-4000 hover:animate-pulse"
    alt="error 404 cat"
  />
      </div>
    </>
  );
}
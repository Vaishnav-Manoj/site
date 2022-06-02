import Contact from '@/components/Contact';
import Head from 'next/head'
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Stack from '@/components/Stack';
import Nav from '@/components/Nav';
import Blog from '@/components/Blog';
import { meta } from '@/data/config';

export default function Index() {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href={meta.image} />
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content={meta.description}/>
        <meta name="author" content={meta.author}/>
        <meta name="theme-colour" content={meta.colour}/>
        <meta name="og:image" content={meta.image}/>
        <title>{meta.title}</title>
      </Head>
      
      <div className="p-6 lg:p-10 max-w-4xl m-auto w-full">
        <Nav />  
        <Hero />
        <div className="p-0 space-y-10">
          <section id="projects"></section>
          <Projects />
          <section id="blog"></section>
          <Blog />
          <section id="stack"></section>
          <Stack />
          <section id="contact"></section>
          <Contact />
        </div>
      </div>
    </>
  );
}
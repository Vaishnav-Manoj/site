import Script from 'next/script';
import Resume from '@/components/Res';
import Head from 'next/head'
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Stack from '@/components/Stack';
import { meta } from '@/data/config';

export default function Index() {
  return (
    <>
      <Head>
        <title>Resume</title>
      </Head>
      <Resume />
    </>
  );
}
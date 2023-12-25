import Fetchdata from '@/components/Fetchdata';
import Link from 'next/link'
import Image from 'next/image'
import Pokemon from '@/components/Fetchdata';

export default async function Home() {

  return (
    <main className="sm:p-16 py-16 px-8 flex flex-col gap-10">
    <h2 className="text-3xl text-black font-bold">Explore Anime</h2>

    <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
        <Pokemon />
    </section>
     
  </main>
  )
}

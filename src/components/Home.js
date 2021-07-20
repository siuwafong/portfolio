import React from 'react';

export default function Home() {
  return (
    <main>
      <img
        src="./img/toronto-skyline.jpg"
        alt="Toronto Background"
        className="absolute object-cover w-full h-full opacity-70"
      />
      <section className="relative flex justify-center min-h-screen pt-10 lg:pt-60 px-8">
        <h1 className="text-2xl text-white-100 font-bold leading-none lg:leading-snug home-name">
          Hi. I'm Wilson
        </h1>
        <p>I'm a full-stack web developer and math educator.</p>
      </section>
    </main>
  );
}

import React from 'react';

export default function Home() {
  return (
    <main>
      <img
        src="./img/toronto-skyline.jpg"
        alt="Toronto Background"
        className="absolute object-cover w-full h-full opacity-80"
      />
      <section className="relative flex-column items-end justify-around min-h-screen pt-10 lg:pt-60 px-8 text-left">
        <h1 className="text-2xl font-bold lg:leading-snug leading-none home-name text-center">
          Hi. I'm Wilson
        </h1>
        <p className=" text-xl text-gray-100 text-center">
          {' '}
          I'm a full-stack web developer and math educator.
        </p>
      </section>
    </main>
  );
}

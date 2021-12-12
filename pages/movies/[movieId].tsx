import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { moviesInfo } from '../../ts/moviesInfo';
import InfoPart from '../../components/InfoPart';

type movieType = {};

const Movie = ({}: movieType) => {
  const router = useRouter();
  const { movieId } = router.query;
  const index = Number(movieId) - 1;
  const movie = moviesInfo[index];
  return (
    <>
      <Head>
        {/*<title>Theater App | Profile</title>*/}
        <title>{`Theater App | ${movieId}`}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <h2 className={'text-6xl text-purple-700 font-semibold'}>
          {movie.title}
        </h2>
        {/*<div className="relative w-96 h-96 flex mr-2">*/}
        {/*  <Image*/}
        {/*    className="top-5"*/}
        {/*    src={movie.posterSrc}*/}
        {/*    layout={'fill'}*/}
        {/*    objectFit={'contain'}*/}
        {/*    alt="poster"*/}
        {/*  />*/}
        {/*</div>*/}
        <div className="mt-6 grid grid-cols-2">
          <div>
            <img
              className={'w-11/12'}
              src={`/img/${movie.posterSrc}`}
              alt="poster"
            />
          </div>
          <div>
            <InfoPart firstPart={'Title:'} secondPart={movie.title} />
            <InfoPart firstPart={'Author:'} secondPart={movie.author} />
            <InfoPart firstPart={'Stars:'} secondPart={movie.stars} />
            <InfoPart firstPart={'Length:'} secondPart={movie.length} />
            <InfoPart firstPart={'IMDb Rating:'} secondPart={movie.rating} />
            <InfoPart
              firstPart={'Description:'}
              secondPart={movie.description}
            />
          </div>
        </div>
      </header>
      <main className={'mt-2'}></main>
    </>
  );
};

export default Movie;

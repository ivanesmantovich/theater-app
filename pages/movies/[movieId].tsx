import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { moviesInfo } from '../../ts/moviesInfo';
import InfoPart from '../../components/InfoPart';
import CreateSession from '../../components/CreateSession';
import MovieSessions from '../../components/MovieSessions';
import { FirebaseAuthContext } from '../../store/auth-context';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../ts/firestoreConfig';

const Movie = () => {
  const context = React.useContext(FirebaseAuthContext);
  const userId = context.userId;

  const router = useRouter();
  const { movieId } = router.query;
  const index = Number(movieId) - 1;
  const movie = moviesInfo[index];
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!movieId) {
      return;
    }
    const getMovie = async () => {
      setIsLoading(false);
    };
    getMovie();
  }, [movieId]);

  return (
    <div>
      <Head>
        <title>{`Theater App | ${movieId}`}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {isLoading && <div>Loading...</div>}
      {isLoading === false && (
        <>
          <header>
            <h2 className={'text-6xl text-purple-700 font-semibold'}>
              {movie.title}
            </h2>
          </header>
          <main>
            <div className="mt-6 grid grid-cols-3">
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
                {/* <InfoPart firstPart={'Length:'} secondPart={movie.length} /> */}
                <InfoPart
                  firstPart={'IMDb Rating:'}
                  secondPart={movie.rating}
                />
                <InfoPart
                  firstPart={'Description:'}
                  secondPart={movie.description}
                />
              </div>
            </div>
            <MovieSessions movieId={movieId} />
            {userId && <CreateSession movieId={movieId} />}
          </main>
        </>
      )}
    </div>
  );
};

export default Movie;

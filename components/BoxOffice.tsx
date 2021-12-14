import React from 'react';
import Image from 'next/image';
import donnie from '../public/img/donnie.jpg';
import harry from '../public/img/harry.jpg';
import runner from '../public/img/runner.jpg';
import fink from '../public/img/fink.jpg';
import jagten from '../public/img/jagten.jpg';
import favourite from '../public/img/favourite.jpg';
import MoviePreview from './MoviePreview';

type BoxOfficeType = {};

const BoxOffice = ({}: BoxOfficeType) => {
  return (
    <div>
      <h4 className={'font-bold mt-12 pb-2 border-b border-gray-200'}>
        Most popular
      </h4>

      <div className={'mt-8 grid lg:grid-cols-3 gap-10'}>
        <MoviePreview
          movieId={1}
          src={runner}
          title={'Blade Runner'}
          author={'Ridley Scott'}
          length={'1h 57min'}
        />

        <MoviePreview
          movieId={2}
          src={donnie}
          title={'Donnie Darko'}
          author={'Richard Kelly'}
          length={'1h 53min'}
        />

        <MoviePreview
          movieId={3}
          src={harry}
          title={"Harry Potter: Sorcerer's Stone"}
          author={'Chris Columbus'}
          length={'2h 32min'}
        />

        <MoviePreview
          movieId={4}
          src={favourite}
          title={'The Favourite'}
          author={'Yorgos Lanthimos'}
          length={'1h 59min'}
        />

        <MoviePreview
          movieId={5}
          src={jagten}
          title={'The Hunt'}
          author={'Thomas Vinterberg'}
          length={'1h 55min'}
        />

        <MoviePreview
          movieId={6}
          src={fink}
          title={'Barton Fink'}
          author={'Joel Coen, Ethan Coen'}
          length={'1h 56min'}
        />
      </div>
    </div>
  );
};

export default BoxOffice;

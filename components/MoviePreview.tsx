import Image from 'next/image';
import Link from 'next/link';

type MoviePreviewType = {
  movieId: number;
  src: StaticImageData;
  title: string;
  author: string;
  length: string;
};

export const MoviePreview = ({
  movieId,
  src,
  title,
  author,
  length,
}: MoviePreviewType) => {
  return (
    <Link href={`/movies/${movieId}`}>
      <div className={'card hover:shadow-xl transition-shadow'}>
        <Image src={src} alt="moviePic" />
        <div className={'m-4'}>
          <span className={'font-bold'}>{title}</span>
          <span className={'block text-gray-500 text-sm'}>{author}</span>
        </div>
        <div className={'length'}>
          {' '}
          <svg
            className="inline-block w-4 h-4 mr-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          <span>{length}</span>
        </div>
      </div>
    </Link>
  );
};

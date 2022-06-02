import Image from 'next/image'

const NowPlaying = () => {
  let res = {}
  fetch("https://wow.the-nance.repl.co/api/spotify/now-playing").then(i => res = i)
  console.log({res})

  return (
    res
      /*<a
        href={res.isPlaying ? res.songUrl : 'https://spotify.com/'}
        rel="noopener noreferrer"
        target="_blank"
        className="focus:outline-none transition duration-300 ease-in-out transform hover:scale-105 p-3 rounded-md border border-gray-800 shadow flex flex-row max-w-sm"
      >
        { can't dynamically change Image src (swapping between `string` and `StaticImageData`) }
        {res.isPlaying && (
          <Image
            height={45}
            width={45}
            alt="Song cover art"
            className="w-full h-full rounded shadow"
            src={res.albumImageUrl}
          />
        )}
        <div className="my-auto ml-4">
          <div className="font-semibold text-sm sm:text-regular">
            {res.isPlaying
              ? `Listening to ${res.title}`
              : 'Not listening to anything'}
          </div>
          <p className="text-xxs">
            <FontAwesomeIcon className="fill-current text-green-500" icon={['fab', 'spotify']} />{' '}
            Spotify
          </p>
        </div>
      </a>*/
  )
}
export default NowPlaying
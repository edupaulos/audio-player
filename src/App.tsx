import volumeUp from './assets/icons/volumeUp.svg';
import volumeDown from './assets/icons/volumeDown.svg';
import previousIcon from './assets/icons/previous.svg';
import pauseIcon from './assets/icons/pause.svg';
import playIcon from './assets/icons/play.svg';
import nextIcon from './assets/icons/next.svg';
import soundBar from './assets/soundBar.png';
// import soundWave from './assets/sound.png';
import { useSongs } from './hooks/useSongs';
import SongWave from './components/SongWave';

function App() {
  const {
    songURL,
    cover,
    title,
    artist,
    isPlaying,
    prevSong,
    nextSong,
    togglePlay,
  } = useSongs();

  const altPlayBtn = isPlaying ? 'Pause song button' : 'Play song button';

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <div className="drop-shadow-custom relative mx-auto h-[22rem] w-[60rem] overflow-hidden rounded-3xl border border-05 bg-01 p-4">
        <div className="mb-[1.6rem] inline-flex gap-7 ">
          <div className="relative flex items-center justify-center">
            <img className="size-[14rem] rounded-lg" src={cover} />
            <button className="absolute" onClick={togglePlay}>
              <img src={isPlaying ? pauseIcon : playIcon} alt={altPlayBtn} />
            </button>
          </div>
          <div className="flex flex-col gap-11">
            <div className="flex flex-col">
              <span className="text-3xl font-bold">{title}</span>
              <span className="text-3xl font-normal text-10">{artist}</span>
            </div>
            <SongWave songUrl={songURL} isPlaying={isPlaying}></SongWave>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 border-t border-t-05 bg-02 p-[1.6rem]">
          <div className="flex items-center justify-center gap-5">
            <img src={volumeDown} alt="" />
            <img className="h-[0.6rem]" src={soundBar} alt="" />
            <img src={volumeUp} alt="" />
          </div>
        </div>
      </div>
      <div className="drop-shadow-custom mt-6 inline-flex gap-6 rounded-3xl border border-05 bg-01 p-4">
        <button
          className="flex size-16 items-center justify-center rounded-xl text-8xl hover:bg-05 active:bg-08"
          onClick={prevSong}
        >
          <img src={previousIcon} alt="Previous Button" />
        </button>
        <button
          className="flex size-16 items-center justify-center text-8xl"
          onClick={togglePlay}
        >
          <img src={isPlaying ? pauseIcon : playIcon} alt={altPlayBtn} />
        </button>
        <button
          className="flex size-16 items-center justify-center rounded-xl text-8xl hover:bg-05 active:bg-08"
          onClick={nextSong}
        >
          <img src={nextIcon} alt="Next Button" />
        </button>
      </div>
    </div>
  );
}

export default App;

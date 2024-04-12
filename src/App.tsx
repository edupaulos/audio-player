import volumeUp from './assets/icons/volumeUp.svg';
import volumeDown from './assets/icons/volumeDown.svg';
import pauseIcon from './assets/icons/pause.svg';
import playIcon from './assets/icons/play.svg';

import { useSongs } from './hooks/useSongs';

import SongWave from './components/SongWave';
import PainelControl from './components/PainelControl';
import { useState } from 'react';
import Button from './components/ui/button';

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

  const [volume, setVolume] = useState('30');

  const altPlayBtn = isPlaying ? 'Pause song button' : 'Play song button';

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <div className="drop-shadow-custom relative mx-auto h-[22rem] w-[60rem] overflow-hidden rounded-3xl border border-05 bg-01 p-4">
        <div className="mb-[1.6rem] inline-flex gap-7 ">
          <div className="relative flex items-center justify-center">
            <img className="size-[14rem] rounded-lg" src={cover} />
            <Button
              className="absolute"
              onClick={togglePlay}
              img={isPlaying ? pauseIcon : playIcon}
              alt={altPlayBtn}
            />
          </div>
          <div className="flex flex-col gap-11">
            <div className="flex flex-col">
              <span className="text-3xl font-bold">{title}</span>
              <span className="text-3xl font-normal text-10">{artist}</span>
            </div>
            <SongWave songUrl={songURL} isPlaying={isPlaying} volume={volume} />
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 border-t border-t-05 bg-02 p-[1.6rem]">
          <div className="flex items-center justify-center gap-5">
            <img src={volumeDown} alt="" />
            <input
              id="volume-controller"
              className="h-[0.6rem] flex-1 cursor-pointer rounded-lg border-0 bg-07 accent-12"
              type="range"
              defaultValue={volume}
              onChange={e => setVolume(e.currentTarget.value)}
            />
            <img src={volumeUp} alt="" />
          </div>
        </div>
      </div>
      <PainelControl
        isPlaying={isPlaying}
        prevSong={prevSong}
        togglePlay={togglePlay}
        nextSong={nextSong}
        altPlayBtn={altPlayBtn}
      />
    </div>
  );
}

export default App;

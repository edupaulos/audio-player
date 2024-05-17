import nextIcon from '../assets/icons/next.svg';
import previousIcon from '../assets/icons/previous.svg';
import playIcon from '../assets/icons/play.svg';
import pauseIcon from '../assets/icons/pause.svg';
import shuffleIcon from '../assets/icons/shuffle.svg';
import repeatIcon from '../assets/icons/repeat.svg';
import Button from './ui/button';

interface PainelControlProps {
  isPlaying: boolean;
  prevSong: () => void;
  togglePlay: () => void;
  nextSong: () => void;
  altPlayBtn: string;
}

const PainelControl = ({
  isPlaying,
  prevSong,
  togglePlay,
  nextSong,
  altPlayBtn,
}: PainelControlProps) => {
  return (
    <div className="drop-shadow-custom mt-6 inline-flex gap-6 rounded-3xl border border-05 bg-01 p-4">
      <Button
        className="rounded-xl hover:bg-05 active:bg-08"
        onClick={() => {}}
        img={repeatIcon}
        alt="Repeat button"
      />
      <Button
        className="rounded-xl hover:bg-05 active:bg-08"
        onClick={prevSong}
        img={previousIcon}
        alt="Previous button"
      />

      <Button
        className="flex size-16 items-center justify-center text-8xl"
        onClick={togglePlay}
        img={isPlaying ? pauseIcon : playIcon}
        alt={altPlayBtn}
      />

      <Button
        className="rounded-xl hover:bg-05 active:bg-08"
        onClick={nextSong}
        img={nextIcon}
        alt="Next button"
      />
      <Button
        className="rounded-xl hover:bg-05 active:bg-08"
        onClick={() => {}}
        img={shuffleIcon}
        alt="Shuffle button"
      />
    </div>
  );
};

export default PainelControl;

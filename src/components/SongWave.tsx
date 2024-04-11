import { useWavesurfer } from '@wavesurfer/react';
import { useEffect, useRef, useState } from 'react';

interface SongWaveProps {
  songUrl: string;
  isPlaying: boolean;
}

const SongWave = ({ songUrl, isPlaying }: SongWaveProps) => {
  const containerRef = useRef(null);
  const [duration, setDuration] = useState('0:00');
  const [currentTime, setCurrentTime] = useState('0:00');

  const { wavesurfer } = useWavesurfer({
    container: containerRef,
    height: 50,
    width: 410,
    waveColor: '#DBDBDB',
    progressColor: '#111C18',
    barGap: 3.3,
    barRadius: 5,
    barWidth: 4,
    url: songUrl,
    cursorWidth: 0,
  });

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secondsRemainder = Math.round(seconds) % 60;
    const paddedSeconds = `0${secondsRemainder}`.slice(-2);
    return `${minutes}:${paddedSeconds}`;
  };

  if (isPlaying) {
    wavesurfer?.play();
  } else {
    wavesurfer?.pause();
  }

  useEffect(() => {
    if (wavesurfer) {
      wavesurfer.on('ready', () => {
        const newDuration = formatTime(wavesurfer.getDuration());
        setDuration(newDuration);
      });

      wavesurfer.on('audioprocess', () => {
        const newCurrent = formatTime(wavesurfer.getCurrentTime());
        setCurrentTime(newCurrent);
      });
    }
  }, [wavesurfer]);

  return (
    <div>
      <div ref={containerRef} />
      <div className="flex justify-between text-lg">
        <div>{currentTime}</div>
        <div>{duration}</div>
      </div>
    </div>
  );
};

export default SongWave;

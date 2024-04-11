import { useEffect, useRef, useState } from 'react';
import sounds from '../data/songs.json';

export const useSongs = () => {
  const [current, setcurrent] = useState(0);
  const [cover, setCover] = useState(sounds[current].coverUrl);
  const [title, setTitle] = useState(sounds[current].title);
  const [album, setAlbum] = useState(sounds[current].album);
  const songRef = useRef(new Audio(sounds[current].audiofile));
  const [isPlaying, setIsPlaying] = useState(false);

  const nextSong = () => {
    setcurrent(prev => (prev + 1) % sounds.length);
    setIsPlaying(true);
  };

  const prevSong = () => {
    setcurrent(prev => (prev - 1) % sounds.length);
  };

  const togglePlay = () => {
    setIsPlaying(prev => !prev);
  };

  useEffect(() => {
    const song = songRef.current;
    if (song) {
      if (isPlaying) {
        song.play();
        song.volume = 0.1;
      } else {
        song.pause();
      }
    }
  }, [isPlaying]);

  useEffect(() => {
    const song = songRef.current;
    song.pause();
    setCover(sounds[current].coverUrl);
    setTitle(sounds[current].title);
    setAlbum(sounds[current].album);
    song.src = sounds[current].audiofile;

    if (isPlaying) {
      song.play();
    }
  }, [current, isPlaying]);

  return {
    cover,
    title,
    album,
    isPlaying,
    prevSong,
    nextSong,
    togglePlay,
  };
};

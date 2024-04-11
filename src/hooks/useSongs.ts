import { useEffect, useRef, useState } from 'react';
import sounds from '../data/songs.json';

export const useSongs = () => {
  const [current, setcurrent] = useState(0);
  const [cover, setCover] = useState(sounds[current].coverUrl);
  const [title, setTitle] = useState(sounds[current].title);
  const [artist, setArtist] = useState(sounds[current].artist);
  const songRef = useRef(new Audio(sounds[current].audiofile));
  const [isPlaying, setIsPlaying] = useState(false);

  const nextSong = () => {
    setcurrent(prev => (prev + 1) % sounds.length);
  };

  const prevSong = () => {
    if (current === 0) return;
    setcurrent(prev => (prev - 1) % sounds.length);
  };

  const togglePlay = () => {
    setIsPlaying(prev => !prev);
  };

  useEffect(() => {
    const song = songRef.current;
    song.pause();
    setCover(sounds[current].coverUrl);
    setTitle(sounds[current].title);
    setArtist(sounds[current].artist);
    song.src = sounds[current].audiofile;
  }, [current, isPlaying]);

  return {
    songURL: sounds[current].audiofile,
    cover,
    title,
    artist,
    isPlaying,
    prevSong,
    nextSong,
    togglePlay,
  };
};

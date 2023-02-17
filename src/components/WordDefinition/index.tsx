import React, { useRef, useState } from 'react';
import { FaPlay, FaExternalLinkAlt, FaPause } from 'react-icons/fa';
import WordMeaning from '../WordMeaning';
import styles from './styles.module.css';
import { v4 as uuidv4 } from 'uuid';

interface Props {
  word: Word;
}

const WordDefinition = ({ word }: Props) => {
  const [audioStatus, changeAudioStatus] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const audioFile = word.phonetics.find(
    (item) => item.audio.trim() !== '',
  )?.audio;

  const startAudio = () => {
    if (!audioRef.current) return;

    audioRef.current.volume = 0.1;
    audioRef.current?.play();

    changeAudioStatus(true);
  };

  const pauseAudio = () => {
    audioRef.current?.pause();
    changeAudioStatus(false);
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.word}>
          <h1>{word.word}</h1>
          <h2>{word.phonetic}</h2>
        </div>
        {audioFile && (
          <>
            <audio
              ref={audioRef}
              src={audioFile}
              onEnded={() => changeAudioStatus(false)}
            />
            <button
              className={styles.btn}
              title="Play Pronounciation"
              onClick={!audioStatus ? startAudio : pauseAudio}
            >
              {audioStatus ? (
                <FaPause color="#a646ee" />
              ) : (
                <FaPlay color="#a646ee" />
              )}
            </button>
          </>
        )}
      </div>
      <div>
        {word.meanings.map((meaning) => (
          <WordMeaning key={uuidv4()} meaning={meaning} />
        ))}
      </div>
      <div className={styles.source}>
        <hr />
        <small>
          Source:{' '}
          <a href={word.sourceUrls[0]} target="_blank">
            {word.sourceUrls[0]}
            <FaExternalLinkAlt />
          </a>
        </small>
      </div>
    </>
  );
};

export default WordDefinition;

import React from 'react';
import styles from './styles.module.css';
import { v4 as uuidv4 } from 'uuid';

interface Props {
  meaning: Meaning;
}

const WordMeaning = ({ meaning }: Props) => {
  return (
    <div className={styles.container}>
      <strong className={styles.divider}>{meaning.partOfSpeech}</strong>
      <h3 className={styles.meaning}>Meaning</h3>
      <ul className={styles.list}>
        {meaning.definitions.map((definition) => (
          <li key={uuidv4()}>
            {definition.definition}
            {definition.example && (
              <p className={styles.example}>"{definition.example}"</p>
            )}
          </li>
        ))}
      </ul>
      {meaning.synonyms.length !== 0 && (
        <div className={styles.synonymsContainer}>
          <h3 className={styles.synonyms}>Synonyms</h3>
          <ul className={styles.synonymList}>
            {meaning.synonyms.map((synonym) => (
              <li key={uuidv4()}>
                {synonym}
                {meaning.synonyms.length > 1 && ','}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default WordMeaning;

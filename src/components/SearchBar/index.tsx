import { useState } from 'react';
import styles from './styles.module.css';

interface Props {
  fetchDefinition: (word: string) => void;
  error: string;
}

const SearchBar = ({ fetchDefinition, error }: Props) => {
  const [searchValue, setSearchValue] = useState<string>('');

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    fetchDefinition(searchValue);
  };

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <input
          onChange={(e) => setSearchValue(e.target.value.trim().toString())}
          className={styles.input}
          type="text"
          placeholder="Search"
          required
        />
      </form>
      <p className={styles.error}>{error}</p>
    </>
  );
};

export default SearchBar;

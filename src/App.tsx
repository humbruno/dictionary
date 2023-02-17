import { useState } from 'react';
import LoadingSpinner from './components/LoadingSpinner';
import SearchBar from './components/SearchBar';
import WordDefinition from './components/WordDefinition';
import fetchWordDefinition from './utils/fetchWordDefinition';

function App() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const [wordDefinition, setWordDefinition] = useState<Word[]>();

  const handleFetchDefinition = async (word: string) => {
    try {
      setIsLoading(true);
      const res = await fetchWordDefinition(word);

      if (res.status === 404) {
        throw new Error('Sorry, there are no definitions for that word.');
      }

      if (!res.ok) {
        throw new Error('Something went wrong, please try again.');
      }

      const data = await res.json();
      setWordDefinition(data);
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="App">
      <SearchBar fetchDefinition={handleFetchDefinition} error={error} />
      {isLoading && <LoadingSpinner />}
      {wordDefinition &&
        wordDefinition.map((word) => (
          <WordDefinition key={word.word} word={word} />
        ))}
    </div>
  );
}

export default App;

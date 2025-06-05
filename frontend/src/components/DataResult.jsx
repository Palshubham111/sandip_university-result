import { useState, useEffect } from 'react';
import Result from "./Result";

function DataResult() {
  const [results, setResults] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/results')
      .then(response => response.json())
      .then(data => setResults(data))
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <div>
      {results.map((item) => (
        <Result key={item.prn} item={item} />
      ))}
    </div>
  );
}

export default DataResult;
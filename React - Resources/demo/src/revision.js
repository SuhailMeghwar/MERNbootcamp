import React from 'react';
import { useCallback, useEffect, useState } from 'react';

export function DataFetchingComponent() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await fetch('https://api.github.com/users/rafay-ah');
      const data = await response.json();
      setData(data);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  },[fetchData]);

  if (isLoading) {
    return <p>Loading data...</p>;
  }

  if (error) {
    return <p>Error fetching data: {error.message}</p>;
  }

  if (!data) {
    return null;
  }

  return (
    <div>
      <h1>{data.login}</h1>
      {/* <p>{data.description}</p> */}
    </div>
  );
}
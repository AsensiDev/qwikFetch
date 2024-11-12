
import { component$, useSignal, useTask$ } from '@builder.io/qwik';

export const FetchQwik = component$(() => {
  const data = useSignal<any>(null); 

  
  useTask$(async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
      data.value = await response.json();
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  });

  return (
    <>
      <h2>Fetched Data:</h2>
      {data.value ? (
        <p><strong>Title:</strong> {data.value.title}</p>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
});

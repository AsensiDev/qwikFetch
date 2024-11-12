import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { FetchQwik } from '../components/FetchQwik';
 

export default component$(() => {
  return (
    <>
      <h1>Hi 👋</h1>
      <FetchQwik />
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};

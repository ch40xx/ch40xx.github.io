export default function AboutPage() {
  return (
    <main className="min-h-screen p-8 bg-zinc-100 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100">
      <h1 className="text-4xl font-bold mb-4">About Me</h1>
      <p className="text-xl mb-4">
        I'm aspiring to be knowledegeable in most of the fields I love. Speaking
        of things i love there are many. If we list them down it will seem
        unreal so to make it simple ill list just some of them down.
      </p>

      <ul className="list-disc">
        <li>Computers</li>
        <li>Guitars</li>
        <li>Psychology</li>
        <li>Nature</li>
        <li>Puzzles</li>
        <li>Books</li>
        <li>Learning</li>
        <li>...</li>
      </ul>
      <footer className="absolute bottom-5 m-auto text-center">
        If you'd like to get connected you can contact me through :{" "}
        <a href="mailto:contact.ch40s@proton.me"> EMAIL </a>
      </footer>
    </main>
  );
}

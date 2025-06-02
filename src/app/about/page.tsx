import ListofThings from "@/components/ListofThings";

export default function AboutPage() {
  return (
    <main className="min-h-screen p-8 bg-zinc-100 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100">
      <h1 className="text-4xl font-bold mb-4">About Me</h1>

      <p className="text-xl mb-4">
        I am aspiring to be knowledgeable in most of the fields I love. Speaking
        of things I love—there are many. If we list them all, it might seem
        unreal. So to keep it simple, here are just a few:
      </p>

      <ListofThings />
      <div className="pt-5 text-center ">
        {`If you'd like to connect, you can`}{" "}
        <a href="mailto:contact.chaos@proton.me" className="font-semibold">
          email
        </a>{" "}
        me.
      </div>
    </main>
  );
}

'use client';

import { useState } from "react";

export default function AboutPage() {
  const [expanded, setExpanded] = useState(false);

  return (
    <main className="min-h-screen p-8 bg-zinc-100 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100">
      <h1 className="text-4xl font-bold mb-4">About Me</h1>

      <p className="text-xl mb-4">
        I am aspiring to be knowledgeable in most of the fields I love. Speaking
        of things I love—there are many. If we list them all, it might seem
        unreal. So to keep it simple, here are just a few:
      </p>

      <ul className="list-disc pl-6 text-base space-y-1">
        {!expanded ? (
          <>
            <li>Computers</li>
            <li>Guitars</li>
            <li>Psychology</li>
            <li>Nature</li>
            <li>Puzzles</li>
            <li>Books</li>
            <li>Learning</li>
            <li
              className="text-blue-500 cursor-pointer hover:underline"
              onClick={() => setExpanded(true)}
            >
              ...
            </li>
          </>
        ) : (
     <ul className="list-disc pl-6 text-base space-y-4">
          <li>
            <span className="font-semibold">Computers</span>
            <ul className="list-disc pl-6 text-zinc-400">
              <li>Linux</li>
              <li>Reverse Engineering</li>
              <li>C</li>
              <li>Hacking culture</li>
              <li>Overengineering on purpose</li>
              <li>AGI</li>
              <li>Machine Learning</li>
            </ul>
          </li>
          <li>
            <span className="font-semibold">Guitars</span>
            <ul className="list-disc pl-6 text-zinc-400">
              <li>Distortion</li>
              <li>Alt tunings</li>
              <li>Pentatonic Scales</li>
              <li>Neck Positions</li>
            </ul>
          </li>
          <li>
            <span className="font-semibold">Psychology</span>
            <ul className="list-disc pl-6 text-zinc-400">
              <li>Persuasion</li>
              <li>Shadow work</li>
              <li>Behavior loops</li>
              <li>Why people lie to themselves</li>
            </ul>
          </li>
          <li>
            <span className="font-semibold">Nature</span>
            <ul className="list-disc pl-6 text-zinc-400">
              <li>Stormy nights</li>
              <li>Wind in trees</li>
              <li>Quiet that isn’t actually quiet</li>
            </ul>
          </li>
          <li>
            <span className="font-semibold">Puzzles</span>
            <ul className="list-disc pl-6 text-zinc-400">
              <li>Sudoku</li>
              <li>Ciphers</li>
              <li>Broken things begging to be fixed</li>
              <li>The unsolvable</li>
            </ul>
          </li>
          <li>
            <span className="font-semibold">Books</span>
            <ul className="list-disc pl-6 text-zinc-400">
              <li>Weird fiction</li>
              <li>Unreadable philosophy</li>
              <li>Technical manuals</li>
              <li>Reality-breaking stuff</li>
            </ul>
          </li>
          <li>
            <span className="font-semibold">Learning</span>
            <ul className="list-disc pl-6 text-zinc-400">
              <li>Languages</li>
              <li>Math</li>
              <li>History of ideas</li>
              <li>Tabs I swear I’ll come back to</li>
            </ul>
          </li>
          <li>
            <span className="font-semibold">Also</span>
            <ul className="list-disc pl-6 text-zinc-400">
              <li>Films that mess me up</li>
              <li>Graffiti</li>
              <li>Long walks alone</li>
              <li>Abandoned buildings</li>
              <li>Dreams I can’t explain</li>
            </ul>
          </li>
        </ul> 
        )}
      </ul>
    </main>
  );
}


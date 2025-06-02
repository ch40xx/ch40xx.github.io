"use client";

import { useState } from "react";

export default function ListofThings() {
  const [expanded, setExpanded] = useState(false);
  return (
    <>
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
            <li className=" cursor-pointer" onClick={() => setExpanded(true)}>
              ...
            </li>
          </>
        ) : (
          <ul className="list-disc pl-6 text-base space-y-4">
            <li>
              <span className="font-semibold">Computers</span>
            </li>
            <li>Linux</li>
            <li>Reverse Engineering</li>
            <li>C</li>
            <li>Hacking culture</li>
            <li>AGI</li>
            <li>Machine Learning</li>
            <li>
              <span className="font-semibold">Guitars</span>
            </li>
            <li>Distortion</li>
            <li>Alt tunings</li>
            <li>Pentatonic Scales</li>
            <li>Neck Positions</li>
            <li>
              <span className="font-semibold">Psychology</span>
            </li>
            <li>Persuasion</li>
            <li>Shadow work</li>
            <li>Behavior loops</li>
            <li>
              <span className="font-semibold">Nature</span>
            </li>
            <li>Sedimentations</li>
            <li>Mountains</li>
            <li>Clouds</li>
            <li>Sun</li>
            <li>
              <span className="font-semibold">Puzzles</span>
            </li>
            <li>Sudoku</li>
            <li>Ciphers</li>
            <li>Cubes,Triangles</li>
            <li>
              <span className="font-semibold">Books</span>
            </li>
            <li>Weird fiction</li>
            <li>Philosophy</li>
            <li>Technical manuals</li>
            <li>Books lol</li>
            <li>
              <span className="font-semibold">Learning</span>
            </li>
            <li>Languages</li>
            <li>Math</li>
            <li>History of ideas</li>
            <li>Tabs I swear I willl come back to</li>
            <li>
              <span className="font-semibold">Also</span>
            </li>
            <li>Movies</li>
            <li>Graffiti</li>
            <li>Walks</li>
            <li>Dreams</li>
            <li className=" cursor-pointer" onClick={() => setExpanded(false)}>
              Shut up man
            </li>
          </ul>
        )}
      </ul>
    </>
  );
}

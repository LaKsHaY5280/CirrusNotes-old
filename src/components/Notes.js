import React, { useContext, useEffect } from "react";
import noteContext from "../context/notes/noteContext";
import Noteitem from "./Noteitem";

export default function Notes() {
  const notescontext = useContext(noteContext);
  const { notes, getNotes } = notescontext;

  useEffect(() => {
    getNotes();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <div className="row my-3">
        {notes.map((note) => {
          return <Noteitem note={note} key={note._id} />;
        })}
      </div>
    </div>
  );
}

"use client";

import { useParams, useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";

import Modal from "@/components/Modal/Modal";
import { fetchNoteById } from "@/lib/api/fetchNoteById";

import css from "@/app/notes/NoteDetails.module.css";

const NotePreview = () => {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();

  const { data: note, isLoading, isError } = useQuery({
    queryKey: ["note", id],
    queryFn: () => fetchNoteById(id),
    enabled: Boolean(id),
  });

  const handleClose = () => {
    router.back();
  };

  return (
    <Modal onClose={handleClose}>
      {isLoading && <p>Loading, please wait...</p>}

      {isError && <p>Something went wrong.</p>}

      {note && (
        <div className={css.container}>
          <div className={css.item}>
            <div className={css.header}>
              <h2>{note.title}</h2>
              <span className={css.tag}>{note.tag}</span>
            </div>

            <p className={css.content}>{note.content}</p>

            <p className={css.date}>
              Created: {new Date(note.createdAt).toLocaleDateString()}
            </p>
          </div>
        </div>
      )}
    </Modal>
  );
};

export default NotePreview;
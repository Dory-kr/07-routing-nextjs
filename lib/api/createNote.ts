import axiosInstance from "./axiosInstance";

import type { Note, NoteTag } from "@/types/note";

interface CreateNoteParams {
  title: string;
  content: string;
  tag: NoteTag;
}

export const createNote = async (
  note: CreateNoteParams,
): Promise<Note> => {
  const response = await axiosInstance.post<Note>("/notes", note);

  return response.data;
};
import axiosInstance from "./axiosInstance";

import type { Note } from "@/types/note";

export const fetchNoteById = async (id: string): Promise<Note> => {
  const response = await axiosInstance.get<Note>(`/notes/${id}`);

  return response.data;
};

import axiosInstance from "./axiosInstance";

import type { Note } from "@/types/note";

export const deleteNote = async (id: string): Promise<Note> => {
  const response = await axiosInstance.delete<Note>(`/notes/${id}`);

  return response.data;
};
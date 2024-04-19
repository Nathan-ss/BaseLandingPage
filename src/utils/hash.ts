import create from "zustand";

// Defina o tipo do estado
interface HashState {
  hashValue: string;
  setHashValue: (hash: string) => void;
}

// Crie uma store Zustand para gerenciar o estado
export const useHashStore = create<HashState>((set) => ({
  hashValue: "",
  setHashValue: (hash) => set({ hashValue: hash }),
}));

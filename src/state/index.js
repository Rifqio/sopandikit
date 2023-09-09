import { create } from "zustand";
import createSelectors from "./selectors";

const formInputs = {
  izin: "",
  kepada: "",
  nama: "",
  namaWali: "",
  namaGuru: "",
  tanggal: "",
  kelas: "",
  nim: "",
};

const useStore = create((set) => ({
  inputs: formInputs,
  setInputs: (name, value) => {
    set((state) => ({
      inputs: {
        ...state.inputs,
        [name] : value,
      },
    }));
  },
}));

export default createSelectors(useStore);

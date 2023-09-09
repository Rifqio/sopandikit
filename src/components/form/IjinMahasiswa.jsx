import Input from "../Input";
import DatePicker from "../DatePicker";
import PropTypes from "prop-types";
import JenisIjin from "../others/JenisIjin";
import JenisIjinData from "../../data/JenisIjinData";
import useStore from "../../state";

IjinMahasiswa.propTypes = {
  handleInputChange: PropTypes.func,
  handleDateChange: PropTypes.func,
  isStatusActive: PropTypes.number,
};

function IjinMahasiswa({
  handleInputChange,
  handleDateChange,
  isStatusActive,
}) {
  const { inputs } = useStore();
  return (
    <>
      <JenisIjin jenisIjinData={JenisIjinData(isStatusActive)} />

      <div className="flex flex-col"></div>
      <Input
        label={"Nama"}
        name="nama"
        onChange={handleInputChange}
        value={inputs.nama}
        labelClass="mt-5 mb-2 uppercase font-semibold text-sm text-slate-500"
      />

      <Input
        label={"Nim"}
        name="nim"
        onChange={handleInputChange}
        value={inputs.nim}
        labelClass="mt-5 mb-2 uppercase font-semibold text-sm text-slate-500"
      />

      <DatePicker
        label="Tanggal Izin"
        name="tanggal"
        onChange={handleDateChange}
        value={inputs.tanggal}
        labelClass="mt-5 mb-2 uppercase font-semibold text-sm text-slate-500 w-full"
      />

      <Input
        label={"Alasan Izin"}
        name="izin"
        onChange={handleInputChange}
        // value={inputs.izin}
        labelClass="mt-5 mb-2 uppercase font-semibold text-sm text-slate-500"
      />
    </>
  );
}

export default IjinMahasiswa;

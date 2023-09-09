import DatePicker from "../DatePicker";
import Input from "../Input";
import PropTypes from "prop-types";
import JenisIjin from "../others/JenisIjin";
import JenisIjinData from "../../data/JenisIjinData";
import useStore from '../../state';

IjinSiswa.propTypes = {
  handleInputChange: PropTypes.func,
  handleDateChange: PropTypes.func,
  isStatusActive: PropTypes.number,
};

function IjinSiswa({
  handleInputChange,
  handleDateChange,
  isStatusActive,
}) {
  const { inputs } = useStore();

  return (
    <>
      <JenisIjin jenisIjinData={JenisIjinData(isStatusActive)} />

      <Input
        label={"Nama Anak"}
        name="nama"
        onChange={handleInputChange}
        value={inputs.nama}
        labelClass="mt-5 mb-2 uppercase font-semibold text-sm text-slate-500"
      />
      <Input
        label={"kelas"}
        name="kelas"
        onChange={handleInputChange}
        value={inputs.kelas}
        labelClass="mt-5 mb-2 uppercase font-semibold text-sm text-slate-500"
      />
      <Input
        label={"Alasan Izin"}
        name="izin"
        onChange={handleInputChange}
        value={inputs.izin}
        labelClass="mt-5 mb-2 uppercase font-semibold text-sm text-slate-500"
      />
      <Input
        label={"Nama Wali"}
        name="namaWali"
        onChange={handleInputChange}
        value={inputs.namaWali}
        labelClass="mt-5 mb-2 uppercase font-semibold text-sm text-slate-500"
      />
      <DatePicker
        label="Tanggal Izin"
        labelClass="mt-5 mb-2 uppercase font-semibold text-sm text-slate-500"
        name="tanggal"
        onChange={handleDateChange}
        value={inputs.tanggal}
      />
    </>
  );
}

export default IjinSiswa;

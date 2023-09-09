import PropTypes from "prop-types";

const ContentData = ({ inputs, formatDateIndonesian, isStatusActive }) => {
  if (isStatusActive === 0) {
    return {
      title: "siswa",
      text: `Assalamualaikum, selamat pagi 

             Yth. Bapak/Ibu guru wali kelas ${inputs.kelas ? inputs.kelas : "[KELAS]"},
             
             Perkenalkan saya ${inputs.namaWali || "[NAMA WALI]"} 
             selaku wali murid atas nama ${inputs.nama || "[NAMA MURID]"}, 
             dengan ini saya menyampaikan bahwa pada hari ini 
             ${inputs.tanggal ? formatDateIndonesian(inputs.tanggal) : "[TANGGAL]"}, 
             anak saya tidak dapat mengikuti kegiatan pembelajaran seperti biasa dikarenakan ${
             inputs.izin || "[ALASAN]"}.
             Demikian surat izin ini kami sampaikan, atas perhatian dan kebijaksanaan bapak/ibu guru, 
             kami ucapkan terima kasih.
            
             Wassalamualaikum Wr. Wb.
  
             Hormat kami
             Wali Murid
  
             ${inputs.namaWali || "[NAMA WALI]"}`.split("\n"),
    };
  }
  if (isStatusActive === 1) {
    return {
      title: "kuliah",
      text: `Assalamu'alaikum warahmatullahi wabarakatuh.

      Dengan hormat, saya mahasiswa yang bernama :
      Nama :  ${inputs.nama || "[NAMA]"}
      NIM : ${inputs.nim || "[NIM]"}

      Memberitahukan bahwa pada hari ini ${
      inputs.tanggal ? formatDateIndonesian(inputs.tanggal) : "[TANGGAL]"
      }, saya memohon izin tidak dapat mengikuti kegiatan perkuliahan dikarenakan ${
        inputs.izin || "[ALASAN]"
      }.

      Atas perhatiannya saya ucapkan terima kasih
      Wasalamualaikum Warahmatullah Wabarakatuh.`.split("\n"),
    }
  }
};

ContentData.propTypes = {
  inputs: PropTypes.object,
  formatDateIndonesian: PropTypes.func,
};

export default ContentData;

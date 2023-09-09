import PropTypes from "prop-types";

function JenisIjinData(statusActive) {
  if (statusActive === 0) {
    return [
      { id: 1, title: "Sakit" },
      { id: 2, title: "Izin" },
    ];
  }

  if (statusActive === 1) {
    return [
      { id: 1, title: "Sakit" },
      { id: 2, title: "Bimbingan" },
    ];
  }

  return [];
}

JenisIjinData.propTypes = {
  statusActive: PropTypes.number,
};

export default JenisIjinData;

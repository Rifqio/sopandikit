import PropTypes from "prop-types";

function JenisIjin({ jenisIjinData }) {
  console.log(jenisIjinData);
  return (
    <div className="text-center mt-4">
      <h3>Jenis Ijin</h3>
      <div className="flex gap-5 justify-center">
        {jenisIjinData.map((item) => (
          <>
            <p key={item.id} className="text-slate-500 text-sm cursor-pointer">
              {item.title}
            </p>
          </>
        ))}
      </div>
    </div>
  );
}

JenisIjin.propTypes = {
  jenisIjinData: PropTypes.array,
};

export default JenisIjin;

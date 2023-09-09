import PropTypes from "prop-types";

const Input = ({ label, labelClass, name, onChange, value }) => {
  return (
    <div className="flex flex-col">
      <label className={`${labelClass} `}>{label}</label>
      <input
        className="border border-slate-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-400 transition-all duration-200"
        type="text"
        name={name}
        placeholder={`masukan ${label}`}
        onChange={onChange}
        value={value}
        spellCheck="false"
      />
    </div>
  );
};

Input.propTypes = {
  label: PropTypes.string,
  labelClass: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
};

export default Input;

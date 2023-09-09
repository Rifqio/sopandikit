import { HiOutlineClipboard } from "react-icons/hi";
import { LuClipboardCheck } from "react-icons/lu";
import PropTypes from "prop-types";

ButtonCopy.propTypes = {
  handleCopy: PropTypes.func,
  copyMessage: PropTypes.string,
};

function ButtonCopy({ handleCopy, copyMessage }) {
  return (
    <button
      onClick={handleCopy}
      className={`mt-5 px-4 py-2 rounded-lg ${
        copyMessage
          ? "bg-green-500 text-white"
          : "bg-white border-2 border-slate-300 border-inherit text-slate-800 hover:bg-slate-200"
      }   transition-all  flex gap-2 items-center`}
    >
      {copyMessage ? (
        <>
          <LuClipboardCheck />
          {copyMessage}
        </>
      ) : (
        <>
          <HiOutlineClipboard />
          Salin Teks
        </>
      )}
    </button>
  );
}

export default ButtonCopy;

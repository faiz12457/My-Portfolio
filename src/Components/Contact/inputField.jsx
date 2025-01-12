
export function InputField({ type, label, placeholder, isTextarea = false, rows = 4 }) {
    return (
      <div className="relative">
        <label
          className="text-[#f56539] font-poppins p-1 font-semibold absolute 
          z-10 bg-[#212121] left-5 top-[-13px]"
        >
          {label}
        </label>
        {isTextarea ? (
          <textarea
            placeholder={placeholder}
            rows={rows}
            className="p-4 inline-block font-poppins outline-none text-white w-80
            border-[#f56539] rounded-2xl border-4 bg-transparent text-[.9rem] resize-none"
          ></textarea>
        ) : (
          <input
            type={type}
            placeholder={placeholder}
            className="h-[50px] p-4 inline-block font-poppins outline-none text-white w-80
            border-[#f56539] rounded-2xl border-4 bg-transparent text-[.9rem]"
          />
        )}
      </div>
    );
  }
  
import React, { useState } from "react";
import { CgSpinnerAlt } from "react-icons/cg";

const ActionButton = ({
  type,
  title,
  isLoading = false,
  isDisabled = false,
  onClick = () => {},
}) => {
  return (
    <button
      type={type || "button"}
      onClick={onClick}
      disabled={isDisabled || isLoading}
      className={`relative rounded-[8px] py-[10px] px-4 flex items-center justify-center disabled:cursor-not-allowed bg-slate-700 hover:opacity-85 disabled:opacity-50 transition duration-300`}
    >
      {isLoading && (
        <CgSpinnerAlt
          className={` transition-all animate-spin text-21 m-auto absolute`}
        />
      )}
      <div className="flex items-center justify-center">
        <div className={`inter-600 text-16`}>{title}</div>
      </div>
    </button>
  );
};

export default ActionButton;

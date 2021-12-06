import React from "react";

function InputCompoent(props) {
  return (
    <div>
      <h1 className="inline text-3xl  font-extrabold tracking-tight text-gray-900 sm:block sm:text-4xl divide-transparent mb-10 mt-10">
        Bienvenu sur le calculateur de production de voiture A & B
      </h1>
      <p className="mb-5 text-xl">Veuillez ajouter des employés</p>
      <div class="relative flex w-full flex-wrap items-stretch mb-3">
        <input
          type="number"

          value={props.value}
          onChange={props.handleChange}
          className="px-2 py-2 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border border-blueGray-300 outline-none focus:outline-none focus:ring w-full "
        />
        <span className="z-10 h-full leading-snug font-normal absolute text-center text-blueGray-300 absolute bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-28 py-2">
          employé(s)
        </span>
      </div>
    </div>
  );
}
export default InputCompoent;

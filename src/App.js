import React, { useState, useEffect } from "react";
import "./App.css";
import InputComponent from "./components /InputComponent";

const productionPneu = 0.2;
const productionPorte = 1;
const productionMoteur = 3;
const productionChassis = 2;
const montageVoitureMA = 0.5;
const montageVoitureMB = 0.6;

function App() {
  const [nbrEmploye, setNbrEmploye] = useState(0);
  const [composant, setComposant] = useState({
    pneu: "",
    moteur: "",
    chassis: "",
    porte: "",
  });
  const [nbrmodelA, setnbrModelA] = useState(0);
  const [nbrmodelB, setnbrModelB] = useState(0);
  const employeeProductivityPneu24h = 1 / productionPneu;
  const employeeProductivityPorte24h = 1 / productionPorte;
  const employeeProductivityMoteur24h = 1 / productionMoteur;
  const employeeProductivityChassis24h = 1 / productionChassis;
  const employeeProductivityVoitureA24h = 1 / montageVoitureMA;
  const employeeProductivityVoitureB24h = 1 / montageVoitureMB;

  /*--------------------------------------------------------------*/

  //récuperation de la valeur à travers un useState
  const handleChange = (e) => {
    setNbrEmploye(e.target.value);
  };

  //Production de pneu
  function pneuProduction() {
    const nbrPneu = Math.round(employeeProductivityPneu24h * nbrEmploye);
    setComposant({ ...composant, pneu: nbrPneu });
  }

  //Production de porte
  function porteProduction() {
    const nbrPorte = Math.round(employeeProductivityPorte24h * nbrEmploye);
    setComposant({ ...composant, porte: nbrPorte });
  }

  //Production de moteur
  function moteurProduction() {
    const nbrMoteur = Math.round(employeeProductivityMoteur24h * nbrEmploye);
    setComposant({ ...composant, moteur: nbrMoteur });
  }

  //Production de chassis
  function chassisProduction() {
    const nbrChassis = Math.round(employeeProductivityChassis24h * nbrEmploye);
    setComposant({ ...composant, chassis: nbrChassis });
  }

  /*--------------------------------------------------------------*/

  //Montage du modèle A
  function MontageModeleA() {
    let nbModelA = employeeProductivityVoitureA24h * nbrEmploye;

    if (nbModelA > composant.moteur) {
      setnbrModelA(composant.moteur);
    } else if (nbModelA < composant.moteur) {
      setnbrModelA(nbModelA);
    } else {
      console.log("nbmodelA 1" + nbModelA);
      setnbrModelA(nbModelA);
    }

    if (4 * nbrmodelA === composant.pneu) {
      setnbrModelA(nbrmodelA);
    } else if (4 * nbrmodelA > composant.pneu) {
      setnbrModelA(Math.round(composant.pneu / 4));
    } else {
      setnbrModelA((prevNbrmodelA) => prevNbrmodelA);
    }

    if (2 * nbrmodelA === composant.porte) {
      setnbrModelA(nbrmodelA);
    } else if (2 * nbrmodelA > composant.porte) {
      setnbrModelA(Math.round(composant.porte / 2));
    } else {
      setnbrModelA((prevNbrmodelA) => prevNbrmodelA);
    }

    if (1 * nbrmodelA === composant.chassis) {
      setnbrModelA(nbrmodelA);
    } else if (1 * nbrmodelA > composant.chassis) {
      setnbrModelA(Math.round(composant.chassis / 1));
    } else {
      setnbrModelA((prevNbrmodelA) => prevNbrmodelA);
    }
  }

  //Montage du modèle B
  function MontageModeleB() {
    let nbModelB = employeeProductivityVoitureB24h * nbrEmploye;

    if (nbModelB > composant.moteur) {
      setnbrModelB(composant.moteur);
    } else if (nbModelB < composant.moteur) {
      setnbrModelB(nbModelB);
    } else {
      setnbrModelB(nbModelB);
    }
    if (6 * nbModelB === composant.pneu) {
      setnbrModelB(nbrmodelB);
    } else if (6 * nbModelB > composant.pneu) {
      setnbrModelB(Math.round(composant.pneu / 6));
    } else {
      setnbrModelB((prevNbrmodelB) => prevNbrmodelB);
    }

    if (4 * nbModelB === composant.porte) {
      setnbrModelB(nbModelB);
    } else if (4 * nbModelB > composant.porte) {
      setnbrModelB(Math.round(composant.porte / 4));
    } else {
      setnbrModelB((prevNbrmodelB) => prevNbrmodelB);
    }
    if (1 * nbModelB === composant.chassis) {
      setnbrModelB(nbrmodelB);
    } else if (1 * nbModelB > composant.chassis) {
      setnbrModelB(Math.round(composant.chassis / 1));
    } else {
      setnbrModelB((prevNbrmodelB) => prevNbrmodelB);
    }
  }



  useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
    function handleClick(e) {
      setComposant({
        pneu: "",
        moteur: "",
        chassis: "",
        porte: "",
      });
      setNbrEmploye(0);
      setnbrModelA(0);
      setnbrModelB(0);
    }
  }, []);

  return (
    <>
      <div className="relative pt-6 pb-16 sm:pb-10 p-20 ">
        <InputComponent handleChange={handleChange} value={nbrEmploye} />
      </div>
      <p className="mb-4 pl-20  text-xl">
        Estimation de la production : Modèle A & B
      </p>

      <div className="flex pl-20">
        <button
          onMouseOver={pneuProduction}
          className={`${
            composant.pneu
              ? "mr-4 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-400  hover:bg-blue-400 "
              : " mr-4 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gray-400 hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:bg-gray-400"
          }`}
        >
          {composant.pneu === 0 ? "" : composant.pneu} pneu(s) construit(s)
        </button>
        <button
          onMouseOver={porteProduction}
          className={`${
            composant.porte
              ? "mr-4 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-400  hover:bg-blue-400"
              : "mr-4 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gray-400 hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:bg-gray-400"
          }`}
        >
          {composant.porte === 0 ? "" : composant.porte} porte(s) construit(s)
        </button>
        <button
          onMouseOver={moteurProduction}
          className={`${
            composant.moteur
              ? "mr-4 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-400  hover:bg-blue-400"
              : " mr-4 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gray-400 hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:bg-gray-400"
          }`}
        >
          {composant.moteur === 0 ? "" : composant.moteur} moteur(s)
          construit(s)
        </button>
        <button
          onMouseOver={chassisProduction}
          className={`${
            composant.chassis
              ? "mr-4 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-400  hover:bg-blue-400"
              : "mr-4 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gray-400 hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:bg-gray-400"
          }`}
        >
          {" "}
          {composant.chassis === 0 ? "0" : composant.chassis} chassis
          construit(s)
        </button>
        <button
          className="mr-4 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gray-400 hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:bg-gray-400 hover:bg-blue-400 "
          onMouseOver={MontageModeleA}
          onClick={MontageModeleA}
        >
          Modèle A {nbrmodelA}
        </button>
        <button
          className="mr-4 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gray-400 hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:bg-gray-400 hover:bg-blue-400 "
          onMouseOver={MontageModeleB}
          onClick={MontageModeleB}
        >
          Modèle B {nbrmodelB}
        </button>
      </div>
      <div className="relative pt-6 pb-16 sm:pb-10 p-20">
        <h1 className="mb-5 bt-5 text-2xl font-extrabold">
          Production du modèle A{" "}
        </h1>
        <span className="text-3xl font-extrabold text-red-500">
          {" "}
          {nbrmodelA}{" "}
        </span>

        <h1 className="mb-5 bt-5 text-2xl font-extrabold">
          Production du modèle B {" "}
        </h1>
        <span className="text-3xl font-extrabold text-red-500" >
          {" "}
          {nbrmodelB}{" "}
        </span>
      </div>
    </>
  );
}

export default App;

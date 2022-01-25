import type { NextPage } from "next";
import React, { useState } from "react";
import FadeIn from "react-fade-in";
import FiveM from "fivem";
const srv = new FiveM.Server("5.196.199.242:30077");

const Home: NextPage = () => {
  const [player, setPlayer] = useState(0);
  srv.getPlayers().then((data) => setPlayer(data));
  return (
    <>
      <div className="flex justify-center items-center backdrop-blur-sm absolute w-full h-screen slide overflow-auto">
        <div className="flex flex-col justify-center items-center">
          <img
            src="/static/images/hatalialogo.png"
            className="w-80 h-80 !backdrop-blur-none skew-y-12 mt-32 lg:mt-0"
          />
          <div className="flex flex-col justify-center items-center space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 space-y-2 lg:space-y-0 px-5 py-5 bg-yellow-600 w-full">
              <div>
                <span className="font-bold text-white">
                  Serveur Gta5 Roleplay - Free Accès
                </span>
                <p className="font-light text-white max-w-xl">
                  HataliaRP vous proposes une aventure dans un rôle roleplay,
                  vous pouvez des à présent reprendre des entreprises, gérer
                  votre propre gang et créez votre buissness. Sur le serveur
                  nous vous proposons des scripts et des contenus qualitatifs
                  pour vous divertir sur le serveur. Pleins de nouveauté sera
                  rajouté sur le serveur au fût et à mesure.
                </p>
              </div>
              <div>
                <span className="font-bold text-white">
                  Contenue Exceptionnel et Optimisé
                </span>
                <p className="font-light text-white">
                  Nous vous proposons également un contenu qualitatif pour
                  éviter certains bugs rencontrés sur le serveur, les contenues
                  sont optimisés au maximum pour avoir aucun bug sur le serveur.
                  Nous allons créés des contenus exceptionnels pour vous
                  divertir sur HataliaRP.
                </p>
                <div className="flex justify-center items-center">
                  <button className="bg-white/60 rounded-3xl w-72 shadow-sm shadow-white px-2 py-3 text-black hover:scale-105 focus:scale-105 transition transform">
                    <a
                      href="https://discord.gg/Tmnf2DwzYv"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="inline-flex space-x-5">
                        <svg
                          className="w-8 h-8 text-black"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 640 512"
                        >
                          <path
                            fill="currentColor"
                            d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"
                          ></path>
                        </svg>
                        <p className="font-bold text-lg">
                          Rejoindre le discord
                        </p>
                      </div>
                    </a>
                  </button>
                </div>
              </div>
              <div>
                <span className="font-bold text-white">
                  Développement Constant
                </span>
                <p className="font-light text-white">
                  HataliaRP a une équipe expérimentée pour tous ce qui est
                  développement des scripts, création des contenues exclusives
                  et nouveauté Nous possédons également des développeurs web
                  pour la création du site web et tous ce qui est design,
                  interface.
                </p>
              </div>
            </div>
            <div className="px-5 py-2 skew-y-8 bg-white/30 border border-white/50 shadow shadow-white backdrop-blur-sm rounded-3xl inline-flex space-x-2 justify-center items-center">
              <p className="font-bold">{player}</p>
              <span className="text-center text-sm font-normal">
                Joueurs en ligne
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

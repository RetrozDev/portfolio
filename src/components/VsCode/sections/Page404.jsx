import React from 'react';
import '../../../styles/VsCode/components/sections/Page404.css';  // Importation du fichier CSS
import { useNavigate } from 'react-router-dom';
import gif404 from "../../../assets/404.gif"

const Page404 = () => {
	const navigate = useNavigate();
  return (
    <div className="Page404">
      <h1>Oups ! Page non trouvée !</h1>
      <p>On dirait que vous avez pris  un mauvais chemin... 🚀</p>
      <p>Mais ne t'inquiète pas, on va vous ramener sur la bonne voie !</p>
      <button  type="button" onClick={() => navigate("/vs-code/Accueil.jsx")} className="btn-home">
        Retour à l'accueil
      </button>
	  <img src={gif404} alt="confused travolta" />
    </div>
  );
};

export default Page404;

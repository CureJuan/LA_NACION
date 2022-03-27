import React from "react";
import { FiSearch } from "react-icons/fi";
import { WiDayCloudy } from "react-icons/wi";
import { Link } from "react-router-dom";
import Modals from "../Formulario/Modals";

const Header = () => {
  function openNav() {
    document.getElementById("mySidepanel").style.width = "250px";
  }

  function closeNav() {
    document.getElementById("mySidepanel").style.width = "0px";
  }

  return (
    <>
      <div className="header">
        <div id="mySidepanel" className="sidepanel">
          <a
            href="javascript:void(0)"
            className="closebtn"
            onClick={() => closeNav()}
          >
            &times;
          </a>

          <ul>
            <Link
              to="/"
              title="Ir a la página principal"
              className="logo_menu"
              onClick={() => closeNav()}
            >
              LA NACION
            </Link>
            <hr />
            <li>
              <Link
                to="/ultimasnoticias"
                className="link__item"
                onClick={() => closeNav()}
              >
                Últimas noticias
              </Link>
            </li>
            <li>
              <Link
                to="/politica"
                className="link__item"
                onClick={() => closeNav()}
              >
                Política
              </Link>
            </li>
            <li>
              <Link
                to="/economia"
                className="link__item"
                onClick={() => closeNav()}
              >
                Economía
              </Link>
            </li>
            <li>
              <Link
                to="/deportes"
                className="link__item"
                onClick={() => closeNav()}
              >
                Deportes
              </Link>
            </li>
            <li>
              <Link
                to="/espectaculos"
                className="link__item"
                onClick={() => closeNav()}
              >
                Espectáculos
              </Link>
            </li>
            <li>
              <Link
                to="/elmundo"
                className="link__item"
                onClick={() => closeNav()}
              >
                El mundo
              </Link>
            </li>
            <li>
              <Link
                to="/sociedad"
                className="link__item"
                onClick={() => closeNav()}
              >
                Sociedad
              </Link>
            </li>
            <li>
              <Link
                to="/opinion"
                className="link__item"
                onClick={() => closeNav()}
              >
                Opinión
              </Link>
            </li>
          </ul>
        </div>

        <button className="openbtn" onClick={() => openNav()}>
          &#9776; &nbsp; SECCIONES &nbsp;
        </button>

        <button className="btn_buscar">
          <FiSearch className="lupa" />
          &nbsp; BUSCAR{" "}
        </button>
        <h1>
          <Link to="/" title="Ir a la página principal" className="logo">
            LA NACION
          </Link>{" "}
        </h1>
        <Modals />
        <button className="btn_ingresar">INGRESAR</button>
      </div>
      <div className="sub_menu">
        <ul>
          <li>
            Dólar hoy: &nbsp; <b> $109.25 / $115,25</b>
          </li>
          <li>
            Dólar blue: &nbsp; <b> $197,00 / $201,00</b>
          </li>
          <li>
            <b>
              <WiDayCloudy />
              20° &nbsp;
            </b>
            Capital Federal
          </li>
          <li>
            <a href="#">Recibí Newsletters</a>
          </li>
          <li>
            <a href="#">Descubrí tus beneficios</a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;

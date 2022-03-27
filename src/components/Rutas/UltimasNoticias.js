import React from "react";
import "../../App.scss";
import Box from "../Box";
import Header from "../Header/Header";
import { Footer } from "../Footer/Footer";
import BigNews from "../BigNews/index";
import News from "../News/index";

const UltimasNoticias = () => {
  return (
    <>
      <Header />
      <Box title={"Ultimas Noticias"} />
      <div className="content_UN">
        <BigNews
          category={"Andrés “Cuervo” Larroque"}
          title={
            "“Pareciera que quieren proscribir a la parte mayoritaria del Frente de Todos”"
          }
          text={
            "El ministro bonaerense y dirigente de la Cámpora retomó sus críticas contra el Gobierno tras el ataque al despacho de Cristina Kirchner. “Cuando opina un kirchnerista es un drama y cuando alguien cercano al Presidente dice cualquier pavada no pasa nada”, declaró"
          }
          date={"14 de Marzo 2022"}
        />
        <News
          category={"Politica"}
          title={"Vocero del enojo kirchnerista contra el Presidente"}
          author={"Suiz Jerez"}
          image={
            "https://cloudfront-us-east-1.images.arcpublishing.com/infobae/ZSB7NROVGVAYVA3CE47QAX3HKE.jpg"
          }
        />
      </div>
      <hr />
      <Footer />
    </>
  );
};

export default UltimasNoticias;

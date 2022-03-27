import React from "react";
import "../../App.scss";
import Box from "../Box";
import { Col } from "../Col/index";
import { Row } from "../Row/index";
import CardOpinion from "../CardOpinion/index";

const Articles = [
  {
    id: "1",
    category: "Decepción",
    title:
      "En primera persona. Si tengo bienes, sé lo que tengo; si tengo pesos, no",
    author: "Luis Gonzalez",
    image:
      "https://i.pinimg.com/originals/cf/c1/d8/cfc1d8b69811d4bacb1377e39d5a74c9.jpg",
  },
  {
    id: "2",
    category: "Derechos Humanos",
    title: "El día de la memoria selectiva",
    author: "Milagros Suarez",
    image:
      "https://i.pinimg.com/originals/32/13/4d/32134d535817223c07490a212f5a0ea7.jpg",
  },
  {
    id: "3",
    category: "Qué lástima, narcicismo, Malvinas",
    title:
      "Permítame que le diga, señor Presidente, que el lunes pasado perdió la gran oportunidad de dar un gran ejemplo",
    author: "Rodolfo Martinez",
    image:
      "https://i.pinimg.com/originals/ce/27/17/ce2717fa8b440ed39b73fa2605a11849.jpg",
  },
];

const Opinion = () => {
  const articles = Articles;
  return (
    <>
      <Box title={"OPINION"} />
      <div className="wrapper2">
        <Row>
          {articles.map((article) => (
            <Col key={article.id}>
              <CardOpinion
                category={article.category}
                title={article.title}
                author={article.author}
                image={article.image}
              />
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
};

export default Opinion;

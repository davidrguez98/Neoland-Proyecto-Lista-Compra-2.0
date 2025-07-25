import { IProduct } from "../types/product-type";

export const productsBBDD: IProduct[] = [
  {
    img: "../public/coffee/1.webp",
    productName: "Shanga",
    productDescription: "Desde las montañas de Huye, Ruanda, a altitudes que van de los 1,980 a los 2,250 metros sobre el nivel del mar, nace Shanga. Este café es cultivado por Abdul Rudahunga, un productor que trabaja con pasión por ofrecer lo mejor de su tierra. La finca refleja ese esfuerzo en una taza que ofrece una armonía de aroma, cuerpo y dulzura.",
    productStock: { "250": 20, "500": 2, "1000": 1 },
    productPrice: { "250": 15.7, "500": 26.0, "1000": 49.1 }
  },
  {
    img: "../public/coffee/2.webp",
    productName: "Tolima",
    productDescription: "En las grandes montañas de Colombia a 1.400 y 2.000 metros sobre el nivel del mar, nace Tolima, un café que refleja la riqueza de su entorno. En pequeñas fincas de 3 hectáreas en promedio, los cafetos crecen bajo la sombra natural de árboles de plátano y nogal, beneficiándose de un clima templado de 23 a 30 ºC, ideal para el desarrollo del grano.",
    productStock: { "250": 6, "500": 7, "1000": 4 },
    productPrice: { "250": 15.4, "500": 25.6, "1000": 47.5 }
  },
  {
    img: "../public/coffee/3.webp",
    productName: "Alta mogiana",
    productDescription: "En la región de Mogiana, en la frontera entre São Paulo y Minas Gerais, nace Alta Mogiana, uno de los cafés más representativos de Brasil. Su clima estable y suelos fértiles hacen de esta zona un paraíso cafetero. El resultado es un grano complejo y dulce, ideal para quienes buscan un café con equilibrio y carácter.",
    productStock: { "250": 19, "500": 3, "1000": 5 },
    productPrice: { "250": 16.8, "500": 27.2, "1000": 55.6 }
  },
  {
    img: "../public/coffee/4.webp",
    productName: "Sol Naciente",
    productDescription: "Desde la Sierra Nevada de Santa Marta, Colombia, llega Sol Naciente. Este café es fruto del trabajo colectivo de pequeños productores que han transformado su comunidad a través del cultivo. Con su perfil limpio y floral, representa la esencia de una tierra resiliente y ofrece una experiencia en taza que deja huella.",
    productStock: { "250": 5, "500": 5, "1000": 5 },
    productPrice: { "250": 16.3, "500": 28.6, "1000": 53.6 }
  },
  {
    img: "../public/coffee/5.webp",
    productName: "Guariroba",
    productDescription: "Desde Santo Antônio do Amparo, Brasil, llega Guariroba, un café de microlote cultivado por Gabriel y Elisa Lamounier. Su finca produce granos llenos de matices, con un perfil aromático, afrutado y sedoso. Este café expresa la dedicación de su familia y se convierte en una joya imprescindible para los amantes del café de especialidad.",
    productStock: { "250": 13, "500": 4, "1000": 10 },
    productPrice: { "250": 15.1, "500": 26.9, "1000": 51.0 }
  },
  {
    img: "../public/coffee/6.webp",
    productName: "Tumbaga",
    productDescription: "Desde regiones como Tolima, Cauca y Antioquia llega Tumbaga Sugarcane Decaf. Descafeinado de forma natural con etilo de caña, mantiene su cuerpo y dulzura. Es un café pensado para quienes buscan sabor y complejidad sin cafeína, ofreciendo una taza completa, equilibrada y con notas dulces que no renuncian a la calidad.",
    productStock: { "250": 18, "500": 6, "1000": 10 },
    productPrice: { "250": 13.7, "500": 23.7, "1000": 43.3 }
  },
  {
    img: "../public/coffee/7.webp",
    productName: "Monteverde",
    productDescription: "Desde Rodríguez de Mendoza, en Amazonas (Perú), llega Monteverde, un café producido por más de 200 agricultores comprometidos. Su perfil limpio, dulce y equilibrado es el reflejo de un trabajo colectivo, sostenido por generaciones. Un grano que habla del corazón cafetalero peruano y ofrece una experiencia llena de identidad y tradición.",
    productStock: { "250": 11, "500": 14, "1000": 4 },
    productPrice: { "250": 14.4, "500": 24.3, "1000": 44.8 }
  },
  {
    img: "../public/coffee/8.webp",
    productName: "Magdalena",
    productDescription: "Cultivado en Salgar, Antioquia, Magdalena nace entre montañas y ríos. Suelo fértil, clima templado y tradición cafetera se combinan para ofrecer un café con identidad. Es un reflejo del nuevo rostro de la caficultura colombiana: comprometida, innovadora y de impacto social. Su perfil equilibrado es ideal para los que buscan autenticidad.",
    productStock: { "250": 21, "500": 5, "1000": 7 },
    productPrice: { "250": 16.5, "500": 29.1, "1000": 49.9 }
  },
  {
    img: "../public/coffee/9.webp",
    productName: "Dur Feres",
    productDescription: "Originario de Sidama, Etiopía, Dur Feres es un café cultivado entre 1800 y 1960 metros sobre el nivel del mar. Con un perfil floral y afrutado, es el resultado de prácticas tradicionales y tierras fértiles. Apreciado internacionalmente, destaca por su complejidad aromática y textura sedosa. Es una joya africana de taza memorable.",
    productStock: { "250": 20, "500": 4, "1000": 6 },
    productPrice: { "250": 15.4, "500": 26.4, "1000": 46.7 }
  },
  {
    img: "../public/coffee/10.webp",
    productName: "Giku Hill",
    productDescription: "Desde Burundi, Giku Hill crece a 1700 metros en tierras ricas cerca del Bosque Kibira. Aunque las comunidades enfrentan desafíos de infraestructura, producen uno de los cafés más expresivos del país. Su perfil destaca por su cuerpo limpio y matices brillantes. Un verdadero ejemplo de calidad en condiciones difíciles.",
    productStock: { "250": 16, "500": 5, "1000": 1 },
    productPrice: { "250": 17.0, "500": 29.8, "1000": 56.4 }
  },
  {
    img: "../public/coffee/11.webp",
    productName: "Bukonzo Anaerobic",
    productDescription: "Desde Kasese, Uganda, Bukonzo Ana es una joya fermentada en ambiente anaeróbico. Forma parte de una serie que refleja el terroir de los Rwenzori. Cada grano ofrece una nueva dimensión en complejidad, con notas afrutadas y ácidas. Es un café que desafía expectativas y ofrece una experiencia sensorial extraordinaria.",
    productStock: { "250": 22, "500": 8, "1000": 10 },
    productPrice: { "250": 16.7, "500": 29.8, "1000": 53.3 }
  },
  {
    img: "../public/coffee/12.webp",
    productName: "Los Rodriguez",
    productDescription: "Desde Caranavi, Bolivia, Los Rodriguez es producido entre 1570 y 1650 metros por una familia dedicada a la excelencia. Vinculado al programa Sol de la Mañana, este café simboliza progreso y calidad. Su perfil es balanceado, con acidez delicada y cuerpo redondo, convirtiéndolo en un favorito entre los amantes del buen café.",
    productStock: { "250": 23, "500": 13, "1000": 6 },
    productPrice: { "250": 15.2, "500": 25.2, "1000": 50.8 }
  },
  {
    img: "../public/coffee/13.webp",
    productName: "Cajamarca",
    productDescription: "En el norte de Perú, Cajamarca se eleva como una región cafetera por excelencia. Gracias a su clima tropical, suelos volcánicos y altitudes privilegiadas, este café de temporada destaca por su perfil limpio y cuerpo medio. Representa lo mejor de la caficultura peruana, con una taza vibrante y estructurada.",
    productStock: { "250": 5, "500": 15, "1000": 1 },
    productPrice: { "250": 16.3, "500": 26.6, "1000": 53.3 }
  },
  {
    img: "../public/coffee/14.webp",
    productName: "Wanja Kersa",
    productDescription: "Desde Gera, Etiopía, en la estación Atoma a 2000 metros, llega Wanja Kersa. Es el segundo sitio gestionado por Mike Mamo y refleja el potencial etíope con gran precisión. El café producido aquí es refinado, con notas florales y acidez cítrica, siendo una expresión auténtica de su origen.",
    productStock: { "250": 13, "500": 2, "1000": 7 },
    productPrice: { "250": 15.1, "500": 24.8, "1000": 51.0 }
  }
]
//import db from './database.js';

export async function getServices(req, res) {

  try {
    //const user = res.locals.user;

    //const registries = await db.collection("services")/*.find({ userId: user._id })*/.toArray()
    const registries = [{
        id: 1,
        image: "https://www.petz.com.br/blog/wp-content/uploads/2021/03/como-dar-banho-em-cachorro2.jpg",
        description: "Banho",
        price: 39.99,
        selected: false
    },
    {
        id: 2,
        image: "https://www.naturedogh.com.br/imagens/onde-fazer-tosa-higienica-gato.jpg",
        description: "Tosa",
        price: 59.99,
        selected: false
    },
    {
        id: 3,
        image: "https://www.petz.com.br/blog/wp-content/uploads/2019/05/transporte-de-animais-onibus-metro-2.jpg",
        description: "Transporte",
        price: 99.99,
        selected: false
    }]

    res.send(registries);
  } catch {
    res.sendStatus(500)
  }

}

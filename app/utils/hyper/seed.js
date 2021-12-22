const { connect } = require("hyper-connect");
const { map, append } = require("ramda");

const hyper = connect(`${process.env.HYPER}`);

const data = [
  {
    _id: "character- ckx500cus000kwm0m5mc0adga",
    type: "character",
    name: "Wario",
    debut: "1999",
    user_id: "user-ckxhruvsi0000n70m5fmcgfaz",
  },
  {
    _id: "character- ckx5027hh000lwm0m4ww285m9",
    type: "character",
    name: "Donkey Kong",
    debut: "1993",
    user_id: "user-ckxhruvsi0000n70m5fmcgfaz",
  },
  {
    _id: "character- ckx55elrz0000wp0mb30jaizr",
    type: "character",
    name: "Diddy Kong",
    debut: "1999",
    user_id: "user-ckxhruvsi0000n70m5fmcgfaz",
  },
  {
    _id: "character- ckx55ha030002wp0m7ifd6xql",
    type: "character",
    name: "Koopa Troopa",
    debut: "1987",
    user_id: "user-ckxhruvsi0000n70m5fmcgfaz",
  },
  {
    _id: "character- ckx55j63l0003wp0mdm0g0uls",
    type: "character",
    name: "Metal Mario",
    debut: "2007",
    user_id: "user-ckxhruvsi0000n70m5fmcgfaz",
  },
  {
    _id: "character- ckx55ldoa0004wp0ma7l2fsfu",
    type: "character",
    name: "Waluigi ",
    debut: "2003",
    user_id: "user-ckxhruvsi0000n70m5fmcgfaz",
  },
  {
    _id: "character- ckx55m23r0005wp0m0v2t33q0",
    type: "character",
    name: "Villager",
    debut: "2016",
    user_id: "user-ckxhruvsi0000n70m5fmcgfaz",
  },
  {
    _id: "character- ckx7qxy2s0000d10m7fa97zez",
    type: "character",
    name: "Link",
    debut: "1996",
    user_id: "user-ckxhruvsi0000n70m5fmcgfaz",
  },
  {
    _id: "character- ckx7w87200001ma0m1lq5bygc",
    type: "character",
    name: "Todetta",
    debut: "2005",
    user_id: "user-ckxhruvsi0000n70m5fmcgfaz",
  },
  {
    _id: "character- ckx7xplpi00003p0m7n5ndjr7",
    type: "character",
    name: "Kirby",
    debut: "1988",
    user_id: "user-ckxhruvsi0000n70m5fmcgfaz",
  },
  {
    _id: "character- ckx951hmq00006a0maz5fcnl5",
    type: "character",
    name: "Midna",
    debut: "2008",
    user_id: "user-ckxhruvsi0000n70m5fmcgfaz",
  },
  {
    _id: "character- ckxge59fp0005sq0mgvi2a6a1",
    type: "character",
    name: "Roy (Smash Bros)",
    debut: "2005",
    user_id: "user-ckxhruvsi0000n70m5fmcgfaz",
  },
  {
    _id: "character- ckxge97kq0007sq0m7vv5gvof",
    type: "character",
    name: "Marth (Smash Bros)",
    debut: "2004",
    user_id: "user-ckxhruvsi0000n70m5fmcgfaz",
  },
  {
    _id: "character- ckxgnnbel0001ps0memfda60i",
    type: "character",
    name: "Peach",
    debut: "1987",
    user_id: "user-ckxhruvsi0000n70m5fmcgfaz",
  },
  {
    _id: "character-1",
    type: "character",
    name: "Mario",
    debut: "1985",
    user_id: "user-ckxhruvsi0000n70m5fmcgfaz",
  },
  {
    _id: "character-10",
    type: "character",
    name: "Toad",
    debut: "1988",
    user_id: "user-ckxhruvsi0000n70m5fmcgfaz",
  },
  {
    _id: "character-11",
    type: "character",
    name: "Yoshi",
    debut: "1992",
    user_id: "user-ckxhruvsi0000n70m5fmcgfaz",
  },
  {
    _id: "character-12",
    type: "character",
    name: "Princess Daisy",
    debut: "1990",
    user_id: "user-ckxhruvsi0000n70m5fmcgfaz",
  },
  {
    _id: "character-2",
    type: "character",
    name: "Luigi",
    debut: "1986",
    user_id: "user-ckxhruvsi0000n70m5fmcgfaz",
  },
  {
    _id: "character-3",
    type: "character",
    name: "Princess Peach",
    debut: "1985",
    user_id: "user-ckxhruvsi0000n70m5fmcgfaz",
  },
  {
    _id: "character-4",
    type: "character",
    name: "Bowser",
    debut: "1985",
    user_id: "user-ckxhruvsi0000n70m5fmcgfaz",
  },
  // {
  //   _id: "user-ckxhruvsi0000n70m5fmcgfaz",
  //   id: "user-ckxhruvsi0000n70m5fmcgfaz",
  //   type: "user",
  //   name: "anna",
  //   passwordHash:
  //     "$2b$10$hiswDLgiBXv82cAMMosMCesswV45kCExRmPG6CSBZr7a4vsivgkHu",
  // },
  // {
  //   id: "game-10",
  //   type: "game",
  //   name: "Super Mario Land",
  //   description: "",
  //   released: "1988",
  // },
  // {
  //   id: "game-11",
  //   type: "game",
  //   name: "Yoshi's Island",
  //   description: "",
  //   released: "1992",
  // },
  // {
  //   id: "appearance-10",
  //   type: "appearance",
  //   game: {
  //     id: "game-10",
  //     name: "Super Mario Land",
  //   },
  //   character: {
  //     id: "character-12",
  //     name: "Princess Daisy",
  //   },
  // },
];

async function seed() {
  const result = await hyper.data.bulk(data);
  console.log(result);
}

seed();

import Chance from "chance";

const chance = new Chance();

export default function handler(request, response) {
  const character = {
    prefix: chance.prefix(),
    firstName: chance.first(),
    lastName: chance.last(),
    age: chance.age(),
    twitter: chance.twitter({length: 10}),
    location: chance.geohash(),
    color: chance.color({format: "hex"})
  };

  response.status(200).json(character);
}

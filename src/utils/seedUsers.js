import { fakerES_MX as faker } from "@faker-js/faker";
import User from '../models/user.model.js';

const createRandomUsers = (count = 10,  usersArray = []) => {
  for (let i = 0; i < count; i++) {
    const id = faker.database.mongodbObjectId();
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();
    const email = faker.internet.email({
      firstName: firstName.toLocaleLowerCase(),
      lastName: lastName.toLocaleLowerCase(),
    });
    const name = `${firstName} ${lastName}`;
    usersArray.push(new User(id, name, email));
  }
  console.log(usersArray);
};
// createRandomUsers(30);
export default createRandomUsers;
// Refactorizar la funcion
// ruta:seed-user/:cant  
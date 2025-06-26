import createRandomUsers from '../utils/seedUsers.js';

const users = [];
createRandomUsers(10, users);
export default { users };
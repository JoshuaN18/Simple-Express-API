import { getUser, addUser } from '../utils/queries.js';
import logger from '../utils/logger.js';

const findUserByPhoneNumber = async (phone_number) => {
    try {
        const user = await getUser(phone_number);
        logger.info(`User Found: ${JSON.stringify(user)}`);
        return user;
    } catch (error) {
        logger.error(`Error Fetching User From Database: ${error.message}`);
        throw new Error(`Error Fetching User From Database: ${error.message}`, 400);
    }
};

const createUser = async (userData) => {
    try {
        const [newUser] = await addUser(userData)
        logger.info(`User Created: ${JSON.stringify(newUser)}`);
        return newUser;
    } catch (error) {
        logger.error(`Error Creating User: ${error.message}`);
        throw new Error(`Error Creating User: ${error.message}`, 400);
    }
};

export const findOrCreateUser = async (userData) => {
    const { phone_number } = userData;

    const user = await findUserByPhoneNumber(phone_number);

    if (user) {
        return user;
    } else {
        return await createUser(userData);
    }
};
  
import { getUser, addUser } from '../utils/queries.js'; 

const findUserByPhoneNumber = async (phone_number) => {
    try {
        const user = await getUser(phone_number);

        return user;
    } catch (error) {
        throw new Error('Error fetching user from database', 400);
    }
};

const createUser = async (userData) => {
    try {
        const [newUser] = await addUser(userData)

        return newUser;
    } catch (error) {
        throw new Error('Error creating user', 500);
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
  
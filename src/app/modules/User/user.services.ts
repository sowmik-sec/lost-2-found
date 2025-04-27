import prisma from "../../../shared/prisma";
import bcrypt from "bcrypt";
const createUserIntoDB = async (payload: {
  name: string;
  email: string;
  age: number;
  password: string;
  bio: string;
}): Promise<{ name: string; email: string; createdAt: Date }> => {
  const result = await prisma.$transaction(async (transactionClient) => {
    const hashedPassword: string = await bcrypt.hash(payload.password, 12);
    const userData = {
      name: payload.name,
      email: payload.email,
      password: hashedPassword,
    };
    const createUser = await transactionClient.user.create({
      data: userData,
    });
    await transactionClient.profile.create({
      data: {
        userId: createUser.id,
        bio: payload.bio,
        age: payload.age,
      },
    });
    return {
      name: createUser.name,
      email: createUser.email,
      createdAt: createUser.createdAt,
    };
  });
  return result;
};

export const UserServices = {
  createUserIntoDB,
};

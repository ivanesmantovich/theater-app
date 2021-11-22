import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

export default async function (req: NextApiRequest, res: NextApiResponse) {
  // if (req.method !== 'POST') {
  //   res.status(405).send({ message: 'Only POST requests allowed' });
  //   return;
  // }
  console.log(req.body);
  const prisma = new PrismaClient({ log: ['query'] });

  try {
    const { user: userData } = req.body;
    // const { user: userData } = body;
    const user = await prisma.user.create({
      data: {
        firstName: userData.firstName,
        lastName: userData.lastName,
        email: userData.email,
        password: userData.password,
        age: userData.age,
        gender: userData.gender,
      },
    });

    res.status(201);
    res.json({ user });
  } catch (e) {
    console.error(e);
    res.status(500);
    res.json({ error: 'Sorry, unable to create' });
  } finally {
    await prisma.$disconnect();
  }
}

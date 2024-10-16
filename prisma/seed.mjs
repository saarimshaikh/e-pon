import { PrismaClient } from "./generated/client/index.js";
import bcrypt from "bcrypt";
const prisma = new PrismaClient();

async function main() {
  const users = [
    {
      name: "Gian test",
      email: "giantest@gmail.com",
      password: "testpassword123456789",
    },
    {
      name: "Mico test",
      email: "micotest@gmail.com",
      password: "testpassword123456789",
    },
    {
      name: "Jonathanteste",
      email: "test@gmail.com",
      password: "testpassword123456789",
    },
    {
      name: "Rico test",
      email: "ricotest@gmailk.com",
      password: "testpassword123456789",
    },
  ];
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  for (const user of users) {
    const hashedPassword = await bcrypt.hash(user.password, 10);
    await prisma.users.upsert({
      where: { email: user.email },
      update: {},
      create: {
        name: user.name,
        email: user.email,
        password: hashedPassword,
      },
    });
    console.log(`User ${user.name} upserted successfully.`);
  }

  console.log("Seeding completed successfully.");
}

main()
  .then(() => prisma.$disconnect)
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
  });

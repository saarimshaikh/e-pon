import { PrismaClient } from './generated/client/index.js';

const prisma = new PrismaClient()

async function main() {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const users = await prisma.users.upsert({
        where: { email: 'rico.guinana@fujitsu.com' },
        update: {},
        create: {
            email: 'rico.guinana@fujitsu.com',
            name: 'Rico Guinanao',
        },
    })
}

main()
    .then(() => prisma.$disconnect)
    .catch( async (error) => {
        console.error(error)
        await prisma.$disconnect()
    })
//@ts-ignore
const {PrismaClient} = require('@prisma/client')
const bcrypt = require('bcrypt')
const prisma = new PrismaClient()

async function seed() {
    const password = await bcrypt.hash("admin11", 10)
    await prisma.user.create({
      data: {
        name: "Андрей",
        surname: "Пушпурс",
        patronymic: "Юрьевич",
        username: "admin",
        hashedPassword: password,
        role: "Admin",
        email: "admin@admin.ru"
    }
    }).catch(console.log)
}

seed().then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
const { PrismaClient } = require('@prisma/client');

const data = require('../utils/mock-data.json');

const prisma = new PrismaClient();

async function main() {
  const clerkId = 'user_2qbbvRHiSYabOqFdR6wQA3CM610';

  const jobs = data.map((job) => {
    return {
      ...job,
      clerkId,
    };
  });

  for (const job of jobs) {
    await prisma.job.create({
      data: job,
    });
  }
}

main()
  .then(async () => {
    console.log('Data added successfully');
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.log(e);
    await prisma.$disconnect();
    process.exit(1);
  });

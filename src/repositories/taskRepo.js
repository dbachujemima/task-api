import prisma from '../config/db.js';

export async function findAll(completed) {
  return prisma.task.findMany({
    where: completed === undefined ? {} : { completed },
  });
}

export async function create(data) {
  return prisma.task.create({
    data,
  });
}

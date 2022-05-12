import { SubmitStudentUseCase } from './use-cases/submit-student-use-case';
import { NodemailerMailAdapter } from './adapters/nodemailer/nodemailer-mail-adapter';
import { PrismaFeedbacksRepository } from './repositories/prisma/prisma-feedbacks-repository';
import express from 'express';

import { SubmitFeedbackUseCase } from './use-cases/submit-feedback-use-case';
import { PrismaStudentsRepository } from './repositories/prisma/prisma-students-repository';
import { PrismaMattersRepository } from './repositories/prisma/prisma-matters-repository';
import { SubmitMatterUseCase } from './use-cases/submit-matter-use-case';
import { PrismaTimeCountsRepository } from './repositories/prisma/prisma-time_counts-repository';
import { SubmitTimeCountUseCase } from './use-cases/submit-time_count-use-case';
import { PrismaUsersRepository } from './repositories/prisma/prisma-users-repository';
import { SubmitUserUseCase } from './use-cases/submit-user-use-case';
import { prisma } from './prisma';

export const routes = express.Router();



routes.post('/feedbacks', async (req, res) => {
  const { type, comment, screenshot } = req.body

  const prismaFeedbackRepository = new PrismaFeedbacksRepository()
  const nodemailerMailAdapter = new NodemailerMailAdapter()

  const submitFeedbackUseCase = new SubmitFeedbackUseCase(
    prismaFeedbackRepository, 
    nodemailerMailAdapter
  )

  await submitFeedbackUseCase.execute({
    type,
    comment,
    screenshot,
  })

  return res.status(201).send();
})

routes.post('/matters',async (req, res) => {
  const { matter, matter_student } = req.body

  const prismaMatterRepository = new PrismaMattersRepository()

  const submitMatterUseCase = new SubmitMatterUseCase(
    prismaMatterRepository
  )
  
  await submitMatterUseCase.execute({ 
    matter, 
    matter_student 
  })

  return res.status(201).send();
})

routes.post('/students',async (req, res) => {
  const { first_name, last_name, birth_date, goal } = req.body

  const prismaStudentRepository = new PrismaStudentsRepository()

  const submitStudentUseCase = new SubmitStudentUseCase(
    prismaStudentRepository
  )
  
  await submitStudentUseCase.execute({
      first_name, 
      last_name, 
      birth_date, 
      goal,
  })

  return res.status(201).send();
})

routes.post('/time_counts',async (req, res) => {
  const { time_count, matter_id, student_id } = req.body

  const prismaTimeCountRepository = new PrismaTimeCountsRepository()

  const submitTimeCountUseCase = new SubmitTimeCountUseCase(
    prismaTimeCountRepository
  )
  
  await submitTimeCountUseCase.execute({
    time_count, 
    matter_id, 
    student_id
  })

  return res.status(201).send();
})

routes.post('/users',async (req, res) => {
  const { email, password, user_type, studentId } = req.body

  const prismaUserRepository = new PrismaUsersRepository()

  const submitUserUseCase = new SubmitUserUseCase(
    prismaUserRepository
  )
  
  await submitUserUseCase.execute({
    email, 
    password, 
    user_type, 
    studentId
  })

  return res.status(201).send();
})

//pegar apenas as matérias
routes.get(`/students/:student_id/matters/`, async(req, res) => {
  const { student_id } = req.params
  const usermatters = await prisma.student.findMany({
    where: { student_id: String(student_id)},
    select: {
      matters: true
    }
  })
  res.json(usermatters)
  return  res.status(201).send();
})

routes.get(`/students/:student_id/`, async(req, res) => {
  const { student_id } = req.params
  const usermatters = await prisma.student.findMany({
    where: { student_id: String(student_id)},
    select: {
      matters: true,
      student_id: true,
      first_name: true,
      goal: true,
    }
  })
  res.json(usermatters)
  return 
})

routes.get(`/students/:student_id/:matter_id`, async(req, res) => {
  const { student_id, matter_id } = req.params
  const usermatters = await prisma.timeCount.aggregate({
    where: { 
      student_id: String(student_id),
      matter_id: Number(matter_id)  
    }, 
    
    _sum: {
      time_count: true
    } 
  })
  
  res.json(usermatters)
  return  //res.status(201).send();
})
import { inngest } from '@/inngest/client';
import { createTRPCRouter, protectedProcedure } from '../init';
import prisma from '@/lib/db';
import { google } from '@ai-sdk/google';
import { generateText } from 'ai';

export const appRouter = createTRPCRouter({
  testAI: protectedProcedure.mutation(async () => {
    await inngest.send({
      name: "nodebase/execute.ai"
    })
    return {
      success: true,
      message: "Google AI"
    };
  }),
  getWorkflows: protectedProcedure
    .query(({ ctx }) => {
      return prisma.workflow.findMany();
  }),
  createWorkflow: protectedProcedure.mutation(async () => {
    await inngest.send({
      name: "test/hello.world",
      data: {
        email: "cuong98.nb@gmail.com"
      }
    });
    return {
      success: true,
      message: "Creating workflow"
    };
  })
});
// export type definition of API
export type AppRouter = typeof appRouter;
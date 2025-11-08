import prisma from "@/lib/db";
import { inngest } from "./client";
import { google } from '@ai-sdk/google';
import { openai } from '@ai-sdk/openai';
import { xai } from '@ai-sdk/xai';
import { generateText } from 'ai';

//If you need custom these ai, import create{AI} (eg. import { createOpenAI } from "@ai-sdk/openai";)

export const executeAI = inngest.createFunction(
  { id: "execute-ai" },
  { event: "nodebase/execute.ai" },
  async ({ event, step }) => {
    const { steps } = await step.ai.wrap(
        "gemini-generate-text", 
        generateText,
        {
            model: google("gemini-2.5-flash"),
            system: "You are a helpful assistant.",
            prompt: "What is 2 + 2?."
        }
    );
    return { steps };
  },
);
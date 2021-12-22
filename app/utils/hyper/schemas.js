import * as z from "zod";

export const userSchema = z.object({
  id: z.string().regex(/^user/),
  type: z.literal("user").default("user"),
  // createdAt: z.date(),
  username: z.string().min(3).max(100),
  passwordHash: z.string(),
});

// Update character schema to have a user_id so that whenever a user adds a character, their user_id is tagged to the character.

export const characterSchema = z.object({
  id: z.string().regex(/^character/),
  type: z.literal("character").default("character"),
  name: z.string(),
  debut: z.string().min(4).max(4),
  user_id: z.string().optional(),
});

export const gameSchema = z.object({
  id: z.string().regex(/^game/),
  type: z.literal("game").default("game"),
  name: z.string().max(100),
  description: z.string().max(5000).optional(),
  released: z.string().min(4).max(4),
  // user_id: z.string(),
});

export const appearanceSchema = z.object({
  id: z.string().regex(/^appearance/),
  type: z.literal("appearance").default("appearance"),
  character_id: z.string(),
  character_name: z.string(),
  game_id: z.string(),
  game_name: z.string(),
  // user_id: z.string(),
});

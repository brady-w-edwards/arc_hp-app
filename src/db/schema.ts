import { pgTable, serial, varchar, integer, text, timestamp, boolean } from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';

export const userTable = pgTable("user", {
	id: text("id").primaryKey(),
    username: text("username").notNull().unique(),
    password_hash: text("password_hash").notNull()
});

export const sessionTable = pgTable("session", {
	id: text("id").primaryKey(),
	userId: text("user_id")
		.notNull()
		.references(() => userTable.id),
	expiresAt: timestamp("expires_at", {
		withTimezone: true,
		mode: "date"
	}).notNull()
});
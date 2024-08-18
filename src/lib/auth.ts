import { Lucia } from "lucia";
import { DrizzlePostgreSQLAdapter } from "@lucia-auth/adapter-drizzle";
import { db } from "../db/db";
import { userTable, sessionTable } from "../db/schema";
import { cookies } from "next/headers";
import { User } from "lucia";
import { Session } from "lucia";


const adapter = new DrizzlePostgreSQLAdapter(db, sessionTable, userTable);

export const lucia = new Lucia(adapter, {
    sessionCookie: {
      expires: false,
      attributes: {
        secure: process.env.NODE_ENV === "production",
      },
    },
    getUserAttributes: (attributes) => {
      return {
        id: attributes.username,
      };
    },
  });
    
    declare module "lucia" {
        interface Register {
            Lucia: typeof lucia;
            DatabaseUserAttributes: DatabaseUserAttributes;
        }
    }
    
    interface DatabaseUserAttributes {
        username: string;
    }

// IMPORTANT!
declare module "lucia" {
	interface Register {
		Lucia: typeof lucia;
	}
}
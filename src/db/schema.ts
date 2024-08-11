import { pgTable, serial, varchar, integer, text, timestamp, boolean } from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';

export const users = pgTable('users', {
    id: serial('id').primaryKey(),
    name: varchar('name', { length: 255 }),
    email: varchar('email', { length: 255 }).unique(),
    password: varchar('password', { length: 255 }), // for authentication
    createdAt: timestamp('created_at').defaultNow(),
});

export const roles = pgTable('roles', {
    id: serial('id').primaryKey(),
    name: varchar('name', { length: 255 }).unique(),
    description: text('description'),
});

export const userRoles = pgTable('user_roles', {
    id: serial('id').primaryKey(),
    userId: integer('user_id').references(() => users.id),
    roleId: integer('role_id').references(() => roles.id),
});

export const permissions = pgTable('permissions', {
    id: serial('id').primaryKey(),
    name: varchar('name', { length: 255 }).unique(),
    description: text('description'),
});

export const rolePermissions = pgTable('role_permissions', {
    id: serial('id').primaryKey(),
    roleId: integer('role_id').references(() => roles.id),
    permissionId: integer('permission_id').references(() => permissions.id),
});

// Define relations
export const usersRelations = relations(users, ({ many }) => ({
    userRoles: many(userRoles),
}));

export const rolesRelations = relations(roles, ({ many }) => ({
    userRoles: many(userRoles),
    rolePermissions: many(rolePermissions),
}));

export const permissionsRelations = relations(permissions, ({ many }) => ({
    rolePermissions: many(rolePermissions),
}));

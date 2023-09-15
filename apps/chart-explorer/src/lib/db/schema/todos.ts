import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core'
import { createInsertSchema, createSelectSchema } from 'drizzle-zod'
import { z } from 'zod'

export const todos = sqliteTable('todos', {
  id: integer('id', { mode: 'number' }).primaryKey({ autoIncrement: true }),
  content: text('content').notNull(),
  completed: integer('completed', { mode: 'boolean' }).notNull().default(false),
})
// Schema for CRUD - used to validate API requests
export const insertTodoSchema = createInsertSchema(todos)
export const selectTodoSchema = createSelectSchema(todos)
export const todoIdSchema = selectTodoSchema.pick({ id: true })
export const updateTodoSchema = selectTodoSchema

export type Todo = z.infer<typeof selectTodoSchema>
export type NewTodo = z.infer<typeof insertTodoSchema>
export type TodoId = z.infer<typeof todoIdSchema>['id']

const { mysqlTable, int, varchar } = require("drizzle-orm/mysql-core");

const users = mysqlTable("users", {
  id: int("id").primaryKey().autoincrement(),
  name: varchar("name", { length: 255 }),
  email: varchar("email", { length: 255 }).notNull().unique(),
});

const books = mysqlTable("books", {
  id: int("id").primaryKey().autoincrement(),
  title: varchar("title", { length: 255}).notNull(),
  author: varchar("author", {length: 255}).notNull(),
  year: int("year").notNull(),
})

module.exports = { users, books };

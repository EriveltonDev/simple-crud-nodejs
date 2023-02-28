-- CreateTable
CREATE TABLE "posts" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "content" TEXT NOT NULL,
    "author_id" INTEGER NOT NULL,
    CONSTRAINT "posts_author_id_fkey" FOREIGN KEY ("author_id") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

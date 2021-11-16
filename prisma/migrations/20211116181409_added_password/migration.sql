/*
  Warnings:

  - Added the required column `password` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "gen" AS ENUM ('m', 'f', 'o');

-- AlterTable
ALTER TABLE "screenings" ADD COLUMN     "time" TEXT;

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "age" INTEGER,
ADD COLUMN     "gender" "gen",
ADD COLUMN     "password" TEXT NOT NULL,
ADD COLUMN     "profile_pic" TEXT;

-- CreateTable
CREATE TABLE "wants" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER,
    "screening_id" INTEGER,

    CONSTRAINT "wants_pk" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "wants" ADD CONSTRAINT "wants_screening_id_fkey" FOREIGN KEY ("screening_id") REFERENCES "screenings"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "wants" ADD CONSTRAINT "wants_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

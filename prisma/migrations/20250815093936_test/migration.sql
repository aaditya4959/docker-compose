/*
  Warnings:

  - Added the required column `salary` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."User" ADD COLUMN     "salary" INTEGER NOT NULL;

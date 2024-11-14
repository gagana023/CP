"use server";

import prisma from "@/lib/prisma";
export async function updateTransaction(id: string, data: { description: string; amount: number}) {
    return await prisma.transaction.update({
        where: { id },
        data,
    
    });
}
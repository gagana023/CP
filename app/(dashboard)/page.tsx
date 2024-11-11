
// "use client"

import CreateTransactionDialog from "@/app/(dashboard)/_components/CreateTransactionDialog";
import History from "@/app/(dashboard)/data/History";
import Overview from "@/app/(dashboard)/_components/Overview";
import { Button } from "@/components/ui/button";
import prisma from "@/lib/prisma";
// import { currentUser } from "@clerk/nextjs";
// import { useUser } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import React from "react";

async function page() {
  const user = await currentUser();
  if (!user) {
    redirect("/sign-in");
  }

  const userSettings = await prisma.userSettings.findUnique({
    where: {
      userId: user.id,
    },
  });

  if (!userSettings) {
    redirect("/wizard");
  }

  return (
    <div className="h-full bg-background">
      <div className="mr-7 ml-7 rounded-md bg-gradient-to-r bg-black">
        {/* from-gray-500 via-gray-600 to-gray-900 previous color */}
        <div className="container flex flex-wrap items-center justify-between gap-6 py-8  ">
          <p className="text-3xl font-bold">Hello! 😊</p>

          <div className="flex items-center gap-3">
            <CreateTransactionDialog
              trigger={
                <Button
                  variant={"outline"}
                  className="border-emerald-500 bg-emerald-950 text-white hover:bg-emerald-700 hover:text-white"
                >
                  New income
                </Button>
              }
              type="income"
            />

            <CreateTransactionDialog
              trigger={
                <Button
                  variant={"outline"}
                  className="border-rose-500 bg-rose-950 text-white hover:bg-rose-700 hover:text-white"
                >
                  New expense
                </Button>
              }
              type="expense"
            />
          </div>
        </div>
      </div>
      <Overview userSettings={userSettings} />
    </div>
  );
}

export default page;

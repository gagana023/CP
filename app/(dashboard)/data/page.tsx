

import History from "@/app/(dashboard)/data/History";
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
    <History userSettings={userSettings} />

  );
}
export default page
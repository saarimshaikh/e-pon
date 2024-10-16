import { Provider } from "../app/component/providers";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import { Session } from "@/lib/utils/types";
import { Users } from "@/prisma/generated/client";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const session: Session<Users> | null = await getServerSession(authOptions)
console.log(session)

  return (
    <html lang="en">
      <body className="flex flex-col relative overflow-hidden">
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  );
}

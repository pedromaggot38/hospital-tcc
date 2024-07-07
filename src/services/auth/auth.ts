import { db } from "@/lib/db"
import { compareSync } from "bcrypt-ts"
import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [

    Credentials({
      credentials: {
        username: {
          label: "Username",
          type: "text",
        },
        password: {
          label: "Password",
          type: "password",
        }
      },
      authorize: async (credentials) => {
        const username = credentials.username as string
        const password = credentials.password as string

        if (!username || !password) {
          console.error('Username or password not provided')
          return null
        }

        const user = await db.user.findUnique({
          where: {
            username: username
          }
        })

        if (!user) {
          console.error('User not found')
          return null
        }

        const matches = compareSync(password, user.password)

        if (matches) {
          return {
            id: user.id,
            name: user.name,
            username: user.username,
            role: user.role,
            image: user.image,
            createdAt: user.createdAt
          }
        } else {
          console.error('Username or password incorrect')
          return null
        }
      }

    })

  ],
})
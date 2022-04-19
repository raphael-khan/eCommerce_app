import bcrypt from "bcryptjs"

const users = [
  {
    name: "Wired Admin",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Wired Customer",
    email: "wiredcustomer@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
]

export default users

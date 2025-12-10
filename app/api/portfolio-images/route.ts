import { NextResponse } from "next/server"
import fs from "fs"
import path from "path"

export async function GET() {
  const portfolioDir = path.join(process.cwd(), "public/portfolio")

  const files = fs.readdirSync(portfolioDir)

  const images = files
    .filter((file) => /\.(jpg|jpeg|png|webp)$/i.test(file))
    .map((file, index) => ({
      id: index + 1,
      src: `/portfolio/${file}`,
    }))

  return NextResponse.json(images)
}

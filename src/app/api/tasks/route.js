import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

export const GET = async () => {
    const tasks = await prisma.task.findMany();
    return NextResponse.json({ Status: "Success", payload: tasks });
};

export const POST = async (request) => {
    const { title, description } = await request.json();
    const newTask = await prisma.task.create({
        data: {
            title: title,
            description: description,
        },
    });
    return NextResponse.json({ status: "success", payload: newTask });
};

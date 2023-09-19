import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

export const GET = async (request, { params }) => {
    const task = await prisma.task.findUnique({
        where: {
            id: Number(params.id),
        },
    });
    return NextResponse.json({ status: "Success", payload: task });
};

export const PUT = async (request, { params }) => {
    const data = await request.json();
    const taskUpdated = await prisma.task.update({
        where: {
            id: Number(params.id),
        },
        data: data,
    });
    return NextResponse.json({ status: "success", payload: taskUpdated });
};

export const DELETE = async (request, { params }) => {
    try {
        const taskRemoved = await prisma.task.delete({
            where: {
                id: Number(params.id),
            },
        });
        return NextResponse.json({ status: "success", payload: taskRemoved });
    } catch (error) {
        return NextResponse.json(error.message);
    }
};

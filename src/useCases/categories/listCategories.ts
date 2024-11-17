import type { Request, Response } from "express";

import { Category } from "../../app/models/Category";

export async function listCategories(req: Request ,res: Response) {
    const categories = await Category.find();
    return res.json(categories);
}
import { Request, Response } from "express";

export const home = (req: Request, res: Response) => {
    res.send("Home Page");
};
export const dogs = (req: Request, res: Response) => {
    res.send("Home Dogs");
};
export const cats = (req: Request, res: Response) => {
    res.send("Home Cats");
};
export const fishes = (req: Request, res: Response) => {
    res.send("Home Fishes");
};
import { Request, Response, NextFunction } from "express";
export const parser = (req: Request, res: Response, next: NextFunction) => {
  if (req.headers.authorization) {
    next();
  }
  throw new Error("Unauthorization");
};

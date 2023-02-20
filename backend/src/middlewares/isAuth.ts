import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

interface JwtPayload {
  id: number;
}

export async function isAuth(req: Request, res: Response, next: NextFunction) {
  try {
    const { authorization } = req.headers;
    const token = authorization.split(' ')[1];

    if (token === 'undefined') {
      return res.status(401).json('Not authorazed');
    }

    const { id } = jwt.verify(token, process.env.JWT_TOKEN ?? '') as JwtPayload;

    req.user = id;

    return next();
  } catch (error) {
    return res.status(401).json('Not authorazed');
  }
}

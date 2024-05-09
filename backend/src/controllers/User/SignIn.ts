import { Request, Response } from "express";

export const signIn = ( request: Request, response: Response ) => {
    response.send( "Sign In" );
}
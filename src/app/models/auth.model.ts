import { Login } from "./login.model";
import { User } from "./user.model";

export interface Auth {
    result : UserWithToken
    statusCode : number
}

export interface AuthRegister{
    results : UserWithToken;
    count : number;
    statusCode: number;
}

export interface UserWithToken {
    token : string;
    user : User
}

export interface LoginUserWithToken {
    token : string;
    Login : Login
}
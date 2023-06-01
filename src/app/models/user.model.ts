export interface User {
    user_id: number;
    user_firstname: string;
    user_lastname: string;
    user_email: string;
    user_birthdate: Date;
    user_address: string;
    user_role: string;
    user_password: string;
}

export interface UserDTO {
    user_firstname: string;
    user_lastname: string;
    user_email: string;
    user_birthdate: Date;
    user_address: string;
    user_role: string;
    user_password: string;
  }
  
export interface UserArray{
    results : User[];
    statusCode: number;
}
    
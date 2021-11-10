import { CommonFields } from './commonFields.model';
import knex from "../knex";

class Users extends CommonFields {
    static get tableName() {
        return "users";
    }
    password: string;
    first_name: string; 
    last_name: string;
    email: string;
    avatar: string;
}

export const UserModel = Users.bindKnex(knex);
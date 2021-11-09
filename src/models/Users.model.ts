import { Model } from 'objection';
import knex from "../knex";

class Users extends Model {
    static get tableName() {
        return "users";
    }

    id!: number;
    password: string;
    first_name: string; 
    last_name: string;
    email: string;
    avatar: string;
    created_at: Date;
    updated_at: Date;
    created_by: string;
    updated_by: string;
    is_active: boolean;
}

export const UserModel = Users.bindKnex(knex);
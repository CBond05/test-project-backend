import { Model } from 'objection';
import knex from "../knex";

class Projects extends Model {
    static get tableName() {
        return "projects";
    }

    id!: number;
    name: string;
    created_at: Date;
    updated_at: Date;
    created_by: string;
    updated_by: string;
    is_active: boolean;
}

export const ProjectsModel = Projects.bindKnex(knex);
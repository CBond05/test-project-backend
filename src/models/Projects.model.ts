import { CommonFields } from "./commonFields.model";
import knex from "../knex";

class Projects extends CommonFields {
    static get tableName() {
        return "projects";
    }
    name: string;
   

    // add modifiers
}

export const ProjectsModel = Projects.bindKnex(knex);
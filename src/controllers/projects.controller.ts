import { fetchAllProjects, fetchProjectById, createProject, updateProjectById, removeProjectById } from '../services/projects.service';
import { ParameterizedContext } from 'koa';

export const fetchAllProjectsCtrl = async (ctx: ParameterizedContext ) => {
        const projects = await fetchAllProjects();
        ctx.ok(projects)
}
export const fetchProjectByIdCtrl = async (ctx: ParameterizedContext ) => {
        const { params: {id} } = ctx;
        const project = await fetchProjectById(id);
        ctx.ok(project)
   
}
export const createProjectCtrl = async (ctx: ParameterizedContext ) => {
        const  body = ctx.request;
        const createdProject = await createProject(body);
        ctx.ok(createdProject)
   
}
export const updateProjectByIdCtrl = async (ctx: ParameterizedContext ) => {
        const { params: {id} } = ctx;
        const { body } = ctx.request;
        const updatedProject = await updateProjectById(id, body);
        ctx.ok(updatedProject)
}
export const removeProjectByIdCtrl = async (ctx: ParameterizedContext ) => {
        const { params: {id} } = ctx;
        const removedProject = await removeProjectById(id);
        ctx.ok(removedProject)
}

// add common fields in model
// add md in index.ts root file
// create md and move try/catch to errMD, 
// migration and seed runner and transaction wrapper
// index.ts in model, ctrl, service
// query paramsParser

// http://localhost:3000/todos?user=1&useruser=2&is_active=false

// const { query } = ctx
// typeof query.user => string, typeof query.is_active => string
// user: [1,2]

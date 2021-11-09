import { fetchAllProjects, fetchProjectById, createProject, updateProjectById, removeProjectById } from '../services/Projects.service';
import { ParameterizedContext } from 'koa';

export const fetchAllProjectsCtrl = async (ctx: ParameterizedContext ) => {
    try {
        const projects = await fetchAllProjects();
        ctx.ok(projects)
    } catch (err) {
        ctx.throw(err)
    }
    
}
export const fetchProjectByIdCtrl = async (ctx: ParameterizedContext ) => {
    const { params: {id} } = ctx;
    try {
        const project = await fetchProjectById(id);
        ctx.ok(project)
    } catch (err) {
        ctx.throw(err)
    }
}
export const createProjectCtrl = async (ctx: ParameterizedContext ) => {
    const  body = ctx.request;
    try {
        const createdProject = await createProject(body);
        ctx.ok(createdProject)
    } catch (err) {
        ctx.throw(err)
    }
}
export const updateProjectByIdCtrl = async (ctx: ParameterizedContext ) => {
    const { params: {id} } = ctx;
    const body = ctx.request;
    try {
        const updatedProject = await updateProjectById(id, body);
        ctx.ok(updatedProject)
    } catch (err) {
        ctx.throw(err)
    }
}
export const removeProjectByIdCtrl = async (ctx: ParameterizedContext ) => {
    const { params: {id} } = ctx;
    try {
        const removedProject = await removeProjectById(id);
        ctx.ok(removedProject)
    } catch (err) {
        ctx.throw(err)
    }
}
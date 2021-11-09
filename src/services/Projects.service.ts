import {ProjectsModel} from '../models/Projects.model'

export const fetchAllProjects = async () => {
    return ProjectsModel.query()
        .select(["id", "name"])
        .where({ is_active: true })
}
export const fetchProjectById = async (id: number) => {
    return ProjectsModel.query()
        .findById(id)
}
export const createProject = async (project: any) => {
    return ProjectsModel.query()
        .insertAndFetch(project)
}
export const updateProjectById = async (id: number, project: any) => {
    return ProjectsModel.query().update(project).where({id})
}
export const removeProjectById = async (id: number) => {
    //soft delete
    return ProjectsModel.query().update({is_active: false}).where({id})
    // hard delete
    return ProjectsModel.query().deleteById(id)
}
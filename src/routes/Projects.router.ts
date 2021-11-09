import * as Router from 'koa-joi-router';

import {fetchAllProjectsCtrl, fetchProjectByIdCtrl, createProjectCtrl, updateProjectByIdCtrl, removeProjectByIdCtrl} from '../controllers/Projects.controller'

const projectsRouter = Router();
projectsRouter.prefix('/projects');

projectsRouter.route({
    method: 'get',
    path: "/",
    handler: fetchAllProjectsCtrl
});
projectsRouter.route({
    method: 'get',
    path: "/:id",
    handler: fetchProjectByIdCtrl
});
projectsRouter.route({
    method: 'post',
    path: "/",
    handler: createProjectCtrl
});
projectsRouter.route({
    method: 'put',
    path: "/:id",
    handler: updateProjectByIdCtrl
});
projectsRouter.route({
    method: 'delete',
    path: "/:id",
    handler: removeProjectByIdCtrl
});

export default () => projectsRouter;
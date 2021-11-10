import * as Koa from 'koa';
import * as Router from "koa-router";
import projectsRouter from './routes/projects.router';
import { WEB_SERVER_SETTINGS } from "./constants/global";
import './knex';
import { commonMiddlewares } from './middlewares';

const app = new Koa();
const router = new Router({prefix: "/api"});

// add common middlewares

app.use(commonMiddlewares());

router.use(projectsRouter().middleware())

app.use(router.routes());

app.listen(WEB_SERVER_SETTINGS.PORT, () => {
    console.log('Server started on port', `${WEB_SERVER_SETTINGS.PORT}`);
}); 
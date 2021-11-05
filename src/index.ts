import * as Koa from 'koa';
import router from './routes';
import { WEB_SERVER_SETTINGS } from "./constants/global";
import './knex';

const app = new Koa();

app.use(router.routes());

app.listen(WEB_SERVER_SETTINGS.PORT, () => {
    console.log('Server started on port', `${WEB_SERVER_SETTINGS.PORT}`);
}); 
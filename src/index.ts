// const Koa = require('koa');
import * as Koa from 'koa';
import router from './routes/userRoutes';

const app = new Koa();

app.use(router.routes());

app.listen(4000, () => {
    console.log('Server started!')
}); 
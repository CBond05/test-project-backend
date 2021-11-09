import * as Router from "koa-router";

const usersRouter = new Router({ prefix: '/api' });

usersRouter
.get('/users', async ctx => {
    ctx.body='hello from get users route';
})
.get('/users/:id', async ctx => {
    ctx.body='hello from get users by id route';
})
.post('/users', async ctx => {
    ctx.body='hello from post user route';
})
.put('/users/:id', async ctx => {
    ctx.body='hello from update user route';
})
.delete('/users/:id', async ctx => {
    ctx.body='hello from delete user route';
});

export default usersRouter;
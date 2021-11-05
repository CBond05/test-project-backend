import * as Router from "koa-router";

const router = new Router({ prefix: '/api' });

router
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

export default router;
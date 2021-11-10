import * as Koa from "koa";

export default async (ctx: Koa.Context, next: () => Promise<any>) => {
    try {
        await next();
    } catch (err) {
        ctx.app.emit("error", err, ctx);
    }
}
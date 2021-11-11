import * as Koa from 'koa'

export default async (ctx: Koa.Context, next: () => Promise<any>) => {
    const { query } = ctx;
    console.log(query);

    const newObj: any = {};
    const keys = Object.keys(query);
    for(const key of keys){
        if(typeof(query[key]) === 'object' && query[key].length) {
            newObj[key] = [];
            for(const arrayValue of query[key]){
                if (/^\d+$/.test(arrayValue)) {
                    newObj[key].push(Number(arrayValue));
                } else if (typeof(arrayValue) === 'string') {
                    newObj[key].push(arrayValue);
                }
                  else if (arrayValue === 'true') {
                    newObj[key].push(true);
                } else if (arrayValue === 'false') {
                    newObj[key].push(false);
                } else if (arrayValue === 'undefined') {
                    newObj[key].push(undefined);
                }
            }
            console.log(newObj)
        }
    }
    await next();
}
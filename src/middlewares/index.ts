import * as cors from "koa2-cors"
import * as bodyParser from "koa-bodyparser"
// @ts-ignore
import * as respond from "koa-respond"
//@ts-ignore
import { compose } from 'koa-convert'
//@ts-ignore
import * as responseTime from "koa-response-time"
import errorHandler from "./errorHandler"
import corsOptions from "./cors.options";
import bodyParserOptions from "./bodyparser.options";
import respondOptions from "./respond.options";
import queryParamsParser from "./queryParamsParser"

const commonMiddlewares = () =>
    compose([
        queryParamsParser,
        errorHandler,
        bodyParser(bodyParserOptions),
        cors(corsOptions),
        respond(respondOptions),
        responseTime()
    ]);

export { commonMiddlewares };

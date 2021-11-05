require('dotenv').config()

interface IConfigSettings {
    host: string;
    user: string;
    port: number;
    password: string;
    database: string;
}

interface IConfig {
    [key: string]: IConfigSettings
}

const config: IConfig = {
    dev: {
        host: "localhost",
        database: "test-project-backend",
        user: "postgres",
        password: "pl12e3asd0",
        port: 5432
    }
}

export default config[process.env.NODE_ENV || "dev"]
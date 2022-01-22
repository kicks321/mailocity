import { ConnectionOptions } from 'typeorm';

// Check typeORM documentation for more information.
const config: ConnectionOptions = {
    type: 'mysql',
    host: process.env.DB_HOST, // localhost
    port: Number.parseInt(process.env.SQL_PORT), // 5432
    username: process.env.DB_USER, // databse login role username
    password: process.env.DB_PWD, // database login role password
    database: process.env.DB_NAME, // db name

    // entities name should be **.entity.ts
    entities: [__dirname + '/src/database/**/*.entity{.ts,.js}'],

    // We are using migrations, synchronize should be set to false.
    // synchronize: process.env.TYPEORM_SYNCHRONIZE
    //  ? process.env.TYPEORM_SYNCHRONIZE.toLowerCase() === 'true'
    //  : false,
    synchronize: false,

    // Run migrations automatically,
    // you can disable this if you prefer running migration manually.
    migrationsRun: false,

    logging: false,
    // logger: 'advanced-console',

    // Allow both start:prod and start:dev to use migrations
    // __dirname is either dist or src folder, meaning either
    // the compiled js in prod or the ts in dev.
    migrations: [__dirname + '/migrations/*{.ts,.js}'],
    cli: {
        // Location of migration should be inside src folder
        // to be compiled into dist/ folder.
        migrationsDir: 'src/database/migrations',
    },
};

export = config;

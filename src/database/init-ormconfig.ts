import 'dotenv/config';
import fs from 'fs';
import { resolve } from 'path';

function initOrmConfig(): void {
  const base = process.env.NODE_ENV === 'development' ? 'src' : 'dist';
  const extension = process.env.NODE_ENV === 'development' ? '.ts' : '.js';

  const ormconfig = [
    {
      name: 'default',
      type: process.env.DB_TYPE || 'postgres',
      host: process.env.DB_HOST || 'localhost',
      port: Number(process.env.DB_PORT || 5432),
      username: process.env.DB_USER || 'postgres',
      password: process.env.DB_PASSWORD || 'docker',
      database: process.env.DB_DATABASE || 'database',
      entities: [`./${base}/app/models/**/*${extension}`],
      migrations: [`./${base}/database/migrations/*${extension}`],
      cli: {
        migrationsDir: `./${base}/database/migrations`,
      },
    },
    {
      name: 'seed',
      type: process.env.DB_TYPE || 'postgres',
      host: process.env.DB_HOST || 'localhost',
      port: Number(process.env.DB_PORT || 5432),
      username: process.env.DB_USER || 'postgres',
      password: process.env.DB_PASSWORD || 'docker',
      database: process.env.DB_DATABASE || 'database',
      entities: [`./${base}/app/models/**/*${extension}`],
      migrations: [`./${base}/database/seeds/*${extension}`],
      cli: {
        migrationsDir: `./${base}/database/seeds`,
      },
    },
  ];

  fs.writeFileSync(
    resolve(__dirname, '..', '..', 'ormconfig.json'),
    JSON.stringify(ormconfig),
    { encoding: 'utf-8' },
  );
}

initOrmConfig();

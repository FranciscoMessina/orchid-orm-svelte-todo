import { appCodeUpdater } from "orchid-orm";
import path from "path";
import { rakeDb } from "rake-db";
import { fileURLToPath } from "url";


rakeDb({
   databaseURL: "postgresql://postgres:postgres@localhost:5432/elrio",
}, {
   migrationsPath: '/src/lib/server/db/migrations',
   appCodeUpdater: appCodeUpdater({
      tablePath: (tableName) => `src/lib/server/db/${tableName}.table.ts`,
      baseTableName: 'BaseTable',
      baseTablePath:'src/lib/server/db/base-table.ts',
      mainFilePath: 'src/lib/server/db/index.ts'
   })
})
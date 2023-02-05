import { createBaseTable } from "orchid-orm";


export const BaseTable = createBaseTable({
   columnTypes: (t) => ({
      ...t,
      text: (min = 3, max = 100) => t.text(min, max),
      timestamp: () => t.timestamp().asNumber()
   })
})
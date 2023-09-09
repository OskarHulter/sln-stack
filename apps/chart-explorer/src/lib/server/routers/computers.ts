import { publicProcedure, router } from "../trpc"
import { getComputers } from "@/src/lib/api/computers/queries"
export const computersRouter = router({
  getComputers: publicProcedure.query(async () => {
    return getComputers()
  }),
})

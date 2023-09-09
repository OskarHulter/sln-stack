import { getComputers } from '@/src/lib/api/computers/queries'
import { publicProcedure, router } from '../trpc'
export const computersRouter = router({
  getComputers: publicProcedure.query(async () => {
    return getComputers()
  }),
})

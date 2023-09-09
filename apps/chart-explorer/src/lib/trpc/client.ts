import { createTRPCReact } from '@trpc/react-query'

import { type AppRouter } from '@/src/lib/server/routers/_app'

export const trpc = createTRPCReact<AppRouter>({})

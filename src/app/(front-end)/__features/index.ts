import { pStore, store } from 'src/app/(front-end)/__features/_config'
import { METHOD, TOKEN_FETCH } from 'src/app/(front-end)/__features/_hooks/fetch'
import { useAppDispatch, useAppSelector } from 'src/app/(front-end)/__features/_hooks/redux'
import useInfinityQuery from 'src/app/(front-end)/__features/_hooks/useInfinityQuery'
import useQuery from 'src/app/(front-end)/__features/_hooks/useQuery'
import Auth from 'src/app/(front-end)/__features/auth'
import withAuth from 'src/app/(front-end)/__features/auth/ui/hoc/withAuth'
import Feed from 'src/app/(front-end)/__features/feed'
import User from 'src/app/(front-end)/__features/user'

const Feature = {
  store,
  pStore,
  withAuth,
  Feed,
  User,
  Auth,
  Hooks: {
    useAppSelector,
    useAppDispatch,
    useQuery,
    useInfinityQuery,
    TOKEN_FETCH,
    METHOD,
  },
}

export default Feature

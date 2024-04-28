import { pStore, store } from 'src/app/(front-end)/__features/_config'
import { useAppDispatch, useAppSelector } from 'src/app/(front-end)/__features/_hooks'
import useInfinityQuery from 'src/app/(front-end)/__features/_hooks/useInfinityQuery'
import useQuery from 'src/app/(front-end)/__features/_hooks/useQuery'
import Auth from 'src/app/(front-end)/__features/auth'
import Feed from 'src/app/(front-end)/__features/feed'
import User from 'src/app/(front-end)/__features/user'
import withAuth from 'src/app/(front-end)/__features/user/ui/hoc/withAuth'

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
  },
}

export default Feature

import { pStore, store } from 'src/app/(front-end)/__features/_config'
import useInfinityQuery from 'src/app/(front-end)/__features/_hooks/fetch/useInfinityQuery'
import useQuery from 'src/app/(front-end)/__features/_hooks/fetch/useQuery'
import { useAppDispatch, useAppSelector } from 'src/app/(front-end)/__features/_hooks/redux'
import Auth from 'src/app/(front-end)/__features/auth'
import withAuth from 'src/app/(front-end)/__features/auth/hoc/withAuth'
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
  },
}

export default Feature

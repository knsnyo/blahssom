import { pStore, store } from 'src/app/(front-end)/__features/_config'
import useInfinityQuery from 'src/app/(front-end)/__features/_hooks/custom-query/useInfinityQuery'
import useQuery from 'src/app/(front-end)/__features/_hooks/custom-query/useQuery'
import { useAppDispatch, useAppSelector } from 'src/app/(front-end)/__features/_hooks/redux'
import Action from 'src/app/(front-end)/__features/action'
import Auth from 'src/app/(front-end)/__features/auth'
import withAuth from 'src/app/(front-end)/__features/auth/_hoc/withAuth'
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
  Action,
}

export default Feature

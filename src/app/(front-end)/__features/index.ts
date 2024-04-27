import { store } from 'src/app/(front-end)/__features/_config'
import Auth from 'src/app/(front-end)/__features/auth'
import Feed from 'src/app/(front-end)/__features/feed'
import User from 'src/app/(front-end)/__features/user'
import withAuth from 'src/app/(front-end)/__features/user/ui/hoc/withAuth'

const Feature = {
  store,
  withAuth,
  Feed,
  User,
  Auth,
}

export default Feature

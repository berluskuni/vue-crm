import localizeFilter from '@/filters/localize.filter'

export default {
  'logout': localizeFilter('You are logged out'),
  'login': localizeFilter('Sign in to start'),
  'auth/user-not-found': localizeFilter('There is no user with this email'),
  'auth/wrong-password': localizeFilter('Wrong password'),
  'auth/email-already-in-use': localizeFilter('Email is already taken')
}

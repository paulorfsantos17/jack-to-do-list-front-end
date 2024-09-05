import { useCookies } from 'react-cookie'

export function useAuth() {
  const [cookies] =
    useCookies(['accessToken'])
  return !!cookies.accessToken
}

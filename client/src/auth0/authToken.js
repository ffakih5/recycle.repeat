import { useState, useEffect } from "react"
import { useAuth0 } from "@auth0/auth0-react"

const AUTH_TOKEN = "auth_token"

const getToken = () => localStorage.getItem(AUTH_TOKEN)
const setToken = token => localStorage.setItem(AUTH_TOKEN, token)
const removeToken = () => localStorage.removeItem(AUTH_TOKEN)

const useAuthToken = () => {
  const { isLoading: authIsLoading, isAuthenticated, getIdTokenClaims } = useAuth0()
  const [token, updateToken] = useState(getToken())
  useEffect(() => {
    const saveToken = async () => {
      const tokenClaims = await getIdTokenClaims()
      if (tokenClaims && !isEmpty(tokenClaims)) {
        const { __raw } = tokenClaims
        setToken(__raw)
        updateToken(__raw)
      }
    }
    if (isAuthenticated) saveToken()
    else removeToken()
  }, [isAuthenticated, getIdTokenClaims, token])

  const isLoading = authIsLoading || (!token && isAuthenticated)
  return { isLoading, token }
}

export { useAuthToken, getToken, removeToken }
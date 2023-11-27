 import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";

const Kindeauth = () => {
    const { isAuthenticated, isLoading } = useKindeBrowserClient();


  return (
    { isAuthenticated, isLoading}
  )
}

export default Kindeauth
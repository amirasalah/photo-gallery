import { useQuery } from 'react-query'

import { getUserData } from '../endpoints'

const useFetchUserData = (userName: string) => {
    return useQuery(['userData', userName], () => getUserData(userName), { enabled: !!userName })
}

export default useFetchUserData

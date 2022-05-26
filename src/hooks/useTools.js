import { useQuery } from "react-query"

const useTools = () => {
    const { data: tools, isLoading, refetch } = useQuery('alltools', () => fetch('http://localhost:5000/alltools').then(res => res.json()))


    return [tools, isLoading, refetch]
}
export default useTools
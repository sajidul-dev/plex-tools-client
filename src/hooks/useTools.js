import { useQuery } from "react-query"

const useTools = () => {
    const { data: tools, isLoading, refetch } = useQuery('alltools', () => fetch('https://hidden-ravine-83246.herokuapp.com/alltools').then(res => res.json()))


    return [tools, isLoading, refetch]
}
export default useTools
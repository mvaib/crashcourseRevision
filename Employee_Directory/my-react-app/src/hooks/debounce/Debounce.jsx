import { useEffect, useState } from 'react'

const useDebounce = (value, delay) => {
    const [debonceValue, setDebounceValue] = useState(value)
    useEffect(() => {
        const handler = setTimeout(() => {
            setDebounceValue(value)
        }, delay)

        return () => {
            clearTimeout(handler)
        }
    },[value, delay])

  return debonceValue;
}

export default useDebounce
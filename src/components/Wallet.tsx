import React, { useEffect, useState } from 'react'

import Mnemonic from './Mnemonic'
import getRandomness from '../utils/getRandomness'

const Wallet = () => {
    const [randomness, setRandomness] = useState<string>()

    useEffect(() => {
        refreshRandomness()
    }, [])

    const refreshRandomness = async () => {
        const randomness = await getRandomness()
        setRandomness(randomness)
    }

    return (
        <div>
            <h3>Randomness <button onClick={refreshRandomness}>Refresh</button></h3>
            <div>{randomness || '...'}</div>
            {randomness && <Mnemonic randomness={randomness} />}
        </div>
    )
}

export default Wallet
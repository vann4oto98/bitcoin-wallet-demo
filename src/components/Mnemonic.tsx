import React from 'react'
import * as Bip39 from 'bip39'

import MasterNode from './MasterNode'

const Mnemonic = ({ randomness }: Props) => {
    //@ts-ignore
    const mnemonic = Bip39.generateMnemonic(0, () => randomness)

    return (
        <div>
            <h3>Mnemonic</h3>
            <div role='mnemonic'>{mnemonic}</div>
            <MasterNode mnemonic={mnemonic} />
        </div>
    )
}

type Props = {
    randomness: string
}

export default Mnemonic
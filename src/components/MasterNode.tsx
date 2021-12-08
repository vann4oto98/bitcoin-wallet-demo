import React from 'react'
import * as Bitcoin from 'bitcoinjs-lib'
import * as Bip39 from 'bip39'

import Accounts from './Accounts'

const MasterNode = ({ mnemonic }: Props) => {
    const seed = Bip39.mnemonicToSeedSync(mnemonic)
    const masterNode = Bitcoin.bip32.fromSeed(seed)

    return (
        <div>
            <h3>Master Node</h3>
            <div role="masterNode">{masterNode.toBase58()}</div>
            <Accounts masterNode={masterNode.toBase58()} />
        </div>
    )
}

type Props = {
    mnemonic: string
}

export default MasterNode
import React from 'react'
import * as Bitcoin from 'bitcoinjs-lib'

const Address = ({ xpub }: Props) => {
    const chain = 0
    const addressIndex = 0
    const path = `${chain}/${addressIndex}`

    const node = Bitcoin.bip32.fromBase58(xpub).derivePath(path)
    const address = Bitcoin.payments.p2pkh({ pubkey: node.publicKey }).address

    return (
        <div>
            <h3>Address {path}</h3>
            <div>{address}</div>
        </div>
    )
}

type Props = {
    xpub: string
}

export default Address
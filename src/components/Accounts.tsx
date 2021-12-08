import React from 'react'
import * as Bitcoin from 'bitcoinjs-lib'

import Address from './Address'

const Accounts = ({ masterNode }: Props) => {
    const path = "m/44'/0'/0'"
    const xpriv = Bitcoin.bip32.fromBase58(masterNode).derivePath(path)
    const xpub = Bitcoin.bip32.fromBase58(masterNode).derivePath(path).neutered()

    return (
        <div>
            <h3>Path {path}</h3>
            <div>xpub: {xpub.toBase58()}</div>
            <br />
            <div>xpriv: {xpriv.toBase58()}</div>

            <Address xpub={xpub.toBase58()} />
        </div>
    )
}

type Props = {
    masterNode: string
}

export default Accounts
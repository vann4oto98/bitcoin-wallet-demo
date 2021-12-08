const getRandomness = async () => {
    const url = 'https://api.blockchain.info/v2/randombytes?bytes=16&format=hex'
    const res = await fetch(url)
    return await res.text()
}

export default getRandomness
const mnid = require('mnid')

console.log(mnid.isMNID('2nQtiQG6Cgm1GYTBaaKAgr76uY7iSexUkqX'))
//true

console.log(mnid.decode('2ozBQVCZwGhDsQeM7yu8sMorsqk56CQCVJh'))
//{ network: '0x1',
//address: '0x00521965e7bd230323c423d96c657db5b79d099f' }

console.log(mnid.encode({
    network: '0x1', // the hex encoded network id or for private chains the hex encoded first 4 bytes of the genesis hash
    address: '0x00521965e7bd230323c423d96c657db5b79d099f'
}))

console.log(mnid.encode(mnid.decode('2nQtiQG6Cgm1GYTBaaKAgr76uY7iSexUkqX')))
//2nQtiQG6Cgm1GYTBaaKAgr76uY7iSexUkqX
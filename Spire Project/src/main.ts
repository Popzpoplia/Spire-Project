import { g } from 'genshin-ts/runtime/core'

g.server({ id: 1073741825 }).on('whenTabIsSelected', (evt, f) => {
  console.log('combat portal activated')
})
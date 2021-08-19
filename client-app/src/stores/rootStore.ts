import ChannelStore from './channelStore'
import UserStore from './userStore'
import { createContext } from 'react'
import { configure} from 'mobx'
import CommonStore from './commonStore'
configure({ enforceActions: 'always' })
export class RootStore {
  channelStore: ChannelStore
  userStore: UserStore
  commonStore: CommonStore
  constructor()
  { 
    this.channelStore = new ChannelStore(this)
    this.userStore = new UserStore(this)
    this.commonStore = new CommonStore(this)
  }
}
export const RootStoreContext =  createContext(new RootStore())
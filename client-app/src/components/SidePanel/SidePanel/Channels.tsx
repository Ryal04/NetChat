import React, { useEffect, useContext } from 'react'
import { IChannel } from '../../../models/channels'
import { Icon, Menu} from 'semantic-ui-react'
import ChannelItem from './ChannelItem'
import ChannelForm  from './ChannelForm'
import {observer} from 'mobx-react-lite'
import { RootStoreContext } from '../../../stores/rootStore'

const Channels = () => {
  const rootStore = useContext(RootStoreContext)
  const { channels, loadChannels, showModal } = rootStore.channelStore
  useEffect(() => {
    loadChannels()
  }, [loadChannels])

  const displayChannels = (channels: IChannel[]) => {
    return (
      channels.length > 0 &&
      channels.map((channel) => (
        <ChannelItem key={channel.id} channel={channel} />
      ))
    )
  }
  
  console.log(channels)

  return (
    <React.Fragment>
      <Menu.Menu style={{ paddingBottom: '2em' }}>
        <Menu.Item>
          <span>
            <Icon name="exchange" /> CHANNELS
          </span>{' '}
          ({channels.length}){' '}
          <Icon name="add" onClick={() => showModal(true)} />
        </Menu.Item>
        {displayChannels(channels)}
      </Menu.Menu>
      <ChannelForm />
    </React.Fragment>
  )
}

export default observer(Channels)

import React, { useEffect, useContext } from 'react'
import { IChannel } from '../../../models/channels'
import { Icon, Menu} from 'semantic-ui-react'
import ChannelIten from './ChannelIten'
import ChannelForm  from './ChannelForm'
import ChannelStore from '../../../stores/ChannelStore'
import {observer} from 'mobx-react-lite'

const Channels = () => {

    const channelStore = useContext(ChannelStore)
    const {channels} = channelStore 
    
    useEffect(() => {
        channelStore.loadChannels()
    },[channelStore])   

    const displayChannels = (channels: IChannel[]) => {
      return (
        channels.length > 0 &&
        channels.map((channel) => (
          <ChannelIten key={channel.id} channel={channel} />
        ))
      );
    };

    return (
        <React.Fragment> 
            
            <Menu.Menu style = {{ paddingBottom: '2em' }}>
                <Menu.Item> 
                    <span>
                        <Icon name = "exchange"/> CHANNELS
                    </span> {' '}
                    ({channels.length}) <Icon name = "add" onClick={() => channelStore.showModal(true)}/>
                </Menu.Item>
                {displayChannels(channels)}
            </Menu.Menu>

            <ChannelForm/>

        </React.Fragment>
    )
    
}

export default observer(Channels)
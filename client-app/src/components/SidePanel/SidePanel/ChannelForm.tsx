import React,{ChangeEvent, useContext, useState} from 'react'
import { Button, Form, Icon, Input, Modal } from 'semantic-ui-react'
import { RootStoreContext } from '../../../stores/rootStore'
import { IChannel } from '../../../models/channels'
import {observer} from 'mobx-react-lite'
import {v4 as uuid} from 'uuid'

const ChannelForm: React.FC = () => {
    
    const initialChannle = {
        id: '',
        name: '',
        description: '',
    }
    const rootStore = useContext(RootStoreContext)
    const [channel, setChannel] = useState<IChannel>(initialChannle)
    const {isModalVisible, showModal, createChannel} = rootStore.channelStore

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.value);
        setChannel({...channel, [event.target.name]: event.target.value})
    }

    const handleSubmit = () => {
        let newChannel = {
            ...channel,
            id: uuid(),
        }
        createChannel(newChannel)
        showModal(false)
        
    }

    return (
        <Modal basic open = {isModalVisible}>

                <Modal.Header>
                    Add Channels
                </Modal.Header>

                <Modal.Content>
                    <Form>
                        <Form.Field>
                            <Input fluid label="Channel Name" onChange = {handleInputChange} name = "name"/>
                        </Form.Field>

                        <Form.Field>
                            <Input fluid label="Channel Description" onChange = {handleInputChange} name = "description"/>
                        </Form.Field>
                    </Form>
                </Modal.Content>

                   
                <Modal.Actions>
                    <Button color='green' inverted onClick = {handleSubmit}>
                        <Icon name='checkmark'/> Add
                    </Button>

                    <Button color='red' inverted onClick={() => showModal(false)}>
                        <Icon name='remove'/> Cancel
                    </Button>
                </Modal.Actions>
                

            </Modal>
    )
}

export default observer(ChannelForm)

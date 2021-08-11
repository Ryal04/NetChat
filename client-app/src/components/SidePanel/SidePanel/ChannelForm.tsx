import React,{ChangeEvent, useState} from 'react'
import { Button, Form, Icon, Input, Modal } from 'semantic-ui-react'
import { IChannel } from '../../../models/channels'
import {v4 as uuid} from 'uuid'


interface IProps{
    selectedModal: boolean
    closeModal: () => void
    createChannel : (channel: IChannel) => void
}

export const ChannelForm: React.FC<IProps> = ({selectedModal, closeModal, createChannel}) => {
    
    const initialChannle = {
        id: '',
        name: '',
        description: '',
    }

    const [channel, setChannel] = useState<IChannel>(initialChannle)

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
        closeModal()
    }

    return (
        <Modal basic open = {selectedModal}>

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

                    <Button color='red' inverted onClick={closeModal}>
                        <Icon name='remove'/> Cancel
                    </Button>
                </Modal.Actions>
                

            </Modal>
    )
}

export default ChannelForm

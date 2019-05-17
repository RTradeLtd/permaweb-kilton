import React from 'react'
import WidgetBot from '@widgetbot/react-embed'

const DiscordBot = (props) => (

<WidgetBot
        server="475789330380488707"
        channel="509533264206233610"
        shard="https://disweb.deploys.io"
       // shard="https://cl1.widgetbot.io"
        height="800"
        width="450"
        onAPI={api => {
                /*api.on('signIn', user => {
                console.log(`Guest signed in as ${user.name}`, user)
                api.emit('sendMessage', 'Hello world')
                })*/
        }}
/>
)
export default DiscordBot

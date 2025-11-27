import { Fragment } from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

const users = [
    {
        userName: 'midudev',
        name: 'Miguel Angel Duran',
        isFollowing: false
    },
    {
        userName: 'pheralb',
        name: 'Pablo Hernandez',
        isFollowing: true
    },
    {
        userName: 'midudev',
        name: 'Sebastian Cruz',
        isFollowing: true
    },
    {
        userName: 'sebalox92',
        name: 'Sebas Cruz',
        isFollowing: false
    },
    {
        userName: 'sebasc444',
        name: 'Sebalox Guenen',
        isFollowing: false
    },
    {
        userName: 'sebalox',
        name: 'Pablo Gomez',
        isFollowing: true
    },
    {
        userName: 'twitter',
        name: 'Official Twitter',
        isFollowing: true
    },
    {
        userName: 'instagram',
        name: 'Official Instagram',
        isFollowing: false
    }
]

export const App = () =>{
    return(
        <section className='App'>
            {
                users.map(user=>{
                    const {userName, name, isFollowing} = user
                    return (
                        <TwitterFollowCard
                            key={userName}
                            userName={userName}
                            initialIsFollowing={isFollowing}
                        >
                            {name}
                        </TwitterFollowCard>
                    )
                })
            }




            {/* <TwitterFollowCard userName="midudev" initialIsFollowing={true}>
            Miguel Angel Duran
            </TwitterFollowCard>

            <TwitterFollowCard userName="midudev" >
                Sebastian Cruz
            </TwitterFollowCard>

            <TwitterFollowCard userName="sebalox92">
                Sebastian Cruz
            </TwitterFollowCard>

            <TwitterFollowCard userName="pheralb">
                Pablo Hernandez
            </TwitterFollowCard> */}
        </section>
    )
}
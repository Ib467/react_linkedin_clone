import React from 'react'
import "./Feed.css"
import CreateIcon from "@material-ui/icons/Create"
import InputOption from './InputOption';
import ImageIcon from "@material-ui/icons/Image"
import { CalendarViewDay, EventNote, SubscriptionsRounded } from '@material-ui/icons';


function Feed() {
    return (
        <div className='feed'>
            <div className="feed__inputContainer">
                <div className="feed__input"> 
                <CreateIcon />
                <form>
                    <input type="text" />
                    <button type="submit">Send</button>
                </form>
                </div>
                <div className="feed__inputOptions">
                    <InputOption Icon={ImageIcon} title='Photo' 
                    color="#70b4f9"/> 
                    <InputOption Icon={SubscriptionsRounded} title='Event' 
                    color="#C0CBCD"/> 
                    <InputOption Icon={EventNote} title='Event' 
                    color="#70b4f9"/> 
                    <InputOption Icon={CalendarViewDay} title='Write article' 
                    color="#7FC15E"/> 

                </div>
            </div>
            {/* {posts } */}
        </div> 
    )
}

export default Feed

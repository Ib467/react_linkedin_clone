import React, {useState, useEffect} from 'react';
import "./Feed.css"
import CreateIcon from "@material-ui/icons/Create"
import InputOption from './InputOption';
import ImageIcon from "@material-ui/icons/Image"
import { CalendarViewDay, EventNote, SubscriptionsRounded } from '@material-ui/icons';
import Post from './Posts';
import { db } from './firebase';
import firebase from 'firebase';


function Feed() {
    const [ input, setInput] = useState('')
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection("posts").onSnapshot((snapshot) =>
            setPosts(
                snapshot.docs.map((doc) => ({
                    id: doc.id,
                    data: doc.data(),
                }))
            )
        );
    }, []);

    const sendPost = (e) => {
        e.preventDefault();
        db.collection('posts').add({
            name: 'Indika boteju',
            decription: 'this is a test',
            message: input,
            photoUrl: '',
            timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
        });
        setInput("");
    };

    return (
        <div className='feed'>
            <div className="feed__inputContainer">
                <div className="feed__input"> 
                <CreateIcon />
                <form>
                    <input type="text" value={input} onChange={e => setInput(e.target.value)} />
                    <button onClick={sendPost} type="submit">Send</button>
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
            {posts.map(({ id, data: {name, description, message, photoUrl}}) =>{
                <Post 
                    key ={id}
                    name={name}
                    description={description}
                    message={message}
                    photoUrl={photoUrl}
                
                />
            })}

        

        </div> 
    )
}

export default Feed

import React from 'react';
import "./Post.css";
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";
import More_logo from "@material-ui/icons/MoreHoriz";

function Post({
    displayName,
    username,
    verified,
    text,
    avatar,
    image
}) {
  return (
    <div className='post'>
        <div className='post__avatar'>
            <img src={avatar} className="post__avatarIm"/>
        </div>
        <div className='post__body'>
            <div className='post__header'>
                <div className='post__headerTest'>
                    <h3>
                        {displayName} <span className='post__headerSpecial'>
                            {verified && <VerifiedUserIcon className="post__badge" />} @{username}
                        </span>
                        <More_logo classname="post_moreOption"/> 
                    </h3> 
                </div>
                <div className='post__headerDescription'>
                    <p>{text}</p>
                </div>
            </div>
            <img src={image} />
            <div className='post__footer'>
                <ChatBubbleOutlineIcon className='post__options'/>
                <RepeatIcon className='post__options'/>
                <FavoriteBorderIcon className='post__options'/>
                <PublishIcon className='post__options'/>           
            </div>
        </div>
    </div>
  );
}

export default Post;
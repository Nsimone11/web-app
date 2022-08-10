import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './Title';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';

function preventDefault(event) {
  event.preventDefault();
}

export default function Deposits() {
  return (
    <React.Fragment>
      <h3>Online Friends</h3>
      <AvatarGroup total={9}>
      <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
      <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
      <Avatar alt="Agnes Walker" src="/static/images/avatar/3.jpg" />
       <Avatar alt="Skye Pup" src="/static/images/avatar/4.jpg" />
     
    </AvatarGroup>
      <h3>Latest Posts</h3>
      
      <div className="posts-images">
      <img className="post-image" src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60" height="50" width="50"></img>
      <img className="post-image" src="https://images.unsplash.com/photo-1550617931-e17a7b70dce2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGN1cGNha2V8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60" height="50" width="50"></img>
      <img className="post-image" src="https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" height="50" width="50"></img>

     </div>
      <h3>Recent Conversations:</h3>

      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
         Hottest Topic from Debate Differently: Is Summer Better Than Winter?
        </Link>
      </div>
    </React.Fragment>
  );
}
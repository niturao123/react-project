import React from "react";
function Profile() {
    const [loggedIn,setloggedIn] = React(1)
    return(
        <div>{loggedIn==1<h1> Welcome guest </h1>
            :loggedIn==2<h1>Open your id</h1>
            :loggedIn<h1>Thank you openging this</h1>}</div>
    )
}
export default Profile
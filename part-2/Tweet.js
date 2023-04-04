const Tweet = (props) => (
    <div class="tweet-card">
        <ul class="user-info">
            <li class="username">{props.username}</li>
            <li class="sub-header">{props.name}</li>
        </ul>
        <p class="msg">{props.msg}</p>
        <p class="sub-header">{props.date}</p>
    </div>
)
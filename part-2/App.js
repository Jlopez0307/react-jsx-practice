const App = () => (
    <div class="container">
        <Tweet 
        username="Username1"
        name="Name"
        date="Today"
        msg="First Tweet"
        />
        <Tweet 
        username="Username2"
        name="Name"
        date="Yesterday"
        msg="Second tweet"
        />
        <Tweet 
        username="Username3"
        name="Name"
        date="5 days ago"
        msg="Third Tweet"
        />
    </div>
)

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App />)
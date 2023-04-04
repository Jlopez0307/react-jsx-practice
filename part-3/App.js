const App = () => (
    <div>
        <Person 
        age="17"
        name="NotUser"
        hobbies={["Sleeping","Eating", "Watching Netflix"]}
        />
        <Person 
        age="19"
        name="OverEight"
        hobbies={["Staying up late","Collecting rocks", "Video Games"]}
        />
        <Person 
        age="50"
        name="User"
        hobbies={["Reading","Sleeping", "Going out to eat"]}
        />
    </div>
)

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App />)
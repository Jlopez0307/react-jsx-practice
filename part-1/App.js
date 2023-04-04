const App = () => (
    <div>
        <FirstComponent />
        <NamedComponent name="name"/>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App />)
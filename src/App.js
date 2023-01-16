function App() {
    const [content, setContent] = useState(false);
    const handleClick = () => {
        setContent(!content);
    };
    const ref = useRef();

    useEffect(() => {});

    return (
        <div className="App">
            <h1>tiktok</h1>
            <header className="App-header">
                <button onClick={handleClick}>toggle</button>
                {content && <Video />}
            </header>
        </div>
    );
}

export default App;

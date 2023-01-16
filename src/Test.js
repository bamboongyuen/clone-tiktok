import { useState, useEffect, useRef } from 'react';
//         Hooks
//useState   || useReducer
//useEffect  || useLayoutEffect
//useRef     || useImperativeHandle
//useCallback
//useMemo
//         HOC
//memo()
//forwardRef()

// function emitComment(id) {
//   setInterval(() => {
//     let ev = new CustomEvent(
//       `channel-${id}`, { detail: `channel-${id} : ` + Math.random()}
//     )
//     window.dispatchEvent(ev)
//   }, 2000)
// }
// emitComment(1)
// emitComment(2)

const Video = () => {
    return <video />;
};

const Input = () => {
    const [state, setState] = useState([]);
    const [input, setInput] = useState('');
    const handleType = (string) => {
        setInput(string);
    };
    const handleClick = () => {
        setState(() => [...state, input]);
    };

    return (
        <ul>
            <input onChange={(e) => handleType(e.target.value)} />
            <span>Nhap gi di</span>
            <button onClick={handleClick}>Click me!</button>
            <ol>
                {state.map((value, index) => (
                    <li key={index}>{value}</li>
                ))}
            </ol>
        </ul>
    );
};

const Radio = () => {
    const value = ['Nam', 'Nu', 'Khac'];
    const [radio, setRadio] = useState();
    const handleChange = (value) => {
        setRadio(() => value);
    };
    console.log(radio);
    return (
        <section>
            {value.map((item, index) => (
                <li key={index}>
                    <input type="radio" value={index} onChange={(e) => handleChange(e.target.value)} />
                    <span>{item}</span>
                </li>
            ))}
        </section>
    );
};

const Checkbox = () => {
    const data = ['Java', 'php', 'css html', 'javascript'];
    const [checkbox, setCheckbox] = useState([]);
    const handleChange = (value) => {
        if (checkbox.includes(value)) {
            setCheckbox(() => checkbox.filter((cur) => cur !== value));
        } else {
            setCheckbox(() => [...checkbox, value]);
        }
    };
    console.log(checkbox);
    return (
        <ul>
            {data.map((item, index) => (
                <li key={index}>
                    <input
                        type="checkbox"
                        value={item}
                        checked={checkbox.includes(item)}
                        onChange={(e) => handleChange(e.target.value)}
                    />
                    <span>{item}</span>
                </li>
            ))}
        </ul>
    );
};

const Select = () => {
    const province = ['', 'Ha noi', 'TP HCM', 'Da nang', 'Hai phong'];
    const handleChange = (e) => {
        console.log(e.target.value);
    };
    return (
        <select onChange={(e) => handleChange(e)}>
            {province.map((item, index) => (
                <option key={index} value={index}>
                    {item}
                </option>
            ))}
        </select>
    );
};

function Content() {
    const [db, setDb] = useState();
    const [tabSelect, setTabSelect] = useState('posts');
    const tabs = ['posts', 'users', 'todos'];

    const handleClick = (tab) => {
        console.log(tab);
        setTabSelect(tab);
    };

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/' + tabSelect)
            .then((response) => response.json())
            .then((db) => setDb(db))
            .catch((e) => console.log(e));
    }, [tabSelect]);

    return (
        <ul>
            {tabs.map((tab) => (
                <button key={tab} onClick={() => handleClick(tab)}>
                    {tab}
                </button>
            ))}
            {db && db.map((post) => <li key={post.id}>{post.title || post.email}</li>)}
        </ul>
    );
}

function DomEvent() {
    const [isDisplay, setIsDisplay] = useState(false);
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
            console.log(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            console.log(window.scrollY);
            setIsDisplay(window.scrollY >= 200);
        };
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div>
            <h1>{width}</h1>
            {isDisplay && (
                <button
                    style={{
                        position: 'fixed',
                        right: '20px',
                        bottom: '20px',
                    }}
                >
                    go to top
                </button>
            )}
            <h2>123</h2>
            <h2>123</h2>
            <h2>123</h2>
            <h2>123</h2>
            <h2>123</h2>
            <h2>123</h2>
            <h2>123</h2>
            <h2>123</h2>
            <h2>123</h2>
            <h2>123</h2>
            <h2>123</h2>
            <h2>123</h2>
            <h2>123</h2>
        </div>
    );
}

function Countdown2() {
    const [count, setCount] = useState(10);

    useEffect(() => {
        const timer = setInterval(() => {
            setCount((cur) => cur - 1);
        }, 1000);

        return () => {
            clearInterval(timer);
        };
    }, []);
    return <h3>{count}</h3>;
}

function ChooseFile() {
    const [pic, setPic] = useState();

    useEffect(() => {
        return () => {
            pic && URL.revokeObjectURL(pic.preview);
            console.log('clear cache');
        };
    }, [pic]);

    const handleViewUrl = (e) => {
        let file = e.target.files[0];
        file.preview = URL.createObjectURL(file);
        setPic(file);
    };

    return (
        <div>
            <p>chon anh</p>
            <input onChange={handleViewUrl} type="file" />
            {pic && <img src={pic.preview} />}
        </div>
    );
}

function Subscrible() {
    const [comment, setComment] = useState([]);
    const [channel, setChannel] = useState(1);

    useEffect(() => {
        const handleEventComment = (e) => {
            console.log(e.detail);
            setComment((comment) => [...comment, e.detail]);
        };
        window.addEventListener(`channel-${channel}`, handleEventComment);

        return () => {
            window.removeEventListener(`channel-${channel}`, handleEventComment);
        };
    }, [channel]);

    return (
        <div>
            <button
                onClick={() => {
                    channel === 1 ? setChannel(2) : setChannel(1);
                    setComment([]);
                    console.log(channel);
                }}
            >
                switch channel
            </button>
            <ul>
                {comment.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
}

function Countdown() {
    const [count, setCount] = useState(10);
    const timer = useRef();

    const handleStart = () => {
        timer.current = setInterval(() => {
            setCount((val) => val - 1);
        }, 1000);
    };
    const handleStop = () => {
        clearInterval(timer.current);
    };

    return (
        <>
            <h1>{count}</h1>
            <p>{timer.current}</p>
            <li>
                <button onClick={handleStart}>Start</button>
                <button onClick={handleStop}>Stop</button>
            </li>
        </>
    );
}

export { Input, Radio, Checkbox, Select, Content, DomEvent, Countdown, Countdown2, ChooseFile, Subscrible, Video };

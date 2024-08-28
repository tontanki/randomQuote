import React, { useEffect, useState } from 'react';

function App() {
    const [message, setMessage] = useState<string>('');

    // バックエンドのAPIにリクエストを送信する
    useEffect(() => {
        fetch('/api/data')
            .then((response) => response.json())
            .then((data) => {
                setMessage(data.message);
            });
    }, []);

    return (
        <div>
            <h1>{message}</h1>
        </div>
    );
}

export default App;

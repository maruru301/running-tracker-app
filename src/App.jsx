import './App.css';

import RecordForm from './components/RecordForm';
import RecordHeader from './components/RecordHeader';
import { useState } from 'react';

function App() {
    const [sortBy, setSortBy] = useState('date');

    return (
        <div className="running-tracker-box">
            <RecordHeader sortBy={sortBy} setSortBy={setSortBy} />
            <RecordForm sortBy={sortBy} />
        </div>
    );
}

export default App;

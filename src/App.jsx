import './App.css';

import RecordForm from './RecordForm';
import RecordHeader from './RecordHeader';

function App() {
    return (
        <div className="running-tracker-box">
            <RecordHeader />
            <RecordForm />
        </div>
    );
}

export default App;

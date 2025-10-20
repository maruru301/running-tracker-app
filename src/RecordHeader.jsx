const RecordHeader = ({ sortBy, setSortBy }) => {
    const options = [
        { key: 'date', label: '날짜' },
        { key: 'total', label: '총 거리' },
        { key: 'running', label: '러닝' },
        { key: 'walking', label: '워킹' },
        { key: 'rest', label: '휴식' },
    ];

    return (
        <header className="record-header">
            <h1>👟 Running Tracker</h1>

            <div className="sort-section">
                <span>정렬 기준</span>

                <select id="sort" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                    {options.map((opt) => (
                        <option key={opt.key} value={opt.key}>
                            {opt.label}
                        </option>
                    ))}
                </select>
            </div>
        </header>
    );
};

export default RecordHeader;

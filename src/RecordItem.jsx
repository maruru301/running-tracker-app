const RecordItem = ({ record }) => {
    const { date, running, walking, rest } = record;

    return (
        <div className="record-item">
            <div>{date}</div>
            <div>{running}</div>
            <div>{walking}</div>
            <div>{rest}</div>
            <div className="total">
                <span>{(running + walking).toFixed(1)}</span>
            </div>
            <div className="btn-section">
                <button className="btn edit-btn">수정</button>
                <button className="btn delete-btn">삭제</button>
            </div>
        </div>
    );
};

export default RecordItem;

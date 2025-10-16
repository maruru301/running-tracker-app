import RecordItem from './RecordItem';

const RecordList = ({ recordList }) => {
    return (
        <div className="record-list">
            {recordList.length === 0 ? (
                <div className="empty-message">아직 기록이 없습니다. 날짜와 거리를 입력해 첫 기록을 추가해보세요!</div>
            ) : (
                <ul>
                    {recordList.map((record, index) => (
                        <RecordItem key={index} record={record} />
                    ))}
                </ul>
            )}
        </div>
    );
};

export default RecordList;

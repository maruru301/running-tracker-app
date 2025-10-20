import RecordItem from './RecordItem';

const RecordList = ({ recordList, sortBy }) => {
    const getSortList = () => {
        const sorted = [...recordList];

        switch (sortBy) {
            case 'date':
                return sorted.sort((a, b) => new Date(b.date) - new Date(a.date));
            case 'total':
                return sorted.sort((a, b) => b.running + b.walking - (a.running + a.walking));
            case 'running':
                return sorted.sort((a, b) => b.running - a.running);
            case 'walking':
                return sorted.sort((a, b) => b.walking - a.walking);
            case 'rest':
                return sorted.sort((a, b) => b.rest - a.rest);
            default:
                return sorted;
        }
    };

    const sortedList = getSortList();

    return (
        <div className="record-list">
            {!recordList.length ? (
                <div className="empty-message">아직 기록이 없습니다. 날짜와 거리를 입력해 첫 기록을 추가해보세요!</div>
            ) : (
                <ul>
                    {sortedList.map((record, index) => (
                        <RecordItem key={index} record={record} />
                    ))}
                </ul>
            )}
        </div>
    );
};

export default RecordList;

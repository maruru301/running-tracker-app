import { useState } from 'react';

const RecordItem = ({ record, onUpdate }) => {
    const { date, running, walking, rest } = record;

    const [isEditing, setIsEditing] = useState(false); // 수정 상태
    const [editedRecord, setEditedRecord] = useState({ running, walking, rest }); // 수정할 데이터

    // 입력값 변경 시
    const onChange = (e) => {
        const { name, value } = e.target;
        setEditedRecord((prev) => ({ ...prev, [name]: Number(value) }));
    };

    // 저장 버튼 클릭 시
    const onSave = () => {
        onUpdate(date, editedRecord);
        setIsEditing(false);
    };

    return (
        <div className="record-item">
            <div>{date}</div>

            {isEditing ? (
                <>
                    <input type="number" name="running" value={editedRecord.running} onChange={onChange} step="0.1" />
                    <input type="number" name="walking" value={editedRecord.walking} onChange={onChange} step="0.1" />
                    <input type="number" name="rest" value={editedRecord.rest} onChange={onChange} />
                </>
            ) : (
                <>
                    <div>{running}</div>
                    <div>{walking}</div>
                    <div>{rest}</div>
                </>
            )}

            <div className="total">
                <span>{(running + walking).toFixed(1)}</span>
            </div>

            <div className="btn-section">
                {isEditing ? (
                    <>
                        <button className="btn save-btn" onClick={onSave}>
                            저장
                        </button>
                        <button className="btn cancel-btn" onClick={() => setIsEditing(false)}>
                            취소
                        </button>
                    </>
                ) : (
                    <>
                        <button className="btn edit-btn" onClick={() => setIsEditing(true)}>
                            수정
                        </button>
                        <button className="btn delete-btn">삭제</button>
                    </>
                )}
            </div>
        </div>
    );
};

export default RecordItem;

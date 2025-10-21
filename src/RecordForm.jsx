import Input from './components/Input';
import RecordList from './RecordList';
import { useState } from 'react';

const initRecord = {
    date: '',
    running: 0,
    walking: 0,
    rest: 0,
};

const RecordForm = ({ sortBy }) => {
    const [record, setRecord] = useState(initRecord);

    // localStorage 처리 함수
    const loadRecords = () => {
        const savedRecords = localStorage.getItem('runningRecords');
        return savedRecords ? JSON.parse(savedRecords) : [];
    };

    const saveRecords = (records) => {
        localStorage.setItem('runningRecords', JSON.stringify(records));
    };

    // localStorage에서 기록 불러오기
    const [recordList, setRecordList] = useState(loadRecords());

    // 입력값 변경 시
    const onChange = (e) => {
        const { name, value, type } = e.target;

        // type이 number면 문자열을 숫자로 변환하여 앞 0 제거
        setRecord({ ...record, [name]: type === 'number' ? Number(value) : value });
    };

    // 기록 추가
    const onSubmit = (e) => {
        e.preventDefault(); // 새로고침 방지

        // 날짜 중복 체크
        const existingRecords = recordList.filter((r) => r.date === record.date);
        if (existingRecords.length) {
            alert('같은 날짜가 이미 존재합니다.');
            setRecord(initRecord);
            return;
        }

        const newList = [...recordList, record];

        setRecordList(newList);
        saveRecords(newList); // 로컬 스토리지 저장
        setRecord(initRecord);
    };

    // 기록 수정
    const onUpdate = (date, updatedData) => {
        const newList = recordList.map((record) => {
            return record.date === date ? { ...record, ...updatedData } : record;
        });

        setRecordList(newList);
        saveRecords(newList); // 로컬 스토리지 저장
    };

    // 기록 삭제
    const onDelete = (date) => {
        const confirmMessage = window.confirm('정말 삭제하시겠습니까?'); // 사용자 확인
        if (!confirmMessage) return;

        const newList = recordList.filter((record) => record.date !== date);
        setRecordList(newList);
        saveRecords(newList); // 로컬 스토리지 저장
    };

    return (
        <div>
            <form className="form" onSubmit={onSubmit}>
                <Input type="date" id="date" name="date" label="📅 날짜" value={record.date} onChange={onChange} />
                <Input
                    type="number"
                    id="running"
                    name="running"
                    label="🏃‍➡️ 뛴 거리 (km)"
                    value={record.running}
                    onChange={onChange}
                    step={0.1}
                />
                <Input
                    type="number"
                    id="walking"
                    name="walking"
                    label="🚶‍➡️ 걸은 거리 (km)"
                    value={record.walking}
                    onChange={onChange}
                    step={0.1}
                />
                <Input
                    type="number"
                    id="rest"
                    name="rest"
                    label="🕒 쉬는 시간 (분)"
                    value={record.rest}
                    onChange={onChange}
                />

                <button className="btn" type="submit">
                    추가
                </button>
            </form>

            <RecordList recordList={recordList} sortBy={sortBy} onUpdate={onUpdate} onDelete={onDelete} />
        </div>
    );
};

export default RecordForm;

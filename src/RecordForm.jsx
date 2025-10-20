import RecordList from './RecordList';
import { useState } from 'react';

const Input = ({ type, id, name, label, value, onChange, step }) => {
    return (
        <label htmlFor={id}>
            <span>{label}</span>
            <input type={type} id={id} name={name} value={value} onChange={onChange} min={0} step={step} required />
        </label>
    );
};

const initRecord = {
    date: '',
    running: 0,
    walking: 0,
    rest: 0,
};

const RecordForm = ({ sortBy }) => {
    const [record, setRecord] = useState(initRecord);
    const [recordList, setRecordList] = useState([]);

    const onChange = (e) => {
        // console.log(e.target);
        const { name, value, type } = e.target;

        // type이 number면 문자열을 숫자로 변환하여 앞 0 제거
        setRecord({ ...record, [name]: type === 'number' ? Number(value) : value });
    };

    const onSubmit = (e) => {
        e.preventDefault(); // 새로고침 방지

        console.log(record);

        const existingRecords = recordList.filter((r) => r.date === record.date);

        if (existingRecords.length) {
            alert('같은 날짜가 이미 존재합니다.');
            setRecord(initRecord);
            return;
        }

        setRecordList([...recordList, record]);
        setRecord(initRecord);
    };

    return (
        <>
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

            <RecordList recordList={recordList} sortBy={sortBy} />
        </>
    );
};

export default RecordForm;

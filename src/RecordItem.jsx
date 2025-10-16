const RecordItem = ({ record }) => {
    const { date, running, walking, rest } = record;

    return (
        <li>
            {date} | {running}km | {walking}km | {rest}분
        </li>
    );
};

export default RecordItem;

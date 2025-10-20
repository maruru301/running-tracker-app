const RecordItem = ({ record }) => {
    const { date, running, walking, rest } = record;

    return (
        <li>
            {date} | {running}km | {walking}km | {rest}분 | 총거리 {running + walking}km
        </li>
    );
};

export default RecordItem;

import { useState } from 'react';
import FilterForm from '../components/FilterForm';
import ClassroomList from '../components/ClassroomList';

const Home = () => {
    const [day, setDay] = useState('');
    const [time, setTime] = useState('');

    const handleFilter = (day, time) => {
        setDay(day);
        setTime(time);
    };

    return (
        <div className='main'>
            <h2>Classroom Scheduler</h2>
            <FilterForm onFilter={handleFilter} />
            <ClassroomList day={day} time={time} />
        </div>
    );
};

export default Home;
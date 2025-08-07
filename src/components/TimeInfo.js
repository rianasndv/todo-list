import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTime } from '../api/timeSlice';

const TimeInfo = () => {
  const dispatch = useDispatch();
  const { data, status, error } = useSelector((state) => state.time);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchTime());
    }
  }, [status, dispatch]);

  let content;

  if (status === 'loading') {
    content = <p>Memuat waktu...</p>;
  } else if (status === 'succeeded') {
    const time = new Date(data.datetime).toLocaleTimeString('id-ID', {
        hour: '2-digit',
        minute: '2-digit'
    });
    content = (
      <div className="time-info">
        <p>Waktu di {data.timezone}: <strong>{time}</strong></p>
      </div>
    );
  } else if (status === 'failed') {
    content = <p>Error: {error}</p>;
  }

  return <div>{content}</div>;
};

export default TimeInfo;
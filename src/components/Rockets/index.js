import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getRockets } from '../../redux/Rockets';
import RocketCard from './RocketCard';
import Skeleton from '../SkeletonLoad';

const Rockets = () => {
  const rockets = useSelector((state) => state.rockets);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('done');
    dispatch(getRockets());
  }, []);

  if (rockets === 'loading') {
    return (
      <div>
        <Skeleton />
        <Skeleton />
        <Skeleton />
      </div>
    );
  }
  return (
    <section>
      <h2 className="text-gray-800 text-3xl dark:text-gray-100 p-5">Rockets</h2>
      <div className="p-5 flex flex-col gap-5">
        {rockets && rockets.map((rocket) => <RocketCard key={rocket.id + 'rocket'} rocket={rocket} />)}
      </div>
    </section>
  );
};

export default Rockets;

/* eslint-disable max-len */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { showMissions } from '../../redux/Missions';

const Missions = () => {
  const missiones = useSelector((state) => state.missions);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(showMissions());
  }, []);
  /* console.log(missiones[0].mission_id); */
  return (
    <section className="sec">
      <table className="mission">
        <tr>
          <th className="mis">Missions</th>
          <th className="des">Description</th>
          <th className="sta">Status</th>
        </tr>
        {missiones.map((el) => (
          <tr key={el.mission_id}>
            <td>{el.mission_name}</td>
            <td>{el.description}</td>
            <td className="status-btn">
              <p>NOT A MEMBER</p>
              <button type="button">Join Mission</button>
            </td>
          </tr>
        ))}
      </table>
    </section>
  );
};

export default Missions;

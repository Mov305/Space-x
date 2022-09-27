/* eslint-disable max-len */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { reserveMission } from '../../redux/Missions';

const Missions = () => {
  const missiones = useSelector((state) => state.missions);
  const dispatch = useDispatch();
  const handleMission = (id) => {
    dispatch(reserveMission(id));
  };

  return (
    <section className="sec dark:bg-slate-100/70 p-10 mx-5 rounded-xl">
      <table className="mission">
        <thead>
          <tr>
            <th className="mis">Missions</th>
            <th className="des">Description</th>
            <th className="sta">Status</th>
          </tr>
        </thead>
        <tbody>
          {missiones.map((el) => (
            <tr key={el.mission_id}>
              <td>{el.mission_name}</td>
              <td>{el.description}</td>
              <td className="status-btn">
                {!el.reserved ? (
                  <>
                    <p>NOT A MEMBER</p>
                    <button
                      className="join"
                      type="button"
                      onClick={() => {
                        handleMission(el.mission_id);
                      }}
                    >
                      JOIN MISSION
                    </button>
                  </>
                ) : (
                  <>
                    <p style={{ backgroundColor: 'lightblue' }}>ACTIVE MEMBER</p>
                    <button
                      type="button"
                      className="leave"
                      onClick={() => {
                        handleMission(el.mission_id);
                      }}
                    >
                      LEAVE MISSION
                    </button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default Missions;

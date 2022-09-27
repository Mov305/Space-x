/* eslint-disable max-len */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { showMissions, join, leave } from '../../redux/Missions';

const Missions = () => {
  const missiones = useSelector((state) => state.missions);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(showMissions());
  }, []);
  console.log(missiones, 'dsdasdadasdasd');

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
              { !el.reserved ?
                (
                  <>
                    <p>NOT A MEMBER</p>
                    <button
                      className="join"
                      type="button"
                      onClick={() => {
                        dispatch(join(el.mission_id));
                      }}
                    >
                      JOIN MISSION

                    </button>
                  </>
                )
                :
                (
                  <>
                    <p style={{ backgroundColor: 'lightblue' }}>ACTIVE MEMBER</p>
                    <button
                      type="button"
                      className="leave"
                      onClick={() => {
                        dispatch(leave(el.mission_id));
                      }}
                    >
                      LEAVE MISSION

                    </button>
                  </>
                )}
            </td>
          </tr>
        ))}
      </table>
    </section>
  );
};

export default Missions;

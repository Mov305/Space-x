import { useSelector, useDispatch } from 'react-redux';
import { reserveRocket } from '../../redux/Rockets';
import { reserveMission } from '../../redux/Missions';

const Profile = () => {
  const rockets = useSelector((state) => {
    if (state.rockets === 'loading') {
      return false;
    }
    return state.rockets.filter((el) => el.reserved);
  });
  const missions = useSelector((state) => state.missions.filter((el) => el.reserved));

  const dispatch = useDispatch();

  const handleRocket = (id) => {
    dispatch(reserveRocket(id));
  };

  const handleMission = (id) => {
    dispatch(reserveMission(id));
  };

  return (
    <section className="flex md:gap-8 p-10 flex-col md:flex-row justify-around min-h-screen ">
      <div className="overflow-hidden overflow-x-auto border border-gray-100 rounded my-6 h-fit dark:bg-slate-100/80">
        <table className="min-w-full text-sm divide-y divide-gray-200 ">
          <thead>
            <tr className="bg-gray-50">
              <th className="px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap">
                Rocket
              </th>
              <th className="px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap">
                Status
              </th>
            </tr>
          </thead>
          {rockets ? (
            rockets.map((rocket) => (
              <tbody
                className="divide-y divide-gray-100"
                key={rocket.id + 'profileRocket' + rocket.rocket_name}
              >
                <tr>
                  <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap">
                    {rocket.rocket_name}
                  </td>
                  <td className="px-4 py-2 text-gray-700 whitespace-nowrap">
                    <button
                      className="relative inline-block px-8 py-3 my-3 overflow-hidden border border-[#08ACB4] group focus:outline-none focus:ring rounded-lg"
                      type="button"
                      onClick={() => handleRocket(rocket.id)}
                    >
                      <span className="absolute inset-y-0 right-0 w-0 transition-all bg-[#08ACB4] group-hover:w-full group-active:bg-[#08ACB4]" />
                      <span className="relative text-sm font-medium text-[#08ACB4] transition-colors group-hover:text-white">
                        Cancel Reservation
                      </span>
                    </button>
                  </td>
                </tr>
              </tbody>
            ))
          ) : (
            <></>
          )}
        </table>
      </div>
      <div className="overflow-hidden overflow-x-auto border border-gray-100 rounded my-6 h-fit dark:bg-slate-100/80">
        <table className="min-w-full text-sm divide-y divide-gray-200">
          <thead>
            <tr className="bg-gray-50">
              <th className="px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap">
                Missions
              </th>
              <th className="px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap">
                Status
              </th>
            </tr>
          </thead>
          {missions ? (
            missions.map((mission) => (
              <tbody
                className="divide-y divide-gray-100"
                key={mission.mission_id + 'profileMission' + mission.mission_name}
              >
                <tr>
                  <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap">
                    {mission.mission_name}
                  </td>
                  <td className="px-4 py-2 text-gray-700 whitespace-nowrap">
                    <button
                      className="relative inline-block px-8 py-3 my-3 overflow-hidden border border-[#08ACB4] group focus:outline-none focus:ring rounded-lg"
                      type="button"
                      onClick={() => handleMission(mission.mission_id)}
                    >
                      <span className="absolute inset-y-0 right-0 w-0 transition-all bg-[#08ACB4] group-hover:w-full group-active:bg-[#08ACB4]" />
                      <span className="relative text-sm font-medium text-[#08ACB4] transition-colors group-hover:text-white">
                        Leave mission
                      </span>
                    </button>
                  </td>
                </tr>
              </tbody>
            ))
          ) : (
            <></>
          )}
        </table>
      </div>
    </section>
  );
};

export default Profile;

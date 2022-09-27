import React from 'react';
import { useDispatch } from 'react-redux';
import { reserveRocket } from '../../redux/Rockets';

function RocketCard({ rocket }) {
  const dispatch = useDispatch();

  const handleReserve = () => {
    dispatch(reserveRocket(rocket.id));
  };

  return (
    <div>
      <div className=" flex flex-col sm:flex-row border overflow-hidden border-gray-100 dark:border-gray-600 rounded-lg  shadow-lg">
        <div className="relative h-44 sm:h-auto sm:w-1/3">
          <img
            alt={rocket.name}
            src={rocket.flickr_images[0]}
            className="absolute  object-cover w-full h-full"
          />
        </div>
        <div className="px-8 py-2 sm:col-span-2 sm:w-2/3">
          <div className="flex justify-between">
            <h3 className="text-2xl dark:text-gray-50  mb-2">{rocket.rocket_name}</h3>
            {rocket.reserved ? (
              <li className="inline-block px-3 h-fit py-1 text-xs font-semibold text-white bg-[#08ACB4] rounded-full">
                Reserved
              </li>
            ) : (
              <></>
            )}
          </div>

          <h5 className="mt-4 font-bold dark:text-gray-50">{rocket.description}</h5>
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-200">{rocket.first_flight}</p>
          {!rocket.reserved ? (
            <button
              className="relative inline-block px-8 py-3 my-3 overflow-hidden border border-[#08ACB4] group focus:outline-none focus:ring rounded-lg"
              type="button"
              onClick={handleReserve}
            >
              <span className="absolute inset-y-0 left-0 w-0 transition-all bg-[#08ACB4] group-hover:w-full group-active:bg-[#08ACB4]" />
              <span className="relative text-sm font-medium text-[#08ACB4] transition-colors group-hover:text-white">
                Reserve
              </span>
            </button>
          ) : (
            <button
              className="relative inline-block px-8 py-3 my-3 overflow-hidden border border-[#08ACB4] group focus:outline-none focus:ring rounded-lg"
              type="button"
              onClick={handleReserve}
            >
              <span className="absolute inset-y-0 right-0 w-0 transition-all bg-[#08ACB4] group-hover:w-full group-active:bg-[#08ACB4]" />
              <span className="relative text-sm font-medium text-[#08ACB4] transition-colors group-hover:text-white">
                Cancel Reservation
              </span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default RocketCard;

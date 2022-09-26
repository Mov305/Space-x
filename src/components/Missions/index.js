/* eslint-disable max-len */
const Missions = () => (
  <section className="sec">
    <table className="mission">
      <tr>
        <th className="mis">Missions</th>
        <th className="des">Description</th>
        <th className="sta">Status</th>
      </tr>
      <tr>
        <td>Thaicom</td>
        <td>Thaicom is the name of a series of communications satellites operated from Thailand, and also the name of Thaicom Public Company Limited, which is the company that owns and operates the Thaicom satellite fleet and other telecommunication businesses in Thailand and throughout the Asia-Pacific region. The satellite projects were named Thaicom by the King of Thailand, His Majesty the King Bhumibol Adulyadej, as a symbol of the linkage between Thailand and modern communications technology.</td>
        <td className="status-btn">
          <p>NOT A MEMBER</p>

          <button type="button">Join Mission</button>
        </td>
      </tr>
      <tr>
        <td>Telstar</td>
        <td>Telstar 19V (Telstar 19 Vantage) is a communication satellite in the Telstar series of the Canadian satellite communications company Telesat. It was built by Space Systems Loral (MAXAR) and is based on the SSL-1300 bus. As of 26 July 2018, Telstar 19V is the heaviest commercial communications satellite ever launched, weighing at 7,076 kg (15,600 lbs) and surpassing the previous record, set by TerreStar-1 (6,910 kg/15230lbs), launched by Ariane 5ECA on 1 July 2009.</td>
        <td className="status-btn">
          <p>NOT A MEMBER</p>

          <button type="button">Join Mission</button>
        </td>
      </tr>
    </table>

  </section>
);

export default Missions;
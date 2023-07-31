import { useEffect, useState } from "react";
import axios from "axios";

const Covid = () => {

    const [dataCovid, setDataCovid] = useState([]);

    useEffect(async () => {
        let res = await axios.get('https://corona.lmao.ninja/v2/countries?yesterday&sort')
        let data = res && res.data ? res.data : [];

        setDataCovid(data)

    }, [])
    return (
        <table>
            {console.log('check', dataCovid)}
            <thead>
                <tr>
                    <th>Country</th>
                    <th>Cases</th>
                    <th>Active</th>
                    <th>Deaths</th>
                    <th>Recovered</th>
                </tr>
            </thead>
            <tbody>
                {dataCovid && dataCovid.length > 0 &&
                    dataCovid.map(item => {
                        return (
                            <tr key={item.id}>
                                <td>{item.country}</td>
                                <td>{item.cases}</td>
                                <td>{item.active}</td>
                                <td>{item.deaths}</td>
                                <td>{item.recovered}</td>
                            </tr>
                        )
                    })}

            </tbody>

        </table>

    )
}
export default Covid;
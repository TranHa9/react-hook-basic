import useFetch from "../Customize/fetch";

const Covid = () => {
    const { data: dataCovid, loading, iserror } = useFetch('https://corona.lmao.ninja/v2/countries?yesterday&sort')
    return (
        <>
            <h2>Covid-19 Các Quốc Gia:</h2>
            <table>

                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Country</th>
                        <th>Cases</th>
                        <th>Active</th>
                        <th>Deaths</th>
                        <th>Recovered</th>
                    </tr>
                </thead>
                <tbody>
                    {iserror === false && loading === false && dataCovid && dataCovid.length > 0 &&
                        dataCovid.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{item.country}</td>
                                    <td>{item.cases}</td>
                                    <td>{item.active}</td>
                                    <td>{item.deaths}</td>
                                    <td>{item.recovered}</td>
                                </tr>
                            )
                        })}
                    {loading === true &&
                        <tr>
                            <td colSpan={6} style={{ 'textAlign': 'center' }}>loading...</td>
                        </tr>
                    }
                    {iserror === true &&
                        <tr>
                            <td colSpan={6} style={{ 'textAlign': 'center' }}>error...</td>
                        </tr>
                    }
                </tbody>

            </table>
        </>

    )
}
export default Covid;
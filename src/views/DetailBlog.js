import { useParams, useHistory } from "react-router-dom";
import useFetch from "../Customize/fetch";


const DetailBlog = () => {
    let { id } = useParams();
    let history = useHistory();

    const { data: dataBlogDetail, loading, iserror } = useFetch(`https://jsonplaceholder.typicode.com/posts/${id}`)

    const hendleBackData = () => {
        history.push("/blog")
    }
    console.log('check data', dataBlogDetail)

    return (
        <>
            <div className="blog-detail">
                {dataBlogDetail &&
                    <>
                        <div>
                            Blog id: {loading === true ? 'Loangding data....' : dataBlogDetail.id}
                        </div>
                        <span>---------------------</span>
                        <div className="title" style={{ paddingtop: "20px" }}>
                            {dataBlogDetail.title}
                        </div>
                        <div className="contenr" style={{ padding: '20px' }}>
                            {dataBlogDetail.body}
                        </div>
                    </>
                }
            </div>
            <button onClick={hendleBackData}>&lt;--Back</button></>
    )
}
export default DetailBlog;
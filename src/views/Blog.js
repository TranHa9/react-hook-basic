import useFetch from "../Customize/fetch";
import "./Blog.scss";
import { Link, useHistory } from "react-router-dom";
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import AddNewBlog from "./AddNewBlog";


const Blog = () => {
    const [show, setShow] = useState(false);
    const [newData, setNewData] = useState([]);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const { data: dataBlog, loading, iserror } = useFetch('https://jsonplaceholder.typicode.com/posts')

    let history = useHistory();
    useEffect(() => {
        if (dataBlog && dataBlog.length > 0) {
            let data = dataBlog.slice(0, 9)
            setNewData(data)
        }
    }, [dataBlog]);


    const HandleAddNew = (blog) => {
        // history.push('/add-new-blog')
        let data = newData;
        data.unshift(blog);

        setShow(false);
        setNewData(data)
    }

    const deletePost = (id) => {
        let data = newData;
        data = data.filter(item => item.id !== id)
        setNewData(data)
    }
    return (
        <>

            <Button variant="primary" className="my-3" style={{ margin: "auto" }} onClick={handleShow}>
                + Add new blog
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add New Blog</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <AddNewBlog HandleAddNew={HandleAddNew} />
                </Modal.Body>
            </Modal>

            {/* <div>
                <button className="btn-add-new" onClick={HandleAddNew}>+ Add new blog</button>
            </div> */}
            <div className="blog-container">
                {loading === false && newData && newData.length > 0 && newData.map((item) => {
                    return (
                        <div className="single-blog" key={item.id}>
                            <div className="title" >{item.title}</div>
                            <div className="content" >{item.body}</div>
                            <button>
                                <Link to={`/blog/${item.id}`}>Chi tiet</Link>
                            </button>
                            <button>
                                <span onClick={() => deletePost(item.id)}>X</span>
                            </button>

                        </div>
                    )
                })}
                {loading === true &&
                    <div>Loading... </div>
                }
            </div>
        </>
    )
}
export default Blog;

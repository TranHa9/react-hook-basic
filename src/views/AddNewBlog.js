import "./Blog.scss"
import { useState } from "react";
import axios from "axios";


const AddNewBlog = (props) => {

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const hendleSubmitbtn = async () => {
        if (!title) {
            alert("miss");
            return;
        }
        if (!content) {
            alert("miss")
            return;
        }

        let data = {
            title: title,
            body: content,
            userId: 1
        }

        let res = await axios.post("https://jsonplaceholder.typicode.com/posts", data)
        if (res && res.data) {
            let newBlog = res.data;
            props.HandleAddNew(newBlog)
        }


    }
    return (
        <div className="add-new-container">
            {/* <from onSubmit={hendleSubmitbtn}> */}
            <div className="text-add-new" style={{ textAlign: "center" }}>---Add-New-Blog---</div>
            <div className="input-data">
                <label>Title:</label>
                <input type="text" value={title}
                    onChange={(event) => setTitle(event.target.value)}
                ></input>
            </div>
            <div className="input-data">
                <label>Content:</label>
                <input type="text" value={content}
                    onChange={(event) => setContent(event.target.value)}
                ></input>
            </div>
            <button className="btn-add-new" onClick={hendleSubmitbtn}>Submit</button>
            {/* <button className="btn-add-new" type="submit">Submit</button> */}
            {/* </from> */}
        </div>
    )
}
export default AddNewBlog;
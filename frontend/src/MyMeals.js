import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";


function MyMeals({addText, editText, deleteText}) {
    return(
        <div>
            <p>{addText}</p>
            <CiEdit onClick={editText}/>
            <MdDelete onClick={deleteText}/>
        </div>
    )
}

export default MyMeals;
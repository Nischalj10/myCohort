import React, {useState} from "react";
import Status from "../components/Status";
import {Button} from "react-bootstrap";
import StatusAdd from "../components/StatusAdd";
import {useSelector, useDispatch} from "react-redux";
import Task from "../models/task";
import {toast} from "react-toastify";
import {v4 as uuidv4} from 'uuid'

const Home = (props) => {

    const {status} = useSelector((state) => ({...state}))
    const [showModal, setShowModal] = useState(false);
    const [statusName, setStatusName] = useState('');
    const [labelColor, setLabelColor] = useState('');
    const [tasks, setTasks] = useState([])
    const dispatch = useDispatch();

    const handleClose = () => {
        if(statusName && labelColor){
            dispatch({
                type : 'ADD_STATUS',
                payload : {
                    statusName,
                    labelColor,
                    tasks,
                    id : uuidv4()
                }
            })
            //console.log(labelColor, statusName)
            setStatusName('')
            setLabelColor('')
            setShowModal(false)
            if(typeof Window !== undefined) {
                //work to do
                localStorage.setItem('status', JSON.stringify(status))
            }
        }
        else {
            setStatusName('')
            setLabelColor('')
            setShowModal(false)
            toast.info('Uh oh! Status not added')
        }
    }

    const addStatus = () => {
        setShowModal(true)
        setShowModal((state) => {
            console.log(state)
            return state;
        })
    }

    return (
        <>
            <div style={{justifyContent : 'center', alignItems : 'center', marginTop : 150}}>
                <Button variant={"info"} onClick={addStatus} style={{padding : 10, margin : 'auto', display :'block', width : 300, fontWeight : 'bold'}} size={"lg"}>
                    ADD STATUS
                </Button>
                <div style={{display : 'flex', flexDirection : 'row', marginTop : 50, justifyContent : status.status.length === 2 ? 'center' : 'space-evenly'}}>
                    {console.log("ROOT", statusName, labelColor)}
                    {status && status.status.map((item, index) => {
                        if(item.statusName === '') return <div> </div>
                        else return <Status status={item.name} color={item.color}/>
                    })}
                </div>
            </div>

            {showModal && <StatusAdd show={showModal}
                                     close={handleClose}
                                     name={statusName}
                                     setName={setStatusName}
                                     color={labelColor}
                                     setColor={setLabelColor}/>}
        </>
    )
}

const styles = {

}

export default Home
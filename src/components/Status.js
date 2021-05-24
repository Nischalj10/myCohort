import React, { useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import {PlusOutlined, EllipsisOutlined} from '@ant-design/icons'
import Card from "./Card";
import {Button} from "antd";
import TaskAdd from "./TaskAdd";
import {v4 as uuidv4} from 'uuid'
import {toast} from "react-toastify";

const Status = (props) => {

    const {tasks} = useSelector((state) => ({...state}))
    const dispatch = useDispatch();
    let noOfTasks = 0;
    const [showModal, setShowModal] = useState(false)
    const [taskName, setTaskName] = useState('')


    const handleClose = () => {
        if(taskName) {
            //noOfTasks = noOfTasks+1;
            dispatch({
                type : "ADD_TASK",
                payload : {
                    taskName,
                    status : props.status,
                    id : uuidv4(),
                }
            })
            setTaskName('');
            setShowModal( false);
            if(typeof Window !== undefined) {
                //work to do
                localStorage.setItem('tasks', tasks)
            }
        }
        else {
            setTaskName('')
            setShowModal( false);
            toast.info('Uh oh! Task not added')
        }
    }

    const addTask = () => {
        setShowModal(true)
        setShowModal((state) => {
            console.log(state)
            return state;
        })
    }

    const none = () => {
        toast.info('Feature to be added soon!')
    }

    return <div style={styles.container}>
        <div style={styles.header}>
            {/*{console.log("PROPS", props.color, props.status)}*/}
            <div>
            <span style={{...styles.status, backgroundColor : props.color}}> {props.status}</span>
            <span style={styles.no}>{tasks.tasks.length - 1}</span>
            </div>
            <div style={styles.buttonContainer}>
                <Button onClick={none} type={"text"}><EllipsisOutlined style={{color: 'grey'}}/></Button>
                <Button onClick={none} type={"text"}><PlusOutlined style={{color: 'grey'}}/></Button>
            </div>

        </div>
        <div>
            {tasks && tasks.tasks.map((item, index) => {
                if (item.tasksName === '') return <div></div>;
                else if (item.status !== props.status) return <div> </div>;
                else return <Card name={item.name} id={item.id}/>
            })}
        </div>

        <Button onClick={addTask} type={"text"} style={{alignItems : 'center', justifyContent :'center'}}>
            <span style={{color : 'grey', marginLeft : -11, fontWeight : 'bold'}}>Add Task</span>
        </Button>

        {showModal && <TaskAdd show={showModal} close={handleClose} name={taskName} setName={setTaskName}/>}

    </div>
}

const styles = {
    container : {
        width : 300,
        elevation : 10,
        margin: 20,

    },
    header : {
        width: 300,
        display: 'flex',
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent :'space-between',
    },
    buttonContainer : {
        display : 'inline-block',
        marginTop : 10,
    },
    status : {
        borderRadius : 10,
        padding : 5,
        textAlign : 'center',
        fontWeight : 'bold',
        fontSize : 13,
    },
    no : {
        marginLeft : 15,
        color : 'grey',
        fontSize: 20,
    }
}

export default Status
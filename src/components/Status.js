import React, {useState} from "react";
import {PlusOutlined, EllipsisOutlined} from '@ant-design/icons'
import Card from "./Card";
import {Button} from "antd";

const Status = (props) => {

    const [noOfTasks, setNoOfTasks] = useState(0)

    const addTask = () => {

    }

    return <div style={styles.container}>
        <div style={styles.header}>
            <span style={{...styles.status, backgroundColor : props.color}}> {props.status}</span>
            <span style={styles.no}>{noOfTasks}</span>

            <div style={styles.buttonContainer}>
                <Button type={"text"}><EllipsisOutlined style={{color: 'grey'}}/></Button>
                <Button type={"text"} onClick={addTask}><PlusOutlined style={{color: 'grey'}}/></Button>
            </div>

        </div>
        <div>
            <Card name={"Demo"}/>
            <Card name={"This"}/>
            <Card name={"That"}/>
        </div>

        <Button type={"text"}>
            <span><PlusOutlined style={{color: 'grey'}}/></span>
            <span style={{color : 'grey'}}>&nbsp;New</span>
        </Button>

    </div>
}

const styles = {
    container : {
        width : 300,
        elevation : 10,
        margin : 20,

    },
    header : {
        width: 300,
        flexDirection : 'row',
        alignItems : 'center',
    },
    buttonContainer : {
        display : 'inline',
        marginLeft: 110,
    },
    status : {
        borderRadius : 10,
        padding : 5,
        textAlign : 'center',
        fontWeight : 'bold',
        fontSize : 13,
    },
    no : {
        marginLeft : 5,
        color : 'grey',
        fontSize: 20,
    }
}

export default Status
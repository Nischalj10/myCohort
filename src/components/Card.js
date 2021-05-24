import React from "react";
import {useDispatch} from "react-redux";
import {DeleteOutlined} from '@ant-design/icons'

const Card = (props) => {

    const {name} = props;
    const dispatch = useDispatch()

    const deleteTask = () => {
        dispatch({
            type : "DELETE_TASK",
            payload : {
                id : props.id
            }
        })
    }


    return <div variant={'outline-light'}  style={styles.container}>
        <span style={styles.text}>{name}</span>
        <span style={styles.button}>
            <DeleteOutlined onClick={deleteTask} size={22} style={{color : 'grey'}}/>
        </span>
    </div>
}

const styles = {
    container : {
        display : 'flex',
        flexDirection : 'row',
        borderRadius : 10,
        width : 300,
        padding : 3,
        alignItems : 'center',
        justifyContent : 'space-between',
        //backgroundColor : 'white',
        borderWidth : 1.5,
        borderColor : 'grey',
        borderStyle : 'solid',
        marginTop : 5,
        marginBottom : 5,
    },
    text : {
        fontWeight : 'bold',
        fontSize : 18,
        textAlign : 'center',
        textJustify : 'center',
        padding : 5,
        color : '#484E56',
    },
    button : {
        justifyContent: 'center',
        alignItems: 'center',
        padding : 5,
        marginBottom: 3,
    }
}

export default Card


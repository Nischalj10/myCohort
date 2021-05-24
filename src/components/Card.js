import React from "react";

const Card = (props) => {

    const {name} = props;

    return <div style={styles.container}>
        <span style={styles.text}>{name}</span>
    </div>
}

const styles = {
    container : {
        display : 'flex',
        borderRadius : 10,
        width : 300,
        alignItems : 'center',
        justifyContent : 'center',
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
    }
}

export default Card
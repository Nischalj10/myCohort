import React from "react";
import Status from "../components/Status";

const Home = (props) => {
    return (
        <div style={{display : 'flex', flexDirection : 'row', justifyContent : 'space-evenly'}}>
            <Status status={"Not Started"} color={`#ffccd1`}/>
            <Status status={"In progress"} color={`#FBEECC`}/>
            <Status status={"Completed"} color={`#CCE7E1`}/>
        </div>
    )
}

const styles = {

}

export default Home
import React from 'react';

import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import ExitToApp from '@material-ui/icons/ExitToApp';
import Avatar from '@material-ui/core/Avatar';
import { withStyles } from '@material-ui/core/styles';

const AuthElements = function(props){
    const logInButton = ()=>{
        if(props.user) return (
            [<Avatar src={props.user.providerData[0].photoURL} />,(<IconButton color="inherit" onClick={props.logout}><ExitToApp /></IconButton>)]
        );

        return (<Button variant="contained" onClick={props.login}>
        Iniciar Sesión con Google
    </Button>);
    }

    return(
        <div className={props.classes.container}>
            {logInButton()}    
        </div>
    );
}

export default withStyles({
    container:{
        display: 'flex',
        flexDirection: 'row'
    }
})(AuthElements);
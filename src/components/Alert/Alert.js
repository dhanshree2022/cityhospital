import { useSnackbar } from 'notistack';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { resetAlert } from '../../redux/slice/alert.slice';

function Alert(props) {
    const dispatch = useDispatch();
    const alert = useSelector(state => state.alert);
    console.log(alert);

    const { enqueueSnackbar, closeSnackbar } = useSnackbar();

    useEffect(() => {
        if(alert.text !== ''){
            // enqueueSnackbar(alert.text, alert.color= 'success' )
            enqueueSnackbar(alert.text, {variant: alert.color});
           let resetRef = setTimeout(()=>{
                dispatch(resetAlert())
            },2000)

            return () => {
                clearTimeout(resetRef)
            }
        
        }

    }, [alert.text])

    return (
        <div>
            
        </div>
    );
}

export default Alert;
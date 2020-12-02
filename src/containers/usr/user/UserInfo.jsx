import React, {useEffect, useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom'
import { context as c } from '../../../modules/context'
import axios from 'axios'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
// import FormControlLabel from '@material-ui/core/FormControlLabel'
// import Checkbox from '@material-ui/core/Checkbox'
import Link from '@material-ui/core/Link'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'

import { userActions } from '../../../modules/usr/user/user.action'   //eslint-disable-line

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%',  // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(5, 1, 0),
    }
}))


const UserInfo = () => {
    /*
    유저 정보를 보여주고 수정 할 수 있다.
    */
    const classes = useStyles()
    const [password, setPassword] = useState()
    const [name, setName] = useState()
    const [gender, setGender] = useState()
    const [age, setAge] = useState()
    const [phone, setPhone] = useState()
    const [email, setEmail] = useState()

    const edit = (id) => {
    // 수정을 가능하게 만들어 준다.
    document.getElementById(id).disabled = false
    }

    const [data, setData] = useState([])
    const fetchOneUser = () => {
        /*
        로그인 된 유저 정보를 불러온다. 
        */
        const user_id = sessionStorage.getItem('sessionUser')
        axios.get(`${c.url}/api/user/${user_id}`)
            .then(res => {
                // alert('user_profile' + JSON.stringify(res))
                // alert('user_profile' + JSON.stringify(res.data))
                setPassword(res.data['password'])
                setName(res.data['name'])
                setGender(res.data['gender'])
                setAge(res.data['age'])
                setPhone(res.data['phone'])
                setEmail(res.data['email'])

                setData(res.data)
            })
            .catch(e => { alert(`Search failed`)
        })
    }

    useEffect(() => { fetchOneUser() }, [])

    const editConfirm = e => {
        // 유저 정보를 수정한다.
    }
}
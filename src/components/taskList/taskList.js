import { withStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import { hideFormAddAction, showFormAddAction } from '../../actions/showFormAdd';
import { addNewData, deleteTaskData, fetchDataTask, filterTask, updateTaskData } from '../../actions/task';
import { STATUS } from '../../constants';
import BoxModal from '../boxModal/boxModal';
import styles from './styles';

const TaskList = ({ updateTaskData, deleteTaskData, addNewData, classes, fetchDataTask, listTask, filterTask, showFormAdd, showFormAddAction, hideFormAddAction }) => {

    const [data, setData] = useState({
        title: '',
        description: '',
        status: null
    })

    useEffect(() => {
        fetchDataTask();
    }, [])

    // delete task 
    const handleDeleteTask = (task) => {
        toast.success('Delete Success !')
        deleteTaskData(task)
    }

    // search task
    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const handleFilterTask = (e) => {
        const { value } = e.target
        filterTask(value)
    }

    // show/hide form add
    const renderFormAdd = () => {
        setData({})
        showFormAddAction()
    }

    // add new task 

    const handleValue = (e) => {
        const { value, name } = e.target
        setData({
            ...data,
            [name]: value
        })
        if (value === 'ready') {
            setData({
                ...data,
                status: 0
            })
        }
        if (value === 'inprogress') {
            setData({
                ...data,
                status: 1
            })
        }
        if (value === 'completed') {
            setData({
                ...data,
                status: 2
            })
        }
    }

    const handleSubmitNewData = () => {
        addNewData(data)
    }

    // edit task

    const handleEditTask = (task) => {
        showFormAddAction()
        const { title, description, id, status } = task
        setData({
            ...data,
            title,
            description,
            id,
            status
        })
    }


    const handleUpdateTask = () => {
        updateTaskData(data)
    }

    return (
        <div>
            <Button onClick={renderFormAdd} className={classes.button} variant="contained" color="primary">
                <AddIcon></AddIcon>
                <span>Add New Task</span>
            </Button>
            <Grid container spacing={3}>
                {STATUS.map((label, index) => {
                    return (
                        <Grid key={index} item xs={4}>
                            <Typography variant="h5" color="textPrimary" gutterBottom>
                                {label.label}
                            </Typography>
                            <Card className={classes.shadow}>
                                {listTask
                                    .filter((task) => parseInt(task.status) === label.value)
                                    .map((task, index) =>
                                    (
                                        <div key={index} className={classes.card}    >
                                            <CardContent>
                                                <Typography className={classes.content} key={index} >
                                                    {task.title}
                                                </Typography>
                                                <Typography className={classes.content} color="textSecondary">
                                                    {task.description}
                                                </Typography>
                                            </CardContent>
                                            <CardActions className={classes.cardActions}>
                                                <Button variant="contained" color="primary" onClick={() => handleEditTask(task)} ><EditIcon></EditIcon></Button>
                                                <Button variant="contained" color="secondary" onClick={() => handleDeleteTask(task)}  ><DeleteIcon></DeleteIcon></Button>
                                            </CardActions>
                                        </div>
                                    )
                                    )}
                            </Card>
                        </Grid>
                    )
                })}
            </Grid>
            <form onSubmit={handleSubmit} className={classes.root}>
                <TextField size="small" className={classes.input} onChange={handleFilterTask} placeholder='Enter keywords' variant="outlined" />
            </form>
            <BoxModal
                data={data}
                getValue={handleValue}
                getUpdateTask={handleUpdateTask}
                getSubmitNewData={handleSubmitNewData} />
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        showFormAdd: state.showForm.showStatus,
        listTask: state.task.listTask
    }
}

export default withStyles(styles)(connect(mapStateToProps, { updateTaskData, deleteTaskData, addNewData, fetchDataTask, filterTask, hideFormAddAction, showFormAddAction })(TaskList));
import { Box, withStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { connect } from 'react-redux';
import { hideFormAddAction } from '../../actions/showFormAdd';
import styles from './styles';

const BoxModal = ({ data, classes, showFormAdd, hideFormAddAction, getValue, getUpdateTask, getSubmitNewData }) => {
    const onChangeValue = (e) => {
        getValue(e)
    }

    const closeFormAdd = () => {
        hideFormAddAction()
    }

    const onChangeUpdateTask = (e) => {
        getUpdateTask(e)
    }

    const onSubmitNewData = () => {
        getSubmitNewData()
    }

    return (
        <div >
            {showFormAdd ? (
                <div className={classes.modal}>
                    <form className={classes.formAdd} noValidate autoComplete="off">
                        <Box className={classes.display}>
                            <Box>
                                {
                                    data.id ?
                                        <Typography className={classes.content} >
                                            Edit Task
                            </Typography> :
                                        <Typography className={classes.content} >
                                            Add Task
                            </Typography>
                                }

                            </Box>
                            <Box onClick={() => hideFormAddAction()} className={classes.cursor}>
                                <span className="material-icons">
                                    clear
                        </span>
                            </Box>
                        </Box>
                        <TextField onChange={onChangeValue} className={classes.textField} label="Title" name='title' defaultValue={data.id ? data.title : ""} />
                        <TextField onChange={onChangeValue} className={classes.textField} label="Description" name='description' defaultValue={data.id ? data.description : ""} />
                        {data.id ? null : <TextField onChange={onChangeValue} className={classes.textField} label="Status" name='status' />}

                        <Box display='flex' justifyContent="flex-end">
                            <Button onClick={closeFormAdd} variant="contained" >Cancel</Button>
                            {data.id ? <Button type="reset" onClick={onChangeUpdateTask} className={classes.ml2} variant="contained" color="primary">Save</Button> :
                                <Button type='reset' onClick={onSubmitNewData} className={classes.ml2} variant="contained" color="primary">Save</Button>}
                        </Box>
                    </form>
                </div>) : null}
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        showFormAdd: state.showForm.showStatus,
    }
}

export default withStyles(styles)(connect(mapStateToProps, { hideFormAddAction })(BoxModal));
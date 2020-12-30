import { withStyles } from '@material-ui/core';
import React from 'react';
import { connect } from 'react-redux';
import loadingIcon from '../../assets/images/loadingSquare.gif';
import styles from './styles';

const GlobalLoading = ({ classes, showLoading }) => {

    let html = null

    if (showLoading) {
        html = (<div className={classes.globalLoading}>
            <img className={classes.img} src={loadingIcon} alt='loading' />
        </div>)
    }
    return html

};

const mapStateToProps = (state) => {
    return {
        showLoading: state.uiReducer.showLoading
    }
}
export default withStyles(styles)(connect(mapStateToProps)(GlobalLoading));
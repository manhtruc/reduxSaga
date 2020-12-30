const styles = () => ({
    modal: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0,0,0,.5)'
    },

    formAdd: {
        position: 'absolute',
        right: 0,
        left: 0,
        top: '40%',
        margin: 'auto',
        zIndex: 10,
        backgroundColor: 'white',

        border: '1px solid black',
        borderRadius: 7,
        width: 400,
        padding: 20,
        marginTop: 20,
        boxShadow: '3px 3px 10px 1px #000000'
    },

    cursor: {
        cursor: 'pointer'
    },
    display: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    ml2: {
        marginLeft: 10,
        backgroundColor: '#006600'
    },
    textField: {
        display: 'block',
        marginBottom: 10
    },
    content: {
        textTransform: "capitalize "
    },

})

export default styles;
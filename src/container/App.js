import { ThemeProvider, withStyles } from '@material-ui/core';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import theme from '../commons/theme/theme';
import GlobalLoading from '../components/globalLoading/globalLoading';
import TaskList from '../components/taskList/taskList';
import styles from './style';


function App(props) {

  return (
    <div>
      <ThemeProvider theme={theme}>
        {/* <Header /> */}
        <TaskList />
        <ToastContainer
          autoClose={1500}
        />
        <GlobalLoading />
      </ThemeProvider>
    </div >
  );
}

export default withStyles(styles)(App);

import React from 'react';

import { BrowserRouter , Route , Switch , Link ,NavLink} from 'react-router-dom';
import ExpenseDashBoardPage from '../components/ExpenseDashBoardPage';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import HelpPage from '../components/HelpPage';
import NotfoundPage from '../components/NotFoundPage';
import Header from '../components/Header';



const AppRouter = ()=>(
    <BrowserRouter>
    <div>
    <Header />
    <Switch>
    <Route path="/" component={ExpenseDashBoardPage
    } exact={true}/>
    <Route path="/create" component={AddExpensePage} exact={true} />
    <Route path="/edit/:id" component={EditExpensePage} exact={true}/>
    <Route path="/help" component={HelpPage}/>
    <Route component={NotfoundPage}/>

    </Switch>
    </div>
    
    </BrowserRouter>

);
 

export default AppRouter;
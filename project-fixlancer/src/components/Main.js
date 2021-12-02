import React from "react";
import ReactDom from "react-dom";
import chatbody from "./Chat/chatBody/Chat1"
import OrderFix from "./Chat/chatContent/Chat3"
import Orderchat from "./Chat/chatContent/Chat2"
import Home from "./website/Home"
import Hometwo from "./website/Hometwo"
import Filter from "./website/Filter"
import Login from "./website/Login"
import Register from "./website/Register"
import view from "./website/Viewfix"
import searchfix from "./website/Searchfix"
import Categorylist from "./website/Categorylist"
import Mangesale from "./website/Managesale"
import Mangeorder from "./website/Manageorder"
import Faq from "./website/Faq"
import Allrequest from "./website/Allrequest"
import Sendoffer from "./website/Sendoffer"
import Jobreqbuy from "./website/Jobrequestbuyer"
import Jobreqseller from "./website/Jobrequestseller"
import Orderdetail1 from "./website/Orderdetail1"
import Orderdetail2 from "./website/Orderdetail2"
import Finance from "./website/Finance"
import History from "./website/History"
import Widthdraw from "./website/Widthdraw"
import Notification from "./website/Notification"
import Editoffer from "./website/Editoffer"
import Createfix from "./website/Createfix"
import Createfixs from "./website/Createfixs"
import Myrequest from "./website/Myrequest"
import Loader from "./website/Loader"

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
export default class Main extends React.Component{
    render(){
        return(
            <div>
                <Router>
                    <div>
                <Switch>
                    <Route exact path="/chatbody" component={chatbody} />
                    <Route exact path="/Orderchat" component={Orderchat} />
                    <Route exact path="/OrderFix" component={OrderFix} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/register" component={Register} />
                    <Route exact path="/" component={Home} />
                    <Route exact path="/hometwo" component={Hometwo} />
                    <Route exact path="/filter" component={Filter} />
                    <Route exact path="/view" component={view} />
                    <Route exact path="/searchfix" component={searchfix} />
                    <Route exact path="/Categorylist" component={Categorylist} />
                    <Route exact path="/Mangesale" component={Mangesale} />
                    <Route exact path="/Mangeorder" component={Mangeorder} />
                    <Route exact path="/Faq" component={Faq} />
                    <Route exact path="/Allrequest" component={Allrequest} />
                    <Route exact path="/Myrequest" component={Myrequest} />
                    <Route exact path="/Sendoffer" component={Sendoffer} />
                    <Route exact path="/Jobreqbuy" component={Jobreqbuy} />
                    <Route exact path="/Jobreqseller" component={Jobreqseller} />
                    <Route exact path="/Orderdetail1" component={Orderdetail1} />
                    <Route exact path="/Orderdetail2" component={Orderdetail2} />
                    <Route exact path="/Finance" component={Finance} />
                    <Route exact path="/History" component={History} />
                    <Route exact path="/Widthdraw" component={Widthdraw} />
                    <Route exact path="/Notification" component={Notification} />
                    <Route exact path="/Editoffer" component={Editoffer} />
                    <Route exact path="/Createfix" component={Createfix} />
                    <Route exact path="/Createfixs" component={Createfixs} />
                    <Route exact path="/Loader" component={Loader} />
             </Switch>
                </div> 

                </Router>
            </div>
        )
    }
}
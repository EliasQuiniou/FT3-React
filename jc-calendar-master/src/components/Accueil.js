import React, { Component } from 'react';
import { DateTime } from 'luxon';
import { connect } from 'react-redux';
import { setMonth } from '../actions/ui/month';
import { getMonth } from '../selectors/ui/month';
import AppHeader from './AppHeader';
import MonthlyCalendar from './calendar/MonthlyCalendar';
import ReminderContainer from './reminders/ReminderContainer';
import ac1 from './img/ac1.png';
import ac2 from './img/ac2.png';
import {Link} from 'react-router-dom';

function Accueil(){
    return(
        <div>
            <a>Salut Emma</a>

            <img src={ac1} />

            <Link to ="/page1"> <img src={ac2} /></Link>
           
        </div>
    )
}

export default Accueil;

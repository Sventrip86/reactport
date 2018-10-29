import React from 'react';
import { scroller } from 'react-scroll';

import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Home from '@material-ui/icons/Home';
import Person from '@material-ui/icons/Person';
import Computer from '@material-ui/icons/Computer';
import Contacts from '@material-ui/icons/Contacts';
import Edit from '@material-ui/icons/Edit';




const Sidebar = (props) => {

    const scrollToElement = (element) => {

            scroller.scrollTo(element,{
                duration:1500,
                delay:100,
                smooth:true,
                offset:-150
            });
            props.onClose(false)

    }



    return(
        <Drawer
            anchor="right"
            open={props.open}
            onClose={() => props.onClose(false)}
            >

            <List component="nav">
               
                <ListItem button onClick={() => scrollToElement('home')}>
                <Home className="icone"/> HOME
                </ListItem>
                <ListItem button onClick={() => scrollToElement('About')}>
                <Person className="icone"/> ABOUT
                </ListItem>
                <ListItem button onClick={() => scrollToElement('works')}>
                <Computer className="icone"/> WORKS
                </ListItem>
                <ListItem button onClick={() => console.log('blog')}>
                <Edit className="icone"/> BLOG
                </ListItem>
                <ListItem button onClick={() => console.log('contacts')}>
                <Contacts className="icone"/> CONTACTS
                </ListItem>
            </List>
        </Drawer>
    );
};

export default Sidebar;
import React, { Component } from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';

import Sidebar from './sidebar';
import { List, ListItem } from '@material-ui/core';



class Header extends Component {

    state ={
        drawerOpen: false,
        headerShow: false
    }

    componentDidMount(){
        window.addEventListener('scroll', this.handleScroll);
    }


    handleScroll = () =>{
        if(window.scrollY > 0){
            this.setState({
                headerShow: true
            })

        }else {
            this.setState({
                headerShow: false

            })
        }
    }
    
    toggleDrawer = (value) => {
        this.setState({
            drawerOpen: value
        })
    }
        

    render() {
        return (
            <AppBar
                position="fixed"
                style={{
                    background:this.state.headerShow ? '#2f2f2f' : 'transparent',
                    boxShadow: 'none'
                }}
            >
                <Toolbar>
                    
                    <div className="header_logo">
                        <div className="font_righteous header_logo_venue">Fab's</div>
                        <div className="header_logo_title">portfolio</div>
                    </div>
                    <IconButton
                        aria-label="Menu"
                        color="inherit"
                        onClick={() => this.toggleDrawer(true)}
                    >
                    <MenuIcon/>
                    
                </IconButton>
                
                <Sidebar
                open={this.state.drawerOpen}
                onClose={(value) => this.toggleDrawer(value)}
                >

                    <List >
                        <ListItem >

                        </ListItem>
                    
                    </List>


                </Sidebar>


                </Toolbar>
                
                
            </AppBar>
        ); 

    }
}


export default Header;
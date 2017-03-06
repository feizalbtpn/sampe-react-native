/**
 * Created by feizal on 3/6/17.
 */

'use strict';

import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import NavigationBar from 'react-native-navbar'

class NavBarBase extends Component {
    onPrev() {
        var Actions = this.props.routes;
        if (this.props.onPrev) {
            this.props.onPrev();
            return;
        }
        if (this.props.navigator && this.props.navigator.getCurrentRoutes().length > 1) {
            Actions.pop();
        }
    }

    render() {
        console.log("Props : " + this.props);
        return <NavigationBar
                    style={styles.navBar}
                    titleColor='white'
                    buttonsColor='white'
                    statusBar={{style:'default', hidden: false, tintColor: '#F8F8F8'}}
                    title={{title:this.props.title}}
                    prevTitle={this.props.initial ? " " : null}
                    leftButton={this.props.leftButton ? this.props.leftButton : {title:''}}
                    rightButton={this.props.rightButton ? this.props.rightButton : {title:''}}/>
    }
}
class NavBar extends Component {
    render() {
        const Actions = this.props.routes;
        if (this.props.onPrev) {
            return <NavBarBase
                customNext={<View/>} {...this.props}
                leftButton={{title:'Back', handler:() => this.props.navigator.pop()}}/>
        } else {
            return <NavBarBase
                customNext={<View/>} {...this.props}/>
        }
    }
}


class NavBarModal extends React.Component {
    render() {
        const Actions = this.props.routes;
        return <NavBarBase
                    customPrev={<View/>}
                    nextTitle="Close" {...this.props}
                    rightButton={{title:'Close', handler:this.props.onNext || Actions.pop}}/>
    }
}

const styles = {
    navBar: {
        backgroundColor: '#F8F8F8',
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderColor: '#8E8E8E',
    },
};

module.exports = {NavBar, NavBarModal};
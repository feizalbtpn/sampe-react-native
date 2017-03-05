/**
 * Created by feizal on 3/5/17.
 */

import React from 'react';
import NavigationBar from 'react-native-navbar';
import { View } from 'react-native';


export default function CustomNavigationBar(props) {
    const { titleConfig, rightButtonConfig } = props;
    return (
        <NavigationBar
            title={titleConfig}
            rightButton={rightButtonConfig}
            containerStyle={styles.container}
        />
    );
}

const styles = {
    container: {
        borderBottomColor: 'black',
        borderBottomWidth: 0.4,
    }
};


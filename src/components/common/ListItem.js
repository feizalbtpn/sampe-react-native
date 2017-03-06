import React from 'react';
import { View } from 'react-native';

export const ListItem = (props) => {
    return (
        <View style={[styles.containerStyle, props.style]}>
            {props.children}
        </View>
    );
};

const styles = {
    containerStyle: {
        marginTop: 10,
        paddingBottom: 10,
        marginLeft: 15,
        backgroundColor: 'transparent',
    }
};

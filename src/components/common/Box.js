import React from 'react';
import { View, StyleSheet } from 'react-native';

export const Box = (props) => {
    return (
        <View style={[styles.container, props.style]}>
            {props.children}
        </View>
    );
};

const styles = {
    container: {
        borderTopWidth: StyleSheet.hairlineWidth,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderColor: '#8E8E8E',
    }
};

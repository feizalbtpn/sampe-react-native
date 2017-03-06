import React from 'react';
import { View, StyleSheet } from 'react-native';

export const BoxSection = (props) => {
    return (
        <View style={[styles.containerStyle, props.style]}>
            {props.children}
        </View>
    );
};

const styles = {
    containerStyle: {
        padding: 5,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        position: 'relative',
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderColor: '#8E8E8E',
    }
};

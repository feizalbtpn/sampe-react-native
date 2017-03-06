import React from 'react';
import { View, Text } from 'react-native';

export const TextLabelView = (props) => {
    const { label, children, style } = props;
    return (
        <View style={[styles.container, style]}>
            <Text style={styles.label}>{label}</Text>
            <View>{children}</View>
        </View>
    );
};

const styles = {
    container: {
        flex: 1,
        flexDirection: 'row',
        padding: 10,
    },
    label: {
        minWidth: 100,
    },
};

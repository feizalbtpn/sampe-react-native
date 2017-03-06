import React from 'react';
import { View, Text } from 'react-native';

export const TextLabelValue = (props) => {
    const { label, value, valueView, style } = props;
    if (valueView) {
        return (
            <View style={[styles.container, style]}>
                <Text style={styles.label}>{label}</Text>
                <Text style={styles.value}>{valueView}</Text>
            </View>
        );
    } else {
        return (
            <View style={[styles.container, style]}>
                <Text style={styles.label}>{label}</Text>
                <Text style={styles.value}>{value}</Text>
            </View>
        );
    }
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
    value: {
        fontWeight: 'bold',
    }
};

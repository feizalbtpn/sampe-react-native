import React from 'react';
import { View, Text } from 'react-native';

const TextLabelValue = ({ label, value }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <Text style={styles.value}>{value}</Text>
        </View>
    );
};

const styles = {
    container: {
    },
    label: {

    },
    value: {

    }
};

export default TextLabelValue;

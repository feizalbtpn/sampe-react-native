import React from 'react';
import { View } from 'react-native';

const Card = (props) => {
    return (
        <View style={styles.containerStyle}>
            {props.children}
        </View>
    );
};

const styles = {
    containerStyle: {
        borderBottomWidth: 0.2,
        borderBottomColor: 'black',
        marginTop: 10,
        paddingBottom: 10,
        marginLeft: 15,
    }
};

export default Card;

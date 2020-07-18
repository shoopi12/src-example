import React from 'react';
import { View, StyleSheet } from 'react-native';
import { colors } from '../../resources';

export const Container = (props) => {

    return (
        <View style={[styles.container, props.style]}>
            {props.children}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
    }
});

import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, Button } from 'react-native';
import { strings } from '../../../resources';
import { useSelector } from 'react-redux'
import { styles } from './HomeStyle';

export const Home = ({ navigation }) => {

    const lang = useSelector(state => state.lang);

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.textMain}>{strings[lang].homeScreen}</Text>
            <Button title={strings[lang].toLogin} onPress={() => navigation.goBack()} />
        </SafeAreaView>
    );
};

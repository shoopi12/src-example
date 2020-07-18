import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, Button } from 'react-native';
import { strings } from '../../../resources';
import { useSelector } from 'react-redux'
import { styles } from './LoginStyle';

export const Login = ({ navigation }) => {

    const lang = useSelector(state => state.lang);

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.textMain}>{strings[lang].loginScreen}</Text>
            <Button title={strings[lang].toHome} onPress={() => navigation.navigate('Home')} />
        </SafeAreaView>
    );
};

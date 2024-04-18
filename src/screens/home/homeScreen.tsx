import { useTheme } from 'native-base';
import React, { FC } from 'react';
import { View } from 'react-native';
import { PrimaryInput, UserList } from '../../components';
import { styles_ } from './styles';

const HomeScreen: FC = () => {
    const theme = useTheme();
    const styles = styles_(theme)


    return (
        <View style={styles.main}>
            <PrimaryInput />
            <UserList />
        </View>
    )
}

export default HomeScreen

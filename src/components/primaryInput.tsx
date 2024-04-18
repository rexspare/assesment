import { Box, Button, Icon, Input, useTheme } from "native-base";
import React, { FC } from 'react';
import { StyleSheet } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/EvilIcons';
import { useDispatch, useSelector } from 'react-redux';
import { reduxType } from '../models/app';
import { searchUserByName, setSearchValue } from '../store/action';

interface primaryInputProps {

}

const PrimaryInput: FC<primaryInputProps> = () => {
    const { colors } = useTheme()
    const name = useSelector((state: reduxType) => state.searchVal)

    const dispatch = useDispatch();

    const handleSubmit = () => {
        dispatch(searchUserByName());
    };

    const setName = (txt: string) => {
        dispatch(setSearchValue(txt));
    }

    return (
        <Box alignItems="center" p={'3'}>
            <Input
                w="100%"
                InputLeftElement={
                    <Icon
                        as={<MaterialIcons name="search" />}
                        size={5} ml="2"
                        color="muted.400" />}

                InputRightElement={
                    <Button
                        size="xs"
                        rounded="none"
                        w="1/4"
                        h="full"
                        onPress={handleSubmit}
                    >
                        Search
                    </Button>}
                placeholder="User name"
                placeholderTextColor={colors.white}
                color={colors.white}
                value={name}
                onChangeText={setName}
            />
        </Box>
    )
}

export default PrimaryInput

const styles = StyleSheet.create({})
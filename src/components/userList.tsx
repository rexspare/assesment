import { AlertDialog, Box, Button, FlatList, HStack, Heading, IconButton, Text } from 'native-base';
import React, { FC, useEffect, useRef, useState } from 'react';
import { StyleSheet, } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useDispatch, useSelector } from 'react-redux';
import { User, reduxType } from '../models/app';
import { showLowestRankedUsers } from '../store/action';

const UserList: FC = () => {
    const searchResult = useSelector((state: reduxType) => state.searchResult)
    const showLowestRanked = useSelector((state: reduxType) => state.showLowestRanked)
    const dispatch = useDispatch()
    const headings = ["Name", "Rank", "Bananas"]
    const [isOpen, setIsOpen] = useState(false);
    const [choneSort, setchoneSort] = useState(false)
    const cancelRef = useRef(null);
    const onClose = () => setIsOpen(false);

    useEffect(() => {
        if (searchResult === false && showLowestRanked === false) {
            setIsOpen(true)
        }
    }, [searchResult])

    const getData = () => {
        return showLowestRanked ? (searchResult ? searchResult : []) :
            (searchResult ? searchResult : []).sort((a: User, b: User) => choneSort ?
                a.name.localeCompare(b.name) : a?.rank - b?.rank)
    }

    return (
        <Box>

            <HStack justifyContent={'space-between'} pr={["5", "5"]} pl={["5", "5"]}>
                <IconButton size={'md'} variant='outline' _icon={{
                    as: FontAwesome,
                    name: "angle-double-down",
                }}
                    onPress={() => dispatch(showLowestRankedUsers())}
                />

                <IconButton size={'md'} variant='solid' _icon={{
                    as: FontAwesome,
                    name: choneSort ? "sort-alpha-asc" : "sort-numeric-asc"
                }}
                    onPress={() => showLowestRanked === false && setchoneSort(!choneSort)}
                />
            </HStack>

            <HStack space={[1, 1]} justifyContent="space-between" pl={["5", "5"]} pr={["5", "5"]}>
                {
                    headings.map((x, index) => (
                        <Heading key={index} fontSize="xl" p="4" pb="3" color={'white'} style={styles.txt}>
                            {x}
                        </Heading>
                    ))
                }
            </HStack>

            <FlatList
                data={getData() ? getData() : []}
                keyExtractor={item => item.uid}
                renderItem={({ item }) => <Box borderBottomWidth="1" borderColor='gray.400' pl={["5", "5"]} pr={["5", "5"]} py="2">
                    <HStack space={[1, 1]} justifyContent="space-between">
                        <Text style={styles.txt} color={item?.matched ? "red.500" : "white"} >
                            {item.name || "No Name"}
                        </Text>
                        <Text style={styles.txt} color={item?.matched ? "red.500" : "white"}  >
                            {item.rank}
                        </Text>
                        <Text style={styles.txt} color={item?.matched ? "red.500" : "white"} >
                            {item.bananas}
                        </Text>
                    </HStack>
                </Box>} />

            <AlertDialog leastDestructiveRef={cancelRef} isOpen={isOpen} onClose={onClose}>
                <AlertDialog.Content>
                    <AlertDialog.Body>
                        This user name does not exist! Please specify an existing user name!
                    </AlertDialog.Body>
                    <Button colorScheme="danger" onPress={onClose}>
                        OK
                    </Button>
                </AlertDialog.Content>
            </AlertDialog>
        </Box>
    )
}

export default UserList

const styles = StyleSheet.create({
    txt: {
        flex: 1,
        textAlign: 'center'
    }
})
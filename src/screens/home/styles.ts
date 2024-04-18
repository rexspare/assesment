import { Theme } from "native-base";
import { StyleSheet } from "react-native";

const styles_ = (theme: Theme) => StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: theme.colors.gray[800]
    }
})

export { styles_ }
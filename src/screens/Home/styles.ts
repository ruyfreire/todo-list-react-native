import { StyleSheet } from "react-native";
import { theme } from "../../theme/default";

export const classes = StyleSheet.create({
    window: {
        flex: 1,
        backgroundColor: theme.color.gray600,
    },
    container: {
        paddingHorizontal: theme.sizes.xl,
    }
})
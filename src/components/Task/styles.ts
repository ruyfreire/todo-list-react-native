import { StyleSheet } from "react-native";
import { theme } from "../../theme/default";

export const classes = StyleSheet.create({
    container: {
        flexDirection: 'row',
        gap: 8,
        alignItems: 'center',
        width: '100%',
        backgroundColor: theme.color.gray500,
        padding: theme.sizes.sm,
        borderRadius: 8,
        marginBottom: 8,
    },
    text: {
        color: theme.color.gray100,
        fontSize: theme.font.size.regular,
        lineHeight: theme.font.height.regular,
        flex: 1,
    },
    buttonDelete: {
        padding: theme.sizes.xs,
        borderRadius: 4,
    }
})
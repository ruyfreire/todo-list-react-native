import { StyleSheet } from "react-native";
import { theme } from "../../theme/default";

export const classes = StyleSheet.create({
    container: {
        borderTopWidth: 1,
        borderColor: theme.color.gray400,
        paddingHorizontal: theme.sizes.lg,
        paddingVertical: 48,
    },
    image: {
        alignItems: 'center',
        marginBottom: theme.sizes.md,
    },
    title: {
        color: theme.color.gray300,
        fontWeight: '700',
        textAlign: 'center',
    },
    subtitle: {
        color: theme.color.gray300,
        textAlign: 'center',
    }
})
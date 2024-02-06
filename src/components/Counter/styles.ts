import { StyleSheet } from "react-native";
import { theme } from "../../theme/default";

export const classes = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 20,
    },
    counterContainer: {
        flexDirection: 'row',
        gap: 8,
    },
    boxNumber: {
        backgroundColor: theme.color.gray400,
        paddingHorizontal: 8,
        paddingVertical: 2,
        fontWeight: '700',
        fontSize: 12,
        borderRadius: 99,
    },
    boxText: {
        fontWeight: '700',
    },
})
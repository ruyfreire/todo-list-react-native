import { Text, View } from 'react-native';
import { theme } from '../../theme/default';
import { classes } from './styles';

interface CounterProps {
    tasksDone: number;
    totalTasks: number;
}

export function Counter({ tasksDone, totalTasks }: CounterProps) {
    return (
        <View style={classes.container}>
            <View style={classes.counterContainer}>
                <Text
                    style={{
                    ...classes.boxText,
                    color: theme.color.blue
                    }}
                >Criadas</Text>

                <Text
                    style={{
                    ...classes.boxNumber,
                    color: theme.color.gray200
                    }}
                >{totalTasks}</Text>
            </View>

            <View style={classes.counterContainer}>
                <Text
                    style={{
                    ...classes.boxText,
                    color: theme.color.purple
                    }}
                >Concluídas</Text>

                <Text
                    style={{
                    ...classes.boxNumber,
                    color: theme.color.gray200,
                    }}
                >{tasksDone}</Text>
            </View>
        </View>
    );
}

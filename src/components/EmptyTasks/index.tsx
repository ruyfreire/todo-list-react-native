import { Image, Text, View } from 'react-native';
import { classes } from './styles';

export function EmptyTask() {
    return (
        <View style={classes.container}>
            <View style={classes.image}>
                <Image source={require('../../../assets/clipboard.png')} />
            </View>

            <Text style={classes.title}>
                Você ainda não tem tarefas cadastradas
            </Text>

            <Text style={classes.subtitle}>
                Crie tarefas e organize seus itens a fazer
            </Text>
        </View>
    );
}

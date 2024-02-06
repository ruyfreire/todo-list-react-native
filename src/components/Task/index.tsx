import { Image, Text, TouchableOpacity } from 'react-native';
import { Checkbox } from 'react-native-paper';
import { classes } from './styles';

interface TaskProps {
    task: {
        id: string;
        text: string;
        done: boolean;
    }
    onDelete: (id: string) => void;
    onToggleDone: (id: string) => void;
}

export function Task({ task, onToggleDone, onDelete }: TaskProps) {
    return (
        <TouchableOpacity style={classes.container}>
            <Checkbox
                status={task.done ? 'checked' : 'unchecked'}
                onPress={() => onToggleDone(task.id)}
            />

            <Text style={classes.text}>{task.text}</Text>

            <TouchableOpacity
                style={classes.buttonDelete}
                onPress={() => onDelete(task.id)}
            >
                <Image source={require('../../../assets/trash.png')} />
            </TouchableOpacity>
        </TouchableOpacity>
    );
}

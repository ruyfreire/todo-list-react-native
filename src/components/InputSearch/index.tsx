import { Image, TextInput, TouchableOpacity, View } from 'react-native';
import { theme } from '../../theme/default';
import { useState } from 'react';
import { classes } from './styles';

interface InputSearchProps {
    onAddTask: (text: string) => void;
}

export function InputSearch({ onAddTask }: InputSearchProps) {
    const [text, setText] = useState('')

    const handleAddTask = () => {
        onAddTask(text)
        setText('')
    }

    return (
        <View style={classes.container}>
            <TextInput
                style={classes.input}
                value={text}
                onChangeText={setText}
                placeholderTextColor={theme.color.gray300}
                placeholder="Adicione uma nova tarefa"
            />

            <TouchableOpacity
                style={classes.buttonAdd}
                onPress={handleAddTask}
            >
                <Image source={require('../../../assets/plus.png')} />
            </TouchableOpacity>
        </View>
    );
}

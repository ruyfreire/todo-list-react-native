import { Alert, FlatList, View } from 'react-native';
import { Task } from '../../components/Task';
import { EmptyTask } from '../../components/EmptyTasks';
import { Counter } from '../../components/Counter';
import { InputSearch } from '../../components/InputSearch';
import { Header } from '../../components/Header';
import { useState } from 'react';
import { classes } from './styles';

interface Task {
    id: string;
    text: string;
    done: boolean;
}

export function Home() {
    const [tasks, setTasks] = useState<Task[]>([])

    const handleAddTask = (text: string) => {
        const isTaskExists = tasks.findIndex(task => task.text.toLowerCase() === text.toLowerCase())
        if (isTaskExists !== -1) {
            Alert.alert('Atenção', 'Tarefa já cadastrada')
            return
        }

        setTasks(state => ([...state, {
            id: Math.random().toString(36).slice(2),
            text: text,
            done: false
        }]))
    }

    const handleDeleteTask = (id: string) => {
        Alert.alert('Atenção', 'Deseja realmente excluir esta tarefa?', [
            {
                text: 'Cancelar',
                style: 'cancel'
            },
            {
                text: 'Excluir',
                style: 'destructive',
                onPress: () => setTasks(state => state.filter(task => task.id !== id))
            }
        ])
    }

    const handleToggleDone = (id: string) => {
        setTasks(state => state.map(task => {
            if (task.id === id) {
                return {
                    ...task,
                    done: !task.done
                }
            }

            return task
        }))
    }

    const tasksDone = tasks.filter(task => task.done).length
    const totalTasks = tasks.length

    return (
        <View style={classes.window}>
            <Header />

            <View style={classes.container}>
                <InputSearch onAddTask={handleAddTask} />

                <Counter
                    tasksDone={tasksDone}
                    totalTasks={totalTasks}
                />

                <FlatList
                    data={tasks}
                    keyExtractor={task => task.id}
                    showsVerticalScrollIndicator={false}
                    ListEmptyComponent={() => <EmptyTask />}
                    renderItem={({ item }) => (
                        <Task
                            task={item}
                            onDelete={handleDeleteTask}
                            onToggleDone={handleToggleDone}
                        />
                    )}
                />
            </View>
        </View>
    );
}

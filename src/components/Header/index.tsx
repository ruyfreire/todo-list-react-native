import { Image, View } from 'react-native';
import { classes } from './styles';

export function Header() {
    return (
        <View style={classes.container}>
            <Image source={require('../../../assets/logo.png')} />
        </View>
    );
}

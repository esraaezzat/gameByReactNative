import { StyleSheet , View, Dimensions } from 'react-native'
import Colors from '../../constants/Colors'
const Card = ({children}) => {

    return <View style={styles.Card}> {children} </View>
}

export default Card;

const deviceWidth = Dimensions.get('window').width; //exclude statusbar
const styles = StyleSheet.create({
    
    Card: {
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 24,
        padding: 16,
        marginTop: deviceWidth < 380 ? 18: 36,
        backgroundColor: Colors.primary800,
        borderRadius: 8,
        elevation: 10, // andoriod boxshadow
        shadowColor: 'black',// ios boxShadow
        shadowOffset: { width: 0, height: 2 },// ios boxShadow
        shadowRadius: 6,// ios boxShadow
        shadowOpacity: 0.25, // ios boxShadow
    },
})
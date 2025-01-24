import { StyleSheet, Text, TextStyle, View } from 'react-native'
import React from 'react'
import { fontSize, fontType } from '../utils/theme'

interface HeadingProps {

    title:string,
    customStyleTitle?:TextStyle
}
const Heading:React.FC<HeadingProps> = ({title,customStyleTitle}) => {
  return (
    <View>
      <Text style={[customStyleTitle,styles.title]}>{title}</Text>
    </View>
  )
}

export default Heading

const styles = StyleSheet.create({

    title:{
        fontSize:fontSize.SIZE_16,
        fontFamily:fontType.INTER_BOLD,
        alignSelf:'center'
    }
})
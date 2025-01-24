import React, {useState} from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Image,
  Platform,
  Appearance,
  StyleSheet,
} from 'react-native';
import {Images} from '../utils/constant';
import {Color, FontSize, FontFamily} from '../utils/theme';
interface CTextInputProps {
  value: string;
  keyboardType?: string;
  returnKeyType?: string;
  returnKeyLabel?: string;
  placeholder?: string;
  placeHolderTextColor?: string;
  secureTextEntry?: boolean;
  textInputStyle?: object;
  textInputContainer?: any;
  onSubmitEditing?: () => void;
  isPassword?: boolean;
  isShow?: boolean;
  onClickOpen?: () => void;
  // style?: object;
  maxLength?: number;
  ref?: any;
  onChangeText: (text: string) => void;
  multiline?: any;
  numberOfLines?: any;
  editable?: boolean;
  isSearchBox?: boolean;
  onPressRightTick: () => void;
  eyeIconStyle?: any;
}
const CTextInput: React.FC<CTextInputProps> = ({
  value,
  keyboardType,
  returnKeyType,
  returnKeyLabel,
  placeholder,
  placeHolderTextColor,
  secureTextEntry,
  textInputStyle,
  onChangeText,
  onSubmitEditing,
  isPassword,
  isShow,
  onClickOpen,
  maxLength,
  ref,
  textInputContainer,
  multiline,
  numberOfLines,
  editable,
  isSearchBox,
  onPressRightTick,
  eyeIconStyle,
}) => {
  const [theme, setTheme] = useState(Appearance.getColorScheme());
  Appearance.addChangeListener(scheme => {
    setTheme(scheme.colorScheme);
  });

  return (
    <View style={textInputContainer}>
      <TextInput
        maxLength={maxLength}
        multiline={multiline}
        numberOfLines={numberOfLines}
        value={value}
        placeholderTextColor={Color.PLACEHOLDER_TEXT_COLOR}
        keyboardType={keyboardType}
        returnKeyType={returnKeyType}
        returnKeyLabel={returnKeyLabel}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        style={[textInputStyle, style.textInputStyle]}
        onChangeText={onChangeText}
        onSubmitEditing={onSubmitEditing}
        ref={ref}
        autoCapitalize="none"
        editable={editable}
      />
      {isPassword && (
        <TouchableOpacity onPress={onClickOpen} style={style.btnIconPassword}>
          <Image
            source={!isShow ? Images.open_eye : Images.close_eye}
            style={style.eyeIcon}
            resizeMode="contain"></Image>
        </TouchableOpacity>
      )}
    </View>
  );
};
const style = StyleSheet.create({
  textInputStyle: {
    width: '100%',

    fontSize: FontSize.SIZE_14,
   
    paddingHorizontal: 10,
    fontFamily: FontFamily.ROBOTO_REGULAR,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: 'transparent',
    height: 40,
    color: Color.black,
    backgroundColor: Color.white,
    shadowColor: '#000', 
    shadowOffset: {width: 0, height: 4}, 
    shadowOpacity: 0.25, 
    shadowRadius: 4, 
  },
  text: {
    color: Color.textColor,
    paddingLeft: Platform.OS === 'ios' ? 10 : 20,
    textAlignVertical: 'center',
  },
  img: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginEnd: Platform.OS === 'ios' ? null : 10,
  },
  eyeIcon: {
    width: 16,
    height: 16,
  },
  btnIconPassword: {
    position: 'absolute',
    paddingVertical: 16,
    paddingRight: 14,
    paddingLeft: 16,
    top: 0,
    right: 0,
  },
});
export default CTextInput;

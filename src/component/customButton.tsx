import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
  TextStyle,
  Text,
} from 'react-native';
import {Color, FontFamily, FontSize} from '../utils/theme';
// import IconButton from '../iconButton';

interface CustomButtonProps {
  style?: ViewStyle;
  buttonCustomStyle?: ViewStyle;
  activeOpacity?: number;
  disabled?: boolean;
  onPress: () => void;
  btnIconName?: string;
  btnIconCustomStyle?: TextStyle;
  title?: string;
  titleStyle?: TextStyle;
}

const CustomButton: React.FC<CustomButtonProps> = props => {
  const {
    buttonCustomStyle,
    activeOpacity,
    disabled,
    onPress,
    btnIconName,
    btnIconCustomStyle,
    titleStyle,
    title,
  } = props;

  return (
    <TouchableOpacity
      style={[
        styles.buttonStyle,
        {backgroundColor: disabled ? Color.barBackground : Color.buttonColor},
        buttonCustomStyle,
      ]}
      activeOpacity={activeOpacity}
      disabled={disabled}
      onPress={onPress}>
      {/* {btnIconName && (
        <IconButton
          disabled={true}
          iconName={btnIconName}
          iconStyle={[styles.btnIconStyle, btnIconCustomStyle]}
        />
      )} */}
      {title && (
        <Text
          style={[
            styles.textStyle,
            {color: Color.white},
            titleStyle || {}, // Use an empty object if titleStyle is undefined
          ]}>
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
borderRadius:4,
    paddingHorizontal: 24,
    height: 35,
    marginTop: 27,
    paddingVertical: 8,
    alignSelf: 'flex-end',
  },
  textStyle: {
    fontFamily: FontFamily.INTER_BOLD,
    fontSize: FontSize.SIZE_16,
  },
  btnIconStyle: {
    fontSize: FontSize.SIZE_18,
    marginRight: 6,
  },
});

export default CustomButton;

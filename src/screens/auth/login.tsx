import {
  Button,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Text,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  Image,
  View,
  Dimensions,
  ImageBackground,
  StatusBar,
  StatusBarStyle,
  StatusBarAnimation,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {NavigationProp, useNavigation} from '@react-navigation/native';


import {useForm, Controller} from 'react-hook-form';
import {Color, FontFamily, FontSize} from '../../utils/theme';
import CTextInput from '../../component/cTextInput';
import {constantText} from '../../utils/constantText';
import {globalStyles} from '../../utils/globalStyles';
import {Images, socialIcons} from '../../utils/constant';
import CustomButton from '../../component/customButton';
import DividerText from '../../component/dividerText';
import { SignInWithPasswordAPI } from '../../redux/features/auth/signIn';

import { setIsLogin, setUserData } from '../../redux/slice/authSlice';

interface Login {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const {control, handleSubmit} = useForm<Login>();
  const dispatch = useDispatch();
  const navigation: NavigationProp<any> = useNavigation();
  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;
  

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isShow, setIsShow] = useState<boolean>(false);
  const onPressLogin = async () => {
    const params = {
      email: email,
      password: password,
    };
    
      const response = await dispatch(SignInWithPasswordAPI(params));
      if (response.type.includes("fulfilled")) {
        dispatch(setIsLogin(true));
        dispatch(setUserData(response.data.user))
        
        // dispatch(setAuthToken(response?.payload?.data?.authToken));
   
      } else {
        
      }
    // }
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={'red'}  />
      <ScrollView>


      <KeyboardAvoidingView
        behavior={Platform.OS == 'ios' ? 'padding' : 'height'}>
        <ImageBackground
          style={[styles.image, {height: screenHeight / 2.5}]}
          source={Images.square}
          resizeMode="cover">
          <Image
            source={Images.pileImage}
            style={styles.pileImage}
            resizeMode="contain"
          />
          <Image
            source={Images.smallSquare}
            style={styles.iconImage}
            resizeMode="contain"
          />
        </ImageBackground>
        <View style={styles.textView}>
          <Text style={globalStyles.textInputLabel}>{constantText.EMAIL}</Text>
          <CTextInput
            maxLength={35}
            returnKeyType={'none'}
            value={email}
            textInputStyle={styles.phoneNumberTextInput}
            placeholder={constantText.ENTER_YOUR_EMAIL_PHONE}
            placeHolderTextColor={Color. placeholderText}
            keyboardType="email-address"
            onChangeText={(text: string) => {
              setEmail(text);
            }}
          />
          <Text style={globalStyles.textInputLabel}>
            {constantText.PASSWORD}
          </Text>
          <CTextInput
            maxLength={35}
            returnKeyType={'none'}
            value={password}
            textInputStyle={styles.phoneNumberTextInput}
            textInputContainer={styles.mainTextInputContainer}
            placeholder={constantText.PASSWORD}
            keyboardType="default"
            secureTextEntry={!isShow}
            isShow={isShow}
            isPassword
            onClickOpen={() => {
              setIsShow(!isShow);
            }}
            onChangeText={(text: string) => {
              setPassword(text);
            }}
          />
          <TouchableOpacity>
            <Text style={styles.forgotText}>
              {constantText.FORGOT_PASSWORD}
            </Text>
          </TouchableOpacity>
          <CustomButton title={constantText.SIGN_IN} onPress={onPressLogin} />
          <TouchableOpacity>
            <Text style={styles.notMemberText}>
              {constantText.NOT_A_MEMBER}<Text  style={{textDecorationLine:'underline'}}>
                {constantText.SIGNUP_HERE}</Text>
            </Text>
          </TouchableOpacity>
          <DividerText />
          <View style={styles.socialIconView}>
          {socialIcons.map((icon) => (
        <View key={icon.id} style={styles.iconContainer}>
          <Image source={icon.source} style={styles.icon} />
        </View>
      ))}
          </View>
        </View>
      
      </KeyboardAvoidingView>
      <TouchableOpacity>
            <Text style={styles.enterGuest}>
              {constantText. ENTER_GUEST}
            </Text>
          </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.white,
  },
  textView: {marginHorizontal: 46},
  input: {
    padding: 16,
    borderWidth: 1,
    borderColor: Color.black,
    marginHorizontal: 20,
  },
  errorText: {
    fontSize: FontSize.SIZE_13,
    color: 'red',
  },
  image: {
    width: '100%',
    alignSelf: 'center',
    marginBottom: 38,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  pileImage: {
    width: 146,
    height: 92,
  },
  iconImage: {
    width: 51.67,
    height: 51.67,
  },
  phoneNumberTextInput: {},

  mainTextInputContainer: {},
  forgotText: {
    textAlign: 'right',
    marginVertical: 4,
    color: Color.textColor,
    fontFamily:FontFamily.ROBOTO_LIGHT
  },
  notMemberText:{
    textAlign: 'right',
    marginVertical: 15,
    color: Color.black,
    fontSize:FontSize.SIZE_12,
    fontFamily:FontFamily.ROBOTO_REGULAR

  },
  socialIconView:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',

  },
  iconContainer: {
  alignItems:'center',
   justifyContent:'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.3,
    shadowRadius: 1.41,
    elevation: 2,
    marginVertical:39
  },
  icon: {
    width: 56,
    height: 56,
    marginHorizontal:6

  },
  enterGuest:{
    textAlign: 'right',
    marginVertical: 4,
    marginHorizontal:17,
    color: Color.textColor,  
  }
});

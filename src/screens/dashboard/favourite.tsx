import React from 'react';
import {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Platform,
  Image,
  StatusBar,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getEventListAPI} from '../../redux/features/dashboard/dashboard';
import {Color, FontFamily, FontSize} from '../../utils/theme';
import {Images} from '../../utils/constant';
import Header from '../../component/header';
import {setEventData} from '../../redux/slice/eventSlice';
import {RootState} from '../../redux/store';
const Favourite = () => {
  const dispatch = useDispatch();
  const [eventList, setEventList] = useState([]);

  const favList = useSelector(
    (state: RootState) => state.eventReducer.eventData,
  );
  const favoriteEvents = favList.filter((event) => event.isFav === true);

 
  


    const handleFavorite = (eventId,index) => {
      console.log("==id",index)
      const updatedEvents = eventList.map((item) => {
        if (item?.id === index+1) {
          return { ...item, isFav: !item?.isFav };
        }
        return item;
      });
 dispatch(setEventData(updatedEvents))
      setEventList(updatedEvents);
    };

  const renderEventListCard = ({item,index}: {item: any,index:any}) => {
    return (
      <View style={styles.eventCardStyle}>
        <Image style={styles.image} source={{uri: item.event_profile_img}} />

        <View style={styles.eventContent}>
          <Text style={styles.eventTitle}>{item.event_name}</Text>
          <Text style={styles.eventDate}>
            {item.readable_from_date} - {item.readable_to_date}{' '}
          </Text>

          <Text style={styles.eventPrice}>
            €{item.event_price_from} - €{item.event_price_to}
          </Text>
          <View style={styles.danceContainer}>
            {item.danceStyles.map((item: any) => (
              <View style={styles.itemContainer}>
                <Text style={styles.itemText}>{item.ds_name}</Text>
              </View>
            ))}
          </View>
        </View>
        <View
          style={{
            flexDirection: 'column',
            justifyContent: 'space-around',
            flexWrap: 'wrap',
          }}>
          <Image style={styles.iconArrow} source={Images.arrow} />
          <Text style={styles.city}>
            {item.city} {item.country}
          </Text>
          <View style={styles.rowImage}>
            <Image style={styles.iconShare} source={Images.share} />
            <TouchableOpacity style={styles.fav} onPress={() => handleFavorite(item.event_id,index)}>
              <Image
                style={styles.iconHeart}
                source={!item.isFav ? Images.heartOutline : Images.heartFilled}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.mainTopContainer}>
      <StatusBar translucent backgroundColor={Color.white}  />
     
      <FlatList
        contentContainerStyle={styles.contentContainerStyle}
        data={favoriteEvents}
        keyExtractor={(_, index) => index.toString()}
        renderItem={renderEventListCard}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default Favourite;

const styles = StyleSheet.create({
  eventCardStyle: {
    marginHorizontal: 10,
    backgroundColor: Color.white,
    padding: 20,
    marginVertical: 7,
    borderRadius: 10,
    flexDirection: 'row',
  },
  mainTopContainer: {
    flex: 1,
    backgroundColor: Color.eventBackground,
    // paddingTop: 30,
  },
  contentContainerStyle: {
    paddingBottom: Platform.OS == 'android' ? 30 : 0,
    backgroundColor: Color.eventBackground,
    marginTop: 39,
  },
  image: {
    width: 80,
    height: 80,

    borderRadius: 7,
  },
  rowImage: {
    flexDirection: 'row',
  },
  eventContent: {
    marginStart: 8,
    flexDirection: 'column',
  },
  eventTitle: {
    fontFamily: FontFamily.GOTHIC_BLACK,
    fontSize: FontSize.SIZE_16,
    fontWeight: '600',
  },
  eventDate: {
    fontFamily: FontFamily.GOTHIC_LIGHT,
    fontSize: FontSize.SIZE_14,
    fontWeight: '500',
    color: Color.green,
    marginVertical:5
  },
  eventPrice: {
    color: Color.placeholderText,
     fontFamily:FontFamily.GOTHIC_LIGHT,
    fontSize: FontSize.SIZE_12,
    fontWeight: '500',
    marginBottom:6
  },
  danceContainer: {
    flexDirection: 'row',
  },
  itemContainer: {
    backgroundColor: Color.danceBackground,
    borderRadius: 25,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  itemText: {},
  iconShare: {
    width: 24,
    height: 24,
  },
  fav: {},
  iconHeart: {
    width: 24,
    height: 24,
  },
  iconArrow: {
    width: 24,
    height: 24,
  },
  city: {
    // fontFamily: Gothic A1;
    fontSize: FontSize.SIZE_12,
    fontWeight: '400',
    flexDirection: 'row',
    flexWrap: 'wrap',

    color: Color.textColor,
  },
});

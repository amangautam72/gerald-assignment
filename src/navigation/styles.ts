import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  safeAreaApp: {
    flex: 1
  },
  safeAreaProvider: {
    borderTopLeftRadius: 48,
  },
  viewDrawer: {
    marginTop: 100
  },
  viewTitle: {
    alignItems: 'center',
    marginBottom: 60,
  },
  title: {
    color: '#fff',
    fontFamily: 'OpenSans',
    fontWeight: 'bold',
    lineHeight: 38,
    fontSize: 28,
  },
  viewContentDrawer: {
    marginLeft: 10,
    width: '100%'
  },
  contentDrawerItemActive: {
    backgroundColor: '#4B2F3F',
    borderRadius: 15.5,
    marginHorizontal: 20,
  },
  drawerItemLabelActive: {
    color: '#FC8074',
    fontSize: 17,
    fontFamily: 'OpenSans',
    fontWeight: '400',
    width: 100,
  },
  contentDrawerItem: {
    marginHorizontal: 20,
  },
  drawerItemLabel: {
    color: '#fff',
    fontSize: 17,
    fontFamily: 'OpenSans',
    fontWeight: '400',
    width: 100,
  },
  viewRow: {
    borderBottomColor: '#fff',
    borderBottomWidth: 0.4,
    marginVertical: 30,
    marginLeft: 30,
  },
  viewSignOut: {
    marginLeft: 30,
    marginRight: 20,
  },
  signoutItem: {
    color: '#fff',
    fontSize: 17,
    fontFamily: 'OpenSans',
    fontWeight: '400',
    width: 100,
  },
  animatedView: {
    flex: 1,
    overflow: 'hidden'
  },
  screenOptionsView: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  screenOptionsImage: {
    height: 30,
    width: 30,
    margin: 30,
  },
  screenOptionsText: {
    flex:1,
    color: "#9F9FA0",
    fontFamily: 'OpenSans',
    fontSize: 24,
    fontWeight: '400',
    letterSpacing: 5,
  },
});

export default styles;

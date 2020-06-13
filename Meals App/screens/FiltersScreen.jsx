import React, { useState, useEffect, useCallback } from 'react'
import { StyleSheet, Text, View, Switch, Platform } from 'react-native'
import { useDispatch } from 'react-redux'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'

import MyHeaderButton from '../Components/HeaderButton'
import { COLORS } from '../Constants'
import { setFilters } from '../Store/actions'

const FilterSwitch = (props) => {
  return (
    <View style={styles.filterContainer}>
      <Text>{props.label}</Text>
      <Switch
        onValueChange={props.onChange}
        thumbColor={Platform.OS === 'android' ? COLORS.primary : ''}
        trackColor={{ true: COLORS.primary }}
        value={props.value}
      />
    </View>
  )
}

const FiltersScreen = (props) => {
  const { navigation } = props

  const [isGlutenFree, setIsGlutenFree] = useState(false)
  const [isLactoseFree, setIsLactoseFree] = useState(false)
  const [isVegan, setIsVegan] = useState(false)
  const [isVegetarian, setIsVegetarian] = useState(false)

  const dispatch = useDispatch()

  // This saveFilters function re-creates only when one of the four states changes
  const saveFilters = useCallback(() => {
    const appliedFilters = {
      isGlutenFree,
      isLactoseFree,
      isVegan,
      isVegetarian
    }
    console.log(appliedFilters)
    dispatch(setFilters(appliedFilters))
  }, [isGlutenFree, isLactoseFree, isVegan, isVegetarian, dispatch])

  // Re-runs when saveFilters changes
  useEffect(() => {
    // ATTENTION: We are setting a FUNCTION to the params, not a value
    navigation.setParams({ save: saveFilters })
  }, [saveFilters])

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Available Filters / Restrictions</Text>
      <FilterSwitch
        label="Gluten-free"
        onChange={(val) => setIsGlutenFree(val)}
        value={isGlutenFree}
      />
      <FilterSwitch
        label="Lactose-free"
        onChange={(val) => setIsLactoseFree(val)}
        value={isLactoseFree}
      />
      <FilterSwitch
        label="Vegan"
        onChange={(val) => setIsVegan(val)}
        value={isVegan}
      />
      <FilterSwitch
        label="Vegetarian"
        onChange={(val) => setIsVegetarian(val)}
        value={isVegetarian}
      />
    </View>
  )
}

FiltersScreen.navigationOptions = (navigationData) => {
  return {
    headerLeft: (
      <HeaderButtons HeaderButtonComponent={MyHeaderButton}>
        <Item
          iconName="ios-menu"
          onPress={() => {
            navigationData.navigation.toggleDrawer()
          }}
          title="menu"
        />
      </HeaderButtons>
    ),
    headerRight: (
      <HeaderButtons HeaderButtonComponent={MyHeaderButton}>
        <Item
          iconName="ios-save"
          // Execute the saveFilter function stored in navigation
          onPress={navigationData.navigation.getParam('save')}
          title="menu"
        />
      </HeaderButtons>
    )
  }
}

export default FiltersScreen

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center'
  },
  title: {
    margin: 20,
    textAlign: 'center',
    fontFamily: 'open-sans-bold',
    fontSize: 22
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
    marginVertical: 10
  }
})

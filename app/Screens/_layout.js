import React from 'react';
import { Tabs } from 'expo-router';
import { useTheme } from 'react-native-paper';
import { IconComponent } from '../utils/utils';
import { DEFAULT_BOTTOM_TAB_ICON_SIZE } from '../constants/constants';

const TabLayout = () => {
  const theme = useTheme();
  // Define the tab screens data
  const tabScreens = [
    {
      name: 'index',
      title: 'Home',
      icon: ({ color }) =>
        IconComponent('FontAwesome', 'home', DEFAULT_BOTTOM_TAB_ICON_SIZE, color),
      headerShown: false,
    },
    {
      name: 'Events',
      title: 'Events',
      icon: ({ color }) =>
        IconComponent('MaterialIcons', 'event', DEFAULT_BOTTOM_TAB_ICON_SIZE, color),
    },
    {
      name: 'ViewGuests',
      title: 'Guests',
      icon: ({ color }) => IconComponent('Zocial', 'guest', DEFAULT_BOTTOM_TAB_ICON_SIZE, color),
    },
    {
      name: 'profile',
      title: 'More',
      icon: ({ color }) =>
        IconComponent('AntDesign', 'profile', DEFAULT_BOTTOM_TAB_ICON_SIZE, color),
    },
  ];

  return (
    <Tabs
      screenOptions={{
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: theme.colors.primary,
        },
        headerTintColor: theme.colors.onPrimary,
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: theme.colors.shadow,
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: 'bold',
        },

        tabBarStyle: {
          backgroundColor: theme.colors.primary,
        },
      }}
    >
      {tabScreens.map((screen) => (
        <Tabs.Screen
          key={screen.name}
          name={screen.name}
          options={{
            title: screen.title,
            tabBarIcon: screen.icon,
            tabBarBadge: screen.badge,
            headerShown: screen.headerShown,
            headerTintColor: theme.colors.onSurface,
          }}
          listeners={
            screen.onPress
              ? () => ({
                  tabPress: (e) => {
                    e.preventDefault();
                    screen.onPress();
                  },
                })
              : undefined
          }
          tabBarLabelStyle={{
            color: theme.colors.primary,
          }}
        />
      ))}
    </Tabs>
  );
};
export default TabLayout;

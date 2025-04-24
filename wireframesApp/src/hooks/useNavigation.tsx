import {
  useNavigation as useNav,
  NavigationProp,
  useRoute,
  RouteProp,
} from '@react-navigation/native'

import {
  RootStackParamList,
} from '@/types'

const useMainNavigation = () => useNav<NavigationProp<RootStackParamList>>()
const useMainRoute = <RouteName extends keyof RootStackParamList>() => {
  return useRoute<RouteProp<RootStackParamList, RouteName>>()
}

export {
  useMainNavigation,
  useMainRoute,
}

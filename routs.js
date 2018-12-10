import {StackNavigator} from 'react-navigation';
import {Home,Badge,SideBar,Buttons,Cards, CheckBoxes,Deckswipers,Fabs,Forms,Headers,Layouts,Lists} from './components/index';
const RootNavagator=StackNavigator({
Home:{screen:Home},
Badge:{screen:Badge},
SideBar:{screen:SideBar},
Buttons:{screen:Buttons},
Cards:{screen:Cards},
CheckBoxes:{screen:CheckBoxes},
Deckswipers:{screen:Deckswipers},
Fabs:{screen:Fabs},
Forms:{screen:Forms},
Headers:{screen:Headers},
Layouts:{screen:Layouts},
Lists:{screen:Lists}


},{headerMode:'none',
mode:'modal'





})
export {RootNavagator}
import React,{Component} from 'react';
import {View ,Text,Image}from 'react-native';
class Third extends Component{
render(){

    return(<View style={{flex:1,flexDirection:'column',backgroundColor:'#e4e6eb'}}>
       <Image style={{flex:4,width:'105%'}} source={require('../images/elgoli2.png')}/> 
           <View style={{flex:1}}></View>  
           <View style={{flex:8,backgroundColor:'#ffffff',borderRadius:10,marginLeft:17,marginRight:55,alignItems:'center',justifyContent:'space-evenly'}}>

               <Text style={{fontSize:35}}>ضرب المثل</Text>
           
           
           
               <Text style={{fontSize:30}}>معنا</Text>

               
               <Text style={{fontSize:30}}>کاربد</Text>
           </View>
           <View style={{flex:0.5}}></View> 
    </View>);
}


}

export {Third};
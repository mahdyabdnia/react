import React,{Component} from 'react';
import {View,ImageBackground,Text,Image} from 'react-native'




class About extends Component{


    render(){


        return(

            <View style={{flex:1,flexDirection:'column'}}>
            
            <View style={{flex:5,backgroundColor:'#11bde0',flexDirection:'row'}}>


<ImageBackground  style={{width:'100%',height:'100%'}} source={require('../images/re.jpg')}/> 


           
          

            </View>

            <View style={{flex:0.2,backgroundColor:'white'}}></View>
            <View style={{flex:8,backgroundColor:'white',flexDirection:'column'}}>
            
             <View style={{flex:3}}><Text>  نرم افزار ضرب المثل های اذری محصول تیم دانشجویی دانشگاه خوارزمی است . این نرم افزار توسعه یافته با فریم ورک ری اکت نیتیو است  </Text></View>

              <View style={{flex:1.5,flexDirection:'row-reverse'}}>
              
              <View style={{flex:2,alignItems:'flex-end',marginRight:10}}><Image  source={require('../images/gmail.png')}/></View>
              <View style={{flex:8,alignItems:'center',borderBottomColor:'#eaecef',borderBottomWidth:0.3,marginTop:10}}><Text>masalha@gmial.com</Text></View>
              
              
              </View>

              <View style={{flex:2,flexDirection:'row-reverse'}}>

              <View style={{flex:2,alignItems:'flex-end',marginRight:10,marginTop:5}}><Image  source={require('../images/insta.png')}/></View>
              <View style={{flex:8,alignItems:'center',borderBottomColor:'#eaecef',borderBottomWidth:0.3,marginTop:10}}><Text>@masalha</Text></View>
              
              </View>

              <View style={{flex:2,flexDirection:'row-reverse'}}>

              <View style={{flex:2,alignItems:'flex-end',marginRight:10}}><Image  source={require('../images/telegram.png')}/></View>
              <View style={{flex:8,alignItems:'center',borderBottomColor:'#eaecef',borderBottomWidth:0.3,marginTop:10}}><Text>@masalha</Text></View>
              
              </View>

              <View style={{flex:2,flexDirection:'row-reverse'}}>
              
              <View style={{flex:2,alignItems:'flex-end',marginRight:10}}><Image  source={require('../images/twitter.png')}/></View>
              <View style={{flex:8,alignItems:'center',borderBottomColor:'#eaecef',borderBottomWidth:0.3,marginTop:10}}><Text>@masalha</Text></View>
              
              </View>

              <View style={{flex:2,flexDirection:'row-reverse'}}>
              
              <View style={{flex:2,alignItems:'flex-end',marginRight:10}}><Image  source={require('../images/yahoo.png')}/></View>
              <View style={{flex:8,alignItems:'center',borderBottomColor:'#eaecef',borderBottomWidth:0.3,marginTop:10}}><Text>maslha@yahoo.com</Text></View>
              
              </View>


 </View>


<View style={{flex:6,backgroundColor:'white'}}></View>
            
            
            
           
            
            
            
            </View>
        );
    }
}

export{About};
import React,{Component} from 'react'
import {View,Slider,Switch,Text} from 'react-native'



class Settings extends Component {
    state={value:50,check:true}
    render(){





        return(
            <View style={{flex:1,flexDirection:'column'}}>

                <View style={{flex:0.75,backgroundColor:'white',borderBottomWidth:0.25,borderBottomColor:'black'}} >
                   <Text style={{direction:'rtl',fontSize:20,marginTop:10,marginRight:10}}>تنظیمات</Text>
                </View>

                <View style={{flex:9,flexDirection:'column'}}>




                <View style={{flex:4,backgroundColor:'white',flexDirection:'column'}}>
                
                <View style={{flex:1,marginTop:10,marginEnd:10}}><Text>میزان صدای موسیقی: </Text></View>

                <View style={{flex:1}}><Slider maximumValue={100} value={this.state.value} minimumValue={0} maximumTrackTintColor='grey' minimumTrackTintColor='blue' thumbTintColor='blue'/></View>
                
                
                </View>






                <View style={{flex:0.1}}></View>





                <View style={{flex:2,backgroundColor:'white',flexDirection:'row',direction:'rtl'}}>
                <View style={{flex:1,marginTop:15}}><Text style={{fontSize:15}}>پخش موسیقی</Text></View>
               <View style={{flex:3,marginTop:15}}><Switch
              thumbColor='blue' trackColor='blue' 
              onValueChange={()=>{this.setState({check:!this.state.check})}}
               
               
               
               
               /></View>
               <View style={{flex:0.25,marginTop:15}}></View>
                </View>






                <View style={{flex:0.1}}></View>






                <View style={{flex:4,backgroundColor:'white'}}>
                
                
                </View>






                <View style={{flex:0.1}}></View>





                <View style={{flex:4,backgroundColor:'white'}}></View>





                <View style={{flex:0.1}}></View>






                <View style={{flex:4,backgroundColor:'white'}}></View>







                </View>



            </View>



          
            
        );
    }
}

export {Settings}
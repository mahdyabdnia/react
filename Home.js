import React,{Component} from 'react'
import {View,Text,Image ,TouchableOpacity,ImageBackground} from 'react-native'


class Home extends Component{

    
    render(){
      
        return(
           
<ImageBackground source={require('../images/back.jpg')}style={{ width: '100%', height: null, flex: 1 }} >
            <View style={{flex:1,marginLeft:10,flexDirection:'column'}}>





                       <View style={{flex:1}}></View>



                       
                        
                       
                        <TouchableOpacity onPress={()=>this.props.navigation.navigate('Second')} style={{flex:4,borderRadius:10,alignItems:"center",backgroundColor:'#3f6196',marginRight:12,marginLeft:2,justifyContent:'space-evenly'}} ><View style={{flex:0.5}}></View>
                        
                      <Image source={require('../images/ba.jpg')}>

                      <Text style={{color:'white',fontSize:30}}>ضرب المثل ها</Text>
                      </Image>
                      
                        </TouchableOpacity>
                        
                       

                     










                <View style={{flex:1}}></View>









                <View style={{flex:4,flexDirection:'row'}}>





                
                 
               
                    
                   <TouchableOpacity  onPress={()=>this.props.navigation.navigate('Third')}  style={{backgroundColor:'#39287a',borderRadius:10,flex:4,flexDirection:'column',alignItems:'center',justifyContent:'space-evenly'}} ><View style={{flex:0.5}}></View>
                       
                      <Image style={{width:'50%',height:'50%'}} source={require('../images/set.png')}/>
                       <View><Text style={{color:'white',fontSize:30}}>تنظیمات</Text></View>
                       </TouchableOpacity>
               

            



                   <View style={{flex:0.5}}></View>





                   

                 
                   <TouchableOpacity onPress={()=>this.props.navigation.navigate('Forth')}  style={{marginRight:10,backgroundColor:'#1b5fcc',borderRadius:10,flex:4,flexDirection:'column',alignItems:'center',justifyContent:'space-evenly'}}><View style={{flex:0.5}}></View>
                  
                      <Image style={{width:'50%',height:'50%'}} source={require('../images/qu.png')}/>
                       <View><Text style={{color:'white',fontSize:30}}>کوییز</Text></View>
                       </TouchableOpacity>
                   




                </View>





                
                <View style={{flex:1}}></View>





                
                <View style={{flex:4,flexDirection:'row'}}>




             
                
              
                <TouchableOpacity  onPress={()=>this.props.navigation.navigate('About')} style={{flex:4,backgroundColor:'#32496e',marginRight:10,borderRadius:10,flexDirection:'column',alignItems:'center',justifyContent:'space-evenly'}}><View style={{flex:0.5}}></View>
                          
                      <Image style={{width:'50%',height:'50%'}} source={require('../images/rate.jpg')}/>

                      <Text style={{color:'white',fontSize:30}}>امتیاز به ما</Text>
                      
                       </TouchableOpacity>
                
               





                <View style={{flex:0.25}}></View>





                

              
                <TouchableOpacity onPress={()=>this.props.navigation.navigate('About')}  style={{flex:4,backgroundColor:'#779fe0',marginRight:10,borderRadius:10,flexDirection:'column',alignItems:'center',justifyContent:'space-evenly'}} ><View style={{flex:0.5}}></View>
              
                      <Image style={{width:'50%',height:'50%'}} source={require('../images/about.jpg')}/>
                       <View><Text style={{color:'white',fontSize:30}}>درباره ما</Text></View>

                       </TouchableOpacity>
               

               
                
                </View>







                <View style={{flex:1}}></View>






          











            </View></ImageBackground>
        );
    }
}


export {Home}
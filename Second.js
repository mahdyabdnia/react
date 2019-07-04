import React,{Component} from 'react'
import {View ,DrawerLayoutAndroid,Image,Text,TouchableOpacity,FlatList,ImageBackground} from 'react-native'


class Second extends Component{


    constructor(props) {
        super(props);
    
        this.state = {
         
          data: [
            {ID:1,
              title:'مثل 1',
              mean:'معنای 1'
            },

            {ID:2,
              title:'مثل 1',
              mean:'معنای 1'
            },

            {ID:3,
              title:'مثل 1',
              mean:'معنای 1'
            },



            {ID:4,
              title:'مثل 1',
              mean:'معنای 1'
            },



            {ID:5,
              title:'مثل 1',
              mean:'معنای 1'
            },

            {ID:6,
              title:'مثل 1',
              mean:'معنای 1'
            },


            {ID:7,
              title:'مثل 1',
              mean:'معنای 1'
            },
            {ID:8,
              title:'مثل 1',
              mean:'معنای 1'
            },


            {ID:9,
              title:'مثل 1',
              mean:'معنای 1'
            },



            {ID:10,
              title:'مثل 1',
              mean:'معنای 1'
            },


            {ID:11,
              title:'مثل 1',
              mean:'معنای 1'
            }






          ]
        };
    
        
      }
    
     


    renderItem({ item }) {
        return (
          <TouchableOpacity onPress={()=>this.props.navigation.navigate('Third')} style={{justifyContent:'space-evenly',height:100,marginTop:5,marginBottom:5,marginLeft:10,marginRight:10,backgroundColor:'#ffffff',borderBottomEndRadius:10,alignItems:'center',borderColor:'#ffa09f',borderWidth:1.2,borderBottomStartRadius:10,borderTopStartRadius:10,borderTopEndRadius:10,shadowOffset:20, shadowRadius:20,elevation:10}}>
          <Text style={{color:'#000000',fontSize:25}}>{item.title}</Text>

           <Text style={{color:'#000000',fontSize:10}}>{item.mean}</Text>
        </TouchableOpacity>
        );
    }







    render(){
        return(
<ImageBackground source={require('../images/bg.jpg')} style={{ width: '100%', height: null, flex: 1 }}>
<View style={{marginTop:10}}>

<FlatList
          
            data={this.state.data}
            renderItem={({ item }) => this.renderItem({ item })}
            keyExtractor={item => String(item.ID)}
/>
</View>
</ImageBackground>
        );
    }
}


export {Second}



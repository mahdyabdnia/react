import React,{Component} from 'react'
import {View ,DrawerLayoutAndroid,Image,Text,TouchableOpacity,FlatList} from 'react-native'


class Second extends Component{


    constructor(props) {
        super(props);
    
        this.state = {
         
          data: []
        };
    
        this.loadData();
      }
    
      loadData() {
        Axios.get("https://rallycoding.herokuapp.com/api/music_albums").then(
          response => this.setState({ data: response.data })
        );
    }


    renderItem({ item }) {
        return (
          <TouchableOpacity onPress={()=>this.props.navigation.navigate('Home')} style={{height:100,margin:10,backgroundColor:'#ffffff',borderBottomEndRadius:10,alignItems:'center',borderColor:'#9fa0a1',borderBottomStartRadius:10,borderTopStartRadius:10,borderTopEndRadius:10}}>
            <Text style={{color:'#000000',marginTop:10}}>ضرب الل</Text>

             <Text style={{color:'#000000',marginTop:40}}>ضرب المثل</Text>
          </TouchableOpacity>
        );
    }







    render(){
        return(
<View style={{marginTop:10}}>
<FlatList
          
            data={this.state.data}
            renderItem={({ item }) => this.renderItem({ item })}
            keyExtractor={item => String(item.ID)}
/>


</View>
        );
    }
}


export {Second}



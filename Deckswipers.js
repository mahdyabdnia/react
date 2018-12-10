import React,{Component} from 'react';
import {StyleSheet,Image,View} from 'react-native'
import {Container,Header,Left,Button,Icon, Body, Title, Right, Content,DeckSwiper,Text,Footer,FooterTab,Drawer,Card, CardItem, Thumbnail, Item} from 'native-base';
import {SideBar} from './index'

const Cards=[{
text:'Card One',
name:'One',
image:require('../image/11.png')

},
{

text:'Card Two',
name:'Two',
image:require('../image/11.png')



},
{

    text:'Card Three',
    name:'Three',
    image:require('../image/11.png')
    
    
    
    }

]


class Deckswipers extends Component{
    closeDrawer=()=>{
        this.drawer._root.close()
      }
    
      openDrawer=()=>{
    
        this.drawer._root.open()
      }

      renderEmptyComponent=()=>{
          return(<Text>Empty</Text>);
      }
    
      
      
    render(){
      const {navigate}=this.props.navigation;
      return(
    
       <Drawer 
       ref={(ref)=>{this.drawer=ref;}}
       content={<SideBar navigate={navigate}/>}
       onClose={()=>this.closeDrawer()
       }>
        
        <Container style={styles.mainContainer}>
    <Header>
      <Left>
    <Button transparent onPress={()=>this.openDrawer()}  >
    <Icon name="menu"></Icon>
    
    </Button>
    
      </Left>
      <Body>
        <Title>Deckswipers</Title>
      </Body>
    
      <Right><Title>Deckswipers</Title></Right>
    </Header>
  <View>
<DeckSwiper 
dataSource={Cards}
looping={true}
renderEmptyComponent={this.renderEmptyComponent.bind(this)}
renderItem={item=><Card style={{elevation:3}}>
<CardItem>
<Left>
    <Thumbnail source={item.image}/>
    <Body><Text>{item.text}</Text><Text>ReactApp.ir</Text></Body>
</Left>
</CardItem>

<CardItem cardBody>
<Image source={item.image} style={{height:300,flex:1}} />
</CardItem>

<CardItem>
    <Icon name="heart" style={{color:'#ED4A6A'}}/>
    <Text>{item.text}</Text>
</CardItem>
</Card>}

/>
</View>





    
    
    
        </Container>
        
        </Drawer>  
    
        
    
    
    
    
    
      );
    }
    
    
    
}

const styles=StyleSheet.create({
titleStyle:{color:'#000'},
mainContainer:{backgroundColor:'#FFF'},
buttonStyle:{margin:5},
transparentButton:{backgroundColor:'#676'}

})

export {Deckswipers};
import React,{Component} from 'react';
import {View,StatusBar,Image} from 'react-native';
import {Card,Container,Header,Left,Button, Body, Title, Right, Content,Text,Footer,FooterTab,Drawer,Grid,Col,Row, ListItem, List,Radio, Item, Input, CardItem, Thumbnail} from 'native-base';
import {SidBar} from './index';
import {SearchBar,Icon} from 'react-native-elements';
//import RadioGroup from 'react-native-radio-buttons-group';







 class RadioButton extends Component{


  constructor(props){
    super(props);

    this.state={
      select1:false,
      select2:true
    }
  }
  closeDrawer=()=>{
    this.drawer._root.close()
  }

  openDrawer=()=>{

    this.drawer._root.open()
  }

  
  
render(){
  const {navigate}=this.props.navigation;
  return(

   <Drawer 
   side='right'
   ref={(ref)=>{this.drawer=ref;}}
   content={<SidBar navigate={navigate}/>}
   onClose={()=>this.closeDrawer()
   }>
    
    <Container>

    <Header style={{backgroundColor:'#ffffff'}}>
      <Left>
    
      <Button transparent   >
    <Icon name='search' type='Feather'></Icon>
    
    </Button>
      </Left>
     
    
      <Right><Button transparent onPress={()=>this.openDrawer()}  >
    <Icon  name='menu' type='Ionicons'></Icon>
    
    </Button>
    </Right>
    </Header>



<Content>
  <Card style={{marginLeft:10,borderRadius:12}}>
    <CardItem>
      <Left><Button transparent><Icon name='keyboard-arrow-left' type='MaterialIcons' /></Button></Left>
<Body  style={{alignContent:'center',marginTop:10}}>
  <Text >ضرب المثل 1</Text>
</Body>

<Right><Button transparent><Icon name='keyboard-arrow-right'type='MaterialIcons'/></Button></Right>
    </CardItem>
<CardItem style={{alignSelf:'center'}}><Text>الباالالالالالالال</Text></CardItem>
<CardItem style={{alignSelf:'center'}}><Text>لالالالالاالالالالالالا</Text></CardItem>
    <CardItem>
      <Left><Button transparent><Icon name='volume-up' type='FontAwesome' /></Button></Left>

      <Body ><Button transparent><Image style={{alignItems:'center',marginLeft:25 ,width:23,height:23}} source={require('../image/share.png')}/></Button></Body>
      <Right><Button transparent><Image style={{width:23,height:23}} source={require('../image/hearts.png')}/></Button></Right>
      
    </CardItem>
    </Card>


    <Card>
<CardItem></CardItem>
<CardItem></CardItem>
<CardItem></CardItem>

<CardItem></CardItem>
    </Card>

 

  
</Content>




    </Container>
    
    </Drawer>  

    





  );
}




 }

export{RadioButton};

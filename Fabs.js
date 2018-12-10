import React,{Component} from 'react';
import {StyleSheet,Image,View} from 'react-native'
import {Container,Header,Left,Button,Icon,Fab, Body,CheckBox,ListItem, Title, Right, Content,Text,Footer,FooterTab,Drawer,Card} from 'native-base';
import {SideBar} from './index'


class Fabs extends Component{

 constructor(props){
     super(props);
     this.state={
         active:false
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
        <Title>FAB</Title>
      </Body>
    
      <Right><Title>FAB</Title></Right>
    </Header>
    <View style={{flex:1}}>

    <Fab active={this.state.active}
    
    direction="up"
    style={{backgroundColor:'#5067FF'}}
    position="bottomRight"
    onPress={()=>this.setState({active:!this.state.active})}
    >
    <Icon name="share" />
    <Button style={{backgroundColor:'green'}}>
        <Icon name="logo-whatsapp"/>
    </Button>

    <Button style={{backgroundColor:'blue'}}>
        <Icon name="logo-facebook"/>
    </Button>

    <Button style={{backgroundColor:'red'}}>
        <Icon name="mail"/>
    </Button>


    </Fab>

            
     


    
      
</View>
    <Footer>
    
    
      <FooterTab>
       
       <Button><Icon name='settings'></Icon></Button>
    
    
      </FooterTab>
      <FooterTab>
       
       <Button><Icon name='film'></Icon></Button>
    
    
      </FooterTab>
      <FooterTab>
       
       <Button><Icon name='cart'></Icon></Button>
    
    
      </FooterTab>
      <FooterTab>
       
       <Button><Icon name='wine'></Icon></Button>
    
    
      </FooterTab>
      <FooterTab>
       
       <Button><Icon name='refresh'></Icon></Button>
    
    
      </FooterTab>
      <FooterTab>
       
       <Button><Icon name='camera'></Icon></Button>
    
    
      </FooterTab>
    </Footer>
    
    
    
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

export {Fabs};
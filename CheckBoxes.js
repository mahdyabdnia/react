import React,{Component} from 'react';
import {StyleSheet,Image} from 'react-native'
import {Container,Header,Left,Button,Icon, Body,CheckBox,ListItem, Title, Right, Content,Text,Footer,FooterTab,Drawer,Card} from 'native-base';
import {SideBar} from './index'


class CheckBoxes extends Component{

    constructor(props){
        super(props)
        this.state={
            checkBox1:false,
            checkBox2:false,
            checkBox3:true

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
        <Title>CheckBox</Title>
      </Body>
    
      <Right><Title>CheckBox</Title></Right>
    </Header>
    <Content>

        <ListItem>
           <CheckBox checked={this.state.checkBox1} onPress={()=>this.setState({checkBox1:!this.state.checkBox1})} />
           <Body>
               <Text>daily checked</Text>
           </Body>


        </ListItem>

 
 <ListItem>
           <CheckBox  checked={this.state.checkBox2} onPress={()=>this.setState({checkBox2:!this.state.checkBox2})}/>
           <Body>
               <Text>daily no checked</Text>
           </Body>


        </ListItem>
        
        <ListItem>
           <CheckBox checked={this.state.checkBox3} onPress={()=>this.setState({checkBox3:!this.state.checkBox3})} />
           <Body>
               <Text>finish list screen</Text>
           </Body>


        </ListItem>       
     


    
      
</Content>
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

export {CheckBoxes};
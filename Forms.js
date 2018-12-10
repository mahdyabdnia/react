import React,{Component} from 'react';
import {StyleSheet,Image,View} from 'react-native'
import {Container,Header,Left,Button,Icon,Fab, Body,CheckBox,ListItem, Title, Right, Content,Text,Footer,FooterTab,Drawer,Card, Form, Item, Input, Label, Textarea} from 'native-base';
import {SideBar} from './index'


class Forms extends Component{

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
        <Title>Forms</Title>
      </Body>
    
      <Right><Title>Fomrs</Title></Right>
    </Header>
   <Content>



          
          <Form>
          <Item>
          <Icon name="home"/>
          <Input placeholder="item text box"/>

          </Item>

          <Item >
          
          <Input placeholder="item text box"/>
          <Icon name="home"/>
          </Item>

          <Item success>
          
          <Input placeholder="item text box"/>
          <Icon name="checkmark-circe"/>
          </Item>

          <Item error>
          
          <Input placeholder="item text box"/>
          <Icon name="close-circle"/>
          </Item>

          <Item disabled>
          
          <Input placeholder="item text box"/>
          <Icon name="information-circle"/>
          </Item>

          </Form>

          <Form>
            <Textarea bordered rowSpan={5} placeholder="TextArea"/>

          </Form>

       <Form>
          <Item regular>
          
          <Input placeholder="regular text box"/>
          
          
          </Item>

  <Item >
          
          <Input placeholder="underline text box"/>
          
          
          </Item>

  <Item rounded style={{marginTop:10}}>
          
          <Input placeholder="rounded  text box"/>
          
          
          </Item>

       </Form>


       <Form>
        <Item>
              <Input placeholder="username"/>
        </Item>
          
          <Item>
            <Input placeholder="password"/>
          </Item>

 <Button block style={{margin:10}}>
       <Text>
           Sign in
       </Text>
       </Button>
       </Form>


       <Form>
        <Item inlineLabel>
               <Label>username</Label>     
              <Input />
        </Item>
          
          <Item inlineLabel>
          <Label>password</Label>
            <Input />
          </Item>

 <Button block style={{margin:10}}>
       <Text>
           Sign in
       </Text>
       </Button>
       </Form>


        <Form>
        <Item floatingLabel>
               <Label>username</Label>     
              <Input />
        </Item>
          
          <Item floatingLabel>
          <Label>password</Label>
            <Input  />
          </Item>

 <Button block style={{margin:10}}>
       <Text>
           Sign in
       </Text>
       </Button>
       </Form>

 <Form>
        <Item stackedLabel>
               <Label>username</Label>     
              <Input />
        </Item>
          
          <Item stackedLabel>
          <Label>password</Label>
            <Input />
          </Item>

 <Button block style={{margin:10}}>
       <Text>
           Sign in
       </Text>
       </Button>
       </Form>
      

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

export {Forms};
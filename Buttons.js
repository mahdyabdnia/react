import React,{Component} from 'react';
import {StyleSheet} from 'react-native'
import {Container,Header,Left,Button,Icon, Body, Title, Right, Content,Text,Footer,FooterTab,Drawer} from 'native-base';
import {SideBar} from './index'


class Buttons extends Component{
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
        <Title>Buttons</Title>
      </Body>
    
      <Right><Title>Buttons</Title></Right>
    </Header>
    <Content>

    
      <Title style={styles.titleStyle}>button theme</Title>
      <Button rounded light style={styles.buttonStyle}>
      <Text>light</Text>
      </Button>

      <Button primary style={styles.buttonStyle}>
      <Text>Primary</Text>
      </Button>

      <Button success style={styles.buttonStyle}>
      <Text>Success</Text>
      </Button>

      <Button info style={styles.buttonStyle}>
      <Text>Info</Text>
      </Button>
       
      <Button danger style={styles.buttonStyle}>
      <Text>Danger</Text>
      </Button>

      <Button warning style={styles.buttonStyle}>
      <Text>Warning</Text>
      </Button>
      <Button dark style={styles.buttonStyle}>
      <Text>Dark</Text>
      </Button>
      

      

       <Title style={styles.titleStyle}>transparent Button</Title>

       <Button transparent light sytle={styles.buttonStyle}>
       <Text>light</Text>
       
       </Button>

       <Button transparent primary sytle={styles.buttonStyle}>
       <Text>Primary</Text>
       
       </Button>


<Button transparent info sytle={styles.buttonStyle}>
       <Text>Ino</Text>
       
       </Button>

       <Button transparent success sytle={styles.buttonStyle}>
       <Text>Success</Text>
       
       </Button>

       <Button transparent danger sytle={styles.buttonStyle}>
       <Text>Danger</Text>
       
       </Button>

       <Button transparent warning sytle={styles.buttonStyle}>
       <Text>Warning</Text>
       
       </Button>

       <Button transparent dark sytle={styles.buttonStyle}>
       <Text>Dark</Text>
       
       </Button>






       <Title style={styles.titleStyle}>outline Button</Title>

<Button bordered light sytle={styles.buttonStyle}>
<Text>light</Text>

</Button>

<Button bordered primary sytle={styles.buttonStyle}>
<Text>Primary</Text>

</Button>


<Button bordered info sytle={styles.buttonStyle}>
<Text>Ino</Text>

</Button>

<Button bordered success sytle={styles.buttonStyle}>
<Text>Success</Text>

</Button>

<Button bordered danger sytle={styles.buttonStyle}>
<Text>Danger</Text>

</Button>

<Button bordered warning sytle={styles.buttonStyle}>
<Text>Warning</Text>

</Button>

<Button bordered dark sytle={styles.buttonStyle}>
<Text>Dark</Text>

</Button>




 <Title style={styles.titleStyle}>rounded Button</Title>

<Button rounded light sytle={styles.buttonStyle}>
<Text>light</Text>

</Button>

<Button rounded primary sytle={styles.buttonStyle}>
<Text>Primary</Text>

</Button>


<Button rounded info sytle={styles.buttonStyle}>
<Text>Ino</Text>

</Button>

<Button rounded success sytle={styles.buttonStyle}>
<Text>Success</Text>

</Button>

<Button rounded danger sytle={styles.buttonStyle}>
<Text>Danger</Text>

</Button>

<Button rounded warning sytle={styles.buttonStyle}>
<Text>Warning</Text>

</Button>

<Button rounded dark sytle={styles.buttonStyle}>
<Text>Dark</Text>

</Button>


 <Title style={styles.titleStyle}>blocked Button</Title>

<Button block light sytle={styles.buttonStyle}>
<Text>light</Text>

</Button>

<Button block primary sytle={styles.buttonStyle}>
<Text>Primary</Text>

</Button>


<Button block info sytle={styles.buttonStyle}>
<Text>Ino</Text>

</Button>

<Button block success sytle={styles.buttonStyle}>
<Text>Success</Text>

</Button>

<Button block danger sytle={styles.buttonStyle}>
<Text>Danger</Text>

</Button>

<Button block warning sytle={styles.buttonStyle}>
<Text>Warning</Text>

</Button>

<Button block dark sytle={styles.buttonStyle}>
<Text>Dark</Text>

</Button>

<Title style={styles.titleStyle}>full Button</Title>

<Button full light sytle={styles.buttonStyle}>
<Text>light</Text>

</Button>

<Button full primary sytle={styles.buttonStyle}>
<Text>Primary</Text>

</Button>


<Button full info sytle={styles.buttonStyle}>
<Text>Ino</Text>

</Button>

<Button full success sytle={styles.buttonStyle}>
<Text>Success</Text>

</Button>

<Button full danger sytle={styles.buttonStyle}>
<Text>Danger</Text>

</Button>

<Button full warning sytle={styles.buttonStyle}>
<Text>Warning</Text>

</Button>

<Button full dark sytle={styles.buttonStyle}>
<Text>Dark</Text>

</Button>


<Title style={styles.titleStyle}>Icon button</Title>


     <Button iconLeft primary>
     <Icon name='home'></Icon>
     <Text>Home</Text>
     
     
     </Button>


     <Button disabled style={styles.buttonStyle}>


<Text>  Diabled    </Text>
     </Button>

<Button iconLeft disabled large>
<Icon name='arrow-forward'></Icon>
<Text>next</Text>


</Button>





















      

      

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

export {Buttons};
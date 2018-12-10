import React,{Component} from 'react';
import {StyleSheet,Image} from 'react-native'
import {Container,Header,Thumbnail,Left,CardItem,Button,Icon, Body, Title, Right, Content,Text,Footer,FooterTab,Drawer,Card} from 'native-base';
import {SideBar} from './index'


class Cards extends Component{
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
        <Title>Cards</Title>
      </Body>
    
      <Right><Title>Cards</Title></Right>
    </Header>
    <Content>
      <Title>Card Header and Footer</Title>

      <Card>



        <CardItem>
          <Left>
            <Thumbnail source={require('../image/11.png')}/>
        

        <Body>
          <Text>native base</Text>
          <Text button onPress={()=>alert('loading ReactApp.ir')}>ReactApp</Text>
          </Body> 

          </Left>



        </CardItem>
       <CardItem>
         <Left>
           <Button transparent>
           <Icon  active name="md-thumbs-up"/>
           <Text>8 like</Text>
           
           </Button>

         </Left>

         <Body>
           <Button transparent>
           <Icon active name="chatbubbles"/>
           <Text>8 comment</Text>
           </Button>






         </Body>


<Right>
  <Button transparent>
  <Text>8 hours ago</Text>

  </Button>
</Right>


       </CardItem>



      </Card>

      <Card><CardItem button onPress={()=>alert('Go to  www.googleplus.com')}>
        <Icon name="logo-googleplus" active style={{color:'red'}}/>
        <Text>Google Plus</Text>
        <Right>
          <Icon name="arrow-forward"/>
        </Right>
        
        </CardItem>
        
        
        <CardItem button  onPress={()=>alert('Go to  www.facebook.com')} >
        <Icon name="logo-facebook" active style={{color:'blue'}}/>
        <Text>Facebook</Text>
        <Right>
          <Icon name="arrow-forward"/>
        </Right>
        
        </CardItem>
        
        <CardItem button onPress={()=>alert('Go to  www.instagram.com')} >
        <Icon name="logo-instagram" active style={{color:'brown'}}/>
        <Text>instagram</Text>
        <Right>
          <Icon name="arrow-forward"/>
        </Right>
        
        </CardItem>

        <CardItem button onPress={()=>alert('Go to  www.Yahoo.com')} >
        <Icon name="logo-youtube" active style={{color:'red'}}/>
        <Text>youtube</Text>
        <Right>
          <Icon name="arrow-forward"/>
        </Right>
        
        </CardItem>
        
        
        
        
        </Card>

      <Card transparent>

        <CardItem><Body>
          <Text>this is a card transparent</Text></Body>
        </CardItem>
      </Card>



      <Card>

        <CardItem header button onPress={()=>alert('this is a card header')}>
        <Text>ReactApp.ir</Text>
        </CardItem>

        <CardItem primary button onPress={()=>alert('this is a card button')}>
        <Text>Button</Text>
        </CardItem>

        
        <CardItem footer button onPress={()=>alert('this is a card footer')}>
        <Text>ReactApp.ir</Text>
        </CardItem>

      </Card>
      <Card style={{marginLeft:10}}>



        <CardItem header> 
        <Text>ReactApp.ir</Text>

        </CardItem>
        <CardItem><Text>trtrtrtrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrhhgh tyty yty tytyt ytyt yt yty554545guuyuyuy</Text></CardItem>

        <CardItem footer><Text>ReactApp.ir</Text></CardItem>
      </Card>

       <Card style={{margin:10}}>



<CardItem header bordered> 
<Text>ReactApp.ir</Text>

</CardItem>
<CardItem bordered><Text>trtrtrtrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrhhgh tyty yty tytyt ytyt yt yty554545guuyuyuy</Text></CardItem>

<CardItem footer bordered><Text>ReactApp.ir</Text></CardItem>
</Card>


    
      
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

export {Cards};
import React,{Component} from 'react';
import {StyleSheet,Image} from 'react-native';
import {Container,Content,Text,List, ListItem, Left, Body, Right, Button, Icon} from 'native-base';

 class SideBar extends Component{
    
    
      

  

    render(){
        
        return(

            <Container style={styles.SideBarStyle}>
            <Content>
             <Image source={require('../image/11.png')} style={{width:'100%',height:150}} />
               <List>
                   <ListItem>



                       <Left>
                           <Text>native base</Text>
                       </Left>
                   <Body></Body>
                   <Right>

                       <Button rounded style={{width:100,height:30}}><Text>Primary</Text></Button>
                   </Right>



                   </ListItem>
                   <ListItem icon>
                  <Left>
                     <Icon name="alert" style={{color:'pink'}}></Icon> 
                      
                      </Left>
                  <Body>
                      <Text onPress={()=>this.props.navigate('Badge')}>badge</Text>
                  </Body>
                  <Right>
                      



                  </Right>




                   </ListItem>
                   <ListItem icon>
                  <Left>
                     <Icon name="refresh" style={{color:'pink'}}></Icon> 
                      
                      </Left>
                  <Body>
                      <Text onPress={()=>this.props.navigate('Buttons')}>Button</Text>
                  </Body>
                  <Right>
                      <Button primary style={{width:100,height:30}} onPress={()=>this.props.navigate('Buttons')}><Text>9Types</Text></Button>



                  </Right>




                   </ListItem>


                   <ListItem icon>
                    <Left>
                    <Icon name="eye" style={{fontSize:22}}></Icon> 
                    </Left>
                    <Body><Text onPress={()=>this.props.navigate('Cards')}>Cards</Text>
                    </Body>

                    <Right>

                        <Button primary style={{width:100,height:30}} onPress={()=>this.props.navigate('Cards')} ><Text>7Types</Text></Button>
                    </Right>
                   </ListItem>

                   <ListItem icon>
                    <Left></Left>
                    <Body><Text onPress={()=>this.props.navigate('CheckBoxes')}>Check Box</Text></Body>
                    <Right></Right>

                   </ListItem>

                   <ListItem icon>
                    <Left>
                    <Icon name="md-autorenew" style={{fontSize:22}}></Icon> 
                    </Left>
                    <Body><Text onPress={()=>this.props.navigate('Deckswipers')}>Deckswipers</Text>
                    </Body>

                    <Right>

                        <Button primary style={{width:100,height:30}} onPress={()=>this.props.navigate('Deckswipers')} ><Text>2Types</Text></Button>
                    </Right>
                   </ListItem>


                   <ListItem icon>
                    <Left>
                        <Icon name='share' style={{ fontSize:22,color:'BLUE'}}/>
                    </Left>
                    <Body>
                        <Text onPress={()=>this.props.navigate('Fabs')}>FAB</Text>
                    </Body>
                    <Right></Right>



                   </ListItem>

                   <ListItem icon>
                    <Left>
                        <Icon name='forum' style={{fontSize:22,color:'blue'}} type='MaterialIcons' />
                    </Left>

                    <Body>
                         <Text onPress={()=>this.props.navigate('Forms')}>Forms</Text>

                    </Body>
                    <Right>

                        <Button  danger style={{height:30,width:100}} onPress={()=>this.props.navigate('Forms')}><Text>12Types</Text></Button>
                    </Right>
                   </ListItem>



                     <ListItem icon>
                    <Left>
                        <Icon name='face' style={{fontSize:22,color:'blue'}} type='MaterialIcons' />
                    </Left>

                    <Body>
                         <Text onPress={()=>this.props.navigate('Headers')}>Headers</Text>

                    </Body>
                    <Right>

                        <Button  danger style={{height:30,width:100}} onPress={()=>this.props.navigate('Headers')}><Text>12Types</Text></Button>
                    </Right>
                   </ListItem>
                   
                   <ListItem icon>
                   <Left>

                       <Icon name='assignment' style={{fontSize:22,color:'grey'}} type='MaterialIcons' />
                   </Left>
                   <Body>
                       <Text onPress={()=>this.props.navigate('Layouts')}>Layouts</Text>
                   </Body>
                   <Right><Button warning onPress={()=>this.props.navigate('Layouts')}>
                       <Text>2 Types</Text>
                       
                       </Button></Right>
                   
                   
                   
                   </ListItem>

                    <ListItem icon>
                   <Left>

                       <Icon name='layers' style={{fontSize:22,color:'grey'}} type='MaterialIcons' />
                   </Left>
                   <Body>
                       <Text onPress={()=>this.props.navigate('Lists')}>Lists</Text>
                   </Body>
                   <Right><Button warning onPress={()=>this.props.navigate('Lists')}>
                       <Text>2 Types</Text>
                       
                       </Button></Right>
                   
                   
                   
                   </ListItem>
                   
               </List>

            </Content>
            
            
            </Container>
        )
    }


}



const styles=StyleSheet.create({

SideBarStyle:{
    flex:1,
    backgroundColor:'#FFF',
   
}





})
export {SideBar};
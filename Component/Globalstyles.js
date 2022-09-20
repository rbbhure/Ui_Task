import { StyleSheet } from "react-native"


export  const Globalstyles  = StyleSheet.create({
    imageview: {
        justifyContent: 'center', alignItems: 'center', margin:8
    },
    text1:{
    fontWeight:'800',fontSize:30,color:'black',
    fontFamily:'Aboreto-Regular'
        
    },
    text2:{
        fontSize:22,
        textAlign:'center',
        color:'black',
        fontWeight:'600',
        fontFamily:'Aboreto-Regular',
    },
    text3:{
        fontSize:16,
        color:'black',
        textAlign:'center',
        fontFamily:'Aboreto-Regular',
        fontWeight:'300'
        
        
    },
    text4:{
        fontSize:22,
        color:'black',
        fontWeight:'bold',
        

    },
    headerview:{
    height:60,
    backgroundColor:'#008080',
    
    paddingHorizontal:10,
    flexDirection:'row',
    alignItems:'center'
    },
    titleview:{
        marginHorizontal:30,
        margin:10,
        borderWidth:1,
        borderColor:'black',
        borderRadius:10, flexDirection:'row',
        paddingVertical:15,
        paddingLeft:15,
        paddingRight:10,
        justifyContent:'space-between'
    },
    text5:{
        color:'black',
        fontWeight:'700',
        fontSize:20,

    },
    text6:{
        fontSize:22,
        fontWeight:'900',
        color:'black',
        fontFamily:'tahoma'
        
    },
    subheaderview:{
        margin:10,
        marginHorizontal:30,
    }
})
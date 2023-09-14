import { StyleSheet, Text, View,Image,ScrollView } from 'react-native'
import React from 'react'


const Translation= () => {
    
  return (
    <View>

    <ScrollView>
      <Image
        style={{
            width:400,
            height:400,
            marginLeft:5,
            marginRight:5,
            resizeMode:"contain",
        }}
        source={{uri:"https://evreka.co/wp-content/uploads/2021/03/59907-min-scaled.jpg"}}
      />
       <Text style={styles.heading}>ପୃଥକତା କାହିଁକି ଗୁରୁତ୍ୱପୂର୍ଣ୍ଣ?</Text>
       <Text style={styles.container}>ବର୍ଜ୍ୟବସ୍ତୁ ପୃଥକକରଣ କେବଳ ପରିବେଶ ଉପରେ ଏହାର ପ୍ରଭାବକୁ ହ୍ରାସ କରିବା ପାଇଁ ନୁହେଁ, ବରଂ ବର୍ଜ୍ୟବସ୍ତୁ ଏବଂ ବିଷାକ୍ତ ପଦାର୍ଥରୁ ଉପୁଜିଥିବା ସ୍ୱାସ୍ଥ୍ୟ ସମସ୍ୟା ମଧ୍ୟ ଗୁରୁତ୍ୱପୂର୍ଣ୍ଣ |
        </Text>
        <Text style={styles.container}>ବର୍ଜ୍ୟବସ୍ତୁ ପୃଥକକରଣ ମଧ୍ୟ ଏକ ଆର୍ଥିକ ଦୃଷ୍ଟିରୁ ଲାଭଦାୟକ ଆଶା କାରଣ ଏହା ପୁନ yc ବ୍ୟବହାରକୁ ଅଧିକ ସହଜ କରିଥାଏ |</Text>
        <Text style={styles.heading}>ବିଭିନ୍ନ ପ୍ରକାରର ଆବର୍ଜନା କ’ଣ?</Text>
        <Text style={styles.wasteTypes}>ତରଳ ବର୍ଜ୍ୟବସ୍ତୁ:</Text><Text style={styles.container}> ତରଳ ବର୍ଜ୍ୟବସ୍ତୁ ସମସ୍ତ ଗ୍ରୀସ୍, ତେଲ, କାଦୁଅ, ଧୋଇବା ପାଣି, ବର୍ଜ୍ୟବସ୍ତୁ ଡିଟର୍ଜେଣ୍ଟ ଏବଂ ଅପରିଷ୍କାର ଜଳକୁ ବୁ  ାଏ |</Text>
         <Text style={styles.wasteTypes}>କଠିନ ବର୍ଜ୍ୟବସ୍ତୁ:</Text>
         <Text style={styles.container}>କଠିନ ବର୍ଜ୍ୟବସ୍ତୁ ହେଉଛି ଯେକ  ଣସି ଅଳିଆ, କାଦୁଅ, ଏବଂ ଶିଳ୍ପ ଏବଂ ବ୍ୟବସାୟିକ ସ୍ଥାନରେ ମିଳୁଥିବା ଆବର୍ଜନା |</Text>
         <Text style={styles.wasteTypes}>ପ୍ରାକୃତିକ ବ ବର୍ଜ୍ୟବସ୍ତୁ:</Text>
         <Text style={styles.container}>ପ୍ରାକୃତିକ ବ ବର୍ଜ୍ୟବସ୍ତୁ ପତଳା ମାଂସ, ବଗିଚା ଏବଂ ଖାଦ୍ୟ ଆବର୍ଜନାକୁ ବୁ .ାଏ | ଏହି ପ୍ରକାର ଆବର୍ଜନା ସାଧାରଣତ ଘର ଘରେ ଦେଖାଯାଏ | ସମୟ ସହିତ, ସେମାନେ କ୍ଷୟ ହୋଇ ଖତରେ ପରିଣତ ହୁଅନ୍ତି | କିନ୍ତୁ ସାବଧାନ ରୁହ; ତୁମେ ଯେକ ପରି ଣସି ସ୍ଥାନରେ ସେଗୁଡିକୁ ବିସର୍ଜନ କରିବା ଉଚିତ୍ ନୁହେଁ |</Text>
         <Text style={styles.wasteTypes}> ପୁନ  ବ୍ୟବହାର ଯୋଗ୍ୟ ବର୍ଜ୍ୟବସ୍ତୁ:</Text>
         <Text style={styles.container}>ଧାତୁ, ଆସବାବପତ୍ର, ଜ ପ୍ରାକୃତିକ ବ ବର୍ଜ୍ୟବସ୍ତୁ ପରି ସମସ୍ତ ବର୍ଜିତ ଆଇଟମ୍ |</Text>
         <Text style={styles.wasteTypes}> ବିପଦପୂର୍ଣ୍ଣ ବର୍ଜ୍ୟବସ୍ତୁ:</Text>
         <Text style={styles.container}>ବିପଜ୍ଜନକ ବର୍ଜ୍ୟବସ୍ତୁରେ ଜ୍ୱଳନ୍ତ, କ୍ଷତିକାରକ, ବିଷାକ୍ତ ଏବଂ ପ୍ରତିକ୍ରିୟାଶୀଳ ସାମଗ୍ରୀ ଅନ୍ତର୍ଭୁକ୍ତ | ସଂକ୍ଷେପରେ, ସେଗୁଡ଼ିକ ହେଉଛି ବର୍ଜ୍ୟବସ୍ତୁ ଯାହା ଆମ ପରିବେଶ ପାଇଁ ଏକ ମହତ୍ କିମ୍ବା ପୂର୍ଣ୍ଣ କିମ୍ବା ସମ୍ଭାବ୍ୟ ବିପଦ ସୃଷ୍ଟି କରେ |</Text>
         <Text style={styles.heading}>ରିସାଇକ୍ଲିଂ କାହିଁକି ଗୁରୁତ୍ୱପୂର୍ଣ୍ଣ?</Text>
         <Text style={styles.container}> ଅଧିକରୁ ଅଧିକ ଲୋକ ପ୍ରତିଦିନ ରିସାଇକ୍ଲିଂ କରନ୍ତି | ଏହା ଲ୍ୟାଣ୍ଡଫିଲ୍ ଏବଂ ଅଧିକ ବ୍ୟୟବହୁଳ ନିଷ୍କାସନର ଆବଶ୍ୟକତା ହ୍ରାସ କରିବାରେ ସାହାଯ୍ୟ କରେ |
ରିସାଇକ୍ଲିଂ ଖଣି, ଖଣି ଖନନ, ଏବଂ ଲଗିଂ ରିଫାଇନିଂ ଏବଂ କଞ୍ଚାମାଲ ପ୍ରକ୍ରିୟାକରଣର ଆବଶ୍ୟକତାକୁ ମଧ୍ୟ ହ୍ରାସ କରିଥାଏ ଯାହା ବାୟୁ ଏବଂ ଜଳ ପ୍ରଦୂଷଣ ସୃଷ୍ଟି କରିଥାଏ | ଏହା ଗ୍ରୀନ୍ହାଉସ୍ ଗ୍ୟାସ୍ ନିର୍ଗମନକୁ ହ୍ରାସ କରିବାରେ ଏବଂ ଜଳବାୟୁ ପରିବର୍ତ୍ତନକୁ ମୁକାବିଲା କରିବାରେ ସାହାଯ୍ୟ କରିଥାଏ |</Text>
</ScrollView>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
        marginLeft:20, fontSize:18,fontStyle:'normal',fontWeight:'bold',color:'lavender ',marginTop:10,
        marginBottom:20
    },
    heading:{
        fontWeight: 'bold',
        fontSize:30,
        color: 'indigo',
        marginLeft:20,
        alignItems: 'center',
        marginBottom:20,

    },
    wasteTypes:{
        fontWeight:'bold',
        fontSize:19,
        color:'lightslategrey',
        marginBottom:10,
        marginLeft:20,
    },
  });

export default Translation;





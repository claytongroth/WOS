<ScrollView>
<View style={styles.container}>
  <Image source={require('./assets/ReactNativeFirebase.png')} style={[styles.logo]}/>
  <Text style={styles.welcome}>
    Welcome to {'\n'} React Native Firebase
  </Text>
  <Text style={styles.instructions}>
    To get started, edit App.js
  </Text>
  {Platform.OS === 'ios' ? (
    <Text style={styles.instructions}>
      Press Cmd+R to reload,{'\n'}
      Cmd+D or shake for dev menu
    </Text>
  ) : (
    <Text style={styles.instructions}>
      Double tap R on your keyboard to reload,{'\n'}
      Cmd+M or shake for dev menu
    </Text>
  )}
  <View style={styles.modules}>
    <Text style={styles.modulesHeader}>The following Firebase modules are pre-installed:</Text>
    {firebase.admob.nativeModuleExists && <Text style={styles.module}>admob()</Text>}
    {firebase.analytics.nativeModuleExists && <Text style={styles.module}>analytics()</Text>}
    {firebase.auth.nativeModuleExists && <Text style={styles.module}>auth()</Text>}
    {firebase.config.nativeModuleExists && <Text style={styles.module}>config()</Text>}
    {firebase.crashlytics.nativeModuleExists && <Text style={styles.module}>crashlytics()</Text>}
    {firebase.database.nativeModuleExists && <Text style={styles.module}>database()</Text>}
    {firebase.firestore.nativeModuleExists && <Text style={styles.module}>firestore()</Text>}
    {firebase.functions.nativeModuleExists && <Text style={styles.module}>functions()</Text>}
    {firebase.iid.nativeModuleExists && <Text style={styles.module}>iid()</Text>}
    {firebase.links.nativeModuleExists && <Text style={styles.module}>links()</Text>}
    {firebase.messaging.nativeModuleExists && <Text style={styles.module}>messaging()</Text>}
    {firebase.notifications.nativeModuleExists && <Text style={styles.module}>notifications()</Text>}
    {firebase.perf.nativeModuleExists && <Text style={styles.module}>perf()</Text>}
    {firebase.storage.nativeModuleExists && <Text style={styles.module}>storage()</Text>}
  </View>
</View>
</ScrollView>
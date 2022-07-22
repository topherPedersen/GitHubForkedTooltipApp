import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
  Button,
} from 'react-native';
import Tooltip from 'react-native-walkthrough-tooltip';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showTooltip: false,
    }
  }

  // render() {
  //   return(
  //     <SafeAreaView style={{flex: 1 }}>
  //       <ScrollView style={{ flex: 1 }}>
  //         <Tooltip
  //           isVisible={true}
  //           content={<Text>Check this out!</Text>}
  //           placement="top"
  //           onClose={() => console.log('handle onClose')}
  //           useInteractionManager={true}
  //         >
  //           <View 
  //             style={{ backgroundColor: 'white', marginTop: 250, marginLeft: 50 }}
  //             onLayout={(event) => {
  //               const { x, y, width, height } = event.nativeEvent.layout;
  //               console.log(`App, x: ${x} y: ${y}`);
  //             }}
  //           >
  //             <Text>RNWalkthroughTooltip Playground</Text>
  //           </View>
  //         </Tooltip>
  //       </ScrollView>
  //     </SafeAreaView>
  //   );
  // }

  showTooltip = () => {
    this.setState({ showTooltip: true });
  }

  hideTooltip = () => {
    this.setState({ showTooltip: false });
  };

  renderTooltipContent = () => {
    return (
      <View style={{ width: 125, height: 75, backgroundColor: 'red' }}>

      </View>
    );
  };

  render() {
    return(
      <SafeAreaView style={{flex: 1 }}>
        <Tooltip
          isVisible={this.state.showTooltip}
          content={this.renderTooltipContent()}
          onClose={this.hideTooltip}
          useInteractionManager={true}
          // placement="top"
          // childContentSpacing={-235}
          placement="top"
          // childContentSpacing={-100}
          // iPhone 13, horizontalAdjustment = -60
          // iPhone SE 2nd Gen: -52.5
          horizontalAdjustment={-52.5}
        >
          <View 
            style={{ backgroundColor: 'white', marginTop: 250, marginLeft: 50 }}
            onLayout={(event) => {
              const { x, y, width, height } = event.nativeEvent.layout;
              console.log(`App, x: ${x} y: ${y}`);
            }}
          >
            <Text>RNWalkthroughTooltip Playground</Text>
          </View>
        </Tooltip>
        <Button title="SHOW TOOLTIP" onPress={this.showTooltip} />
      </SafeAreaView>
    );
  }
}

export default App;
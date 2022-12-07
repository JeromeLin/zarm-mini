import React from 'react';
import { View } from '@tarojs/components';
import { Button, Panel, Popup } from 'zarm-mini';

import './index.scss'


function PopupDemo() {
  const [visible, setVisible] = React.useState(false);
  return (
   <View className='page-main'>
     <Panel
       title='基本用法'
     >
       <Button onClick={() => setVisible(true)}>开启</Button>
     </Panel>
     <Popup visible={visible} onMaskClick={() => setVisible(false)}>
        <View className="popup-box">test</View>
    </Popup>
   </View>
  )
 }

 export default PopupDemo;

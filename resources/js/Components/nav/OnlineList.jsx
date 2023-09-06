import React from 'react'
import AvataImage from '../AvataImage'
import {
    List,
    ListItem,
    ListItemPrefix,
    ListItemSuffix,
    Chip,
    Card,
  } from "@material-tailwind/react";

function OnlineList() {
  return (
      <List className="my-2 p-0">
        <ListItem className="group py-1.5 px-3 text-sm font-normal text-blue-gray-700 hover:bg-blue-500 hover:text-white focus:bg-blue-500 focus:text-white">
          <AvataImage children='assets/avata/avata1.png'></AvataImage>
          <ListItemSuffix>
            <Chip
              value="+99"
              variant="ghost"
              size="sm"
              className="rounded-full px-2 py-1 text-xs group-hover:bg-white/20 group-hover:text-white"
            />
          </ListItemSuffix>
        </ListItem>
    </List>
    
  )
}

export default OnlineList
import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

export default function ActionTabs({handleChange, value}) {
  return (
    <Box sx={{ width: '100%' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="primary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
      >
        <Tab value="showvihcles" label="Vihcles" />
        <Tab value="registeration" label="Registeration" />
        <Tab value="maintenance" label="Maintenance" />
        <Tab value="analytics" label="Analytics" />
      </Tabs>
    </Box>
  );
}